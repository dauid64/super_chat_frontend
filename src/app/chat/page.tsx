"use client";


import ContactsList from "@/components/contacts/ContactsList";
import Content from "@/components/template/Content";
import Footer from "@/components/template/Footer";
import Header from "@/components/template/Header";
import SuperChat from "@/components/chat/SuperChat";
import { useEffect, useState } from "react";
import Cookies from "js-cookie"
import useAuth from "@/data/hook/useAuth";

const BASE_URL_API = process.env.NEXT_PUBLIC_API_URL

export default function Chat() {
    const { user } = useAuth()
    const [contactListClose, setContactListClose] = useState(true)
    const [contactUser, setContactUser] = useState(null)
    const [messages, setMessages] = useState(null)
    const [message, setMessage] = useState('')

    async function searchContactUser(id: number) {
        const token = Cookies.get('token')

        const response = await fetch(BASE_URL_API + `/usuarios/${id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        })

        if (!response.ok) {
            const responseObj = await response.json()
            console.log(responseObj.erro)
        }

        const contactUser = await response.json()
        setContactUser(contactUser)
    }

    async function sendMessage() {
        const token = Cookies.get('token')
        const response = await fetch(BASE_URL_API + '/mensagens', {
            method: 'POST',
            body: JSON.stringify({
                'text': message,
                'toUserID': contactUser.ID,
            }),
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })

        if (!response.ok) {
            const responseObj = await response.json()
            console.log(responseObj.erro)
        }

        setMessage('')
    }

    useEffect(() => {
        if(contactUser) {
            const getMessages = async () => {
                const token = Cookies.get('token')

                const response = await fetch(BASE_URL_API + `/mensagens/${contactUser.ID}`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    }
                })

                const messages = await response.json()
                setMessages(messages)
            }

            getMessages()
        }
    }, [contactUser])

    return (
        <>
            <Header></Header>
                <Content>
                    <ContactsList toggleContacts={setContactListClose} fechado={contactListClose} searchContactUser={searchContactUser}></ContactsList>
                    <SuperChat listaContatosFechado={contactListClose} messages={messages} contactUser={contactUser} value={message} onChange={setMessage} sendMessage={sendMessage}></SuperChat>
                </Content>
            <Footer></Footer>
        </>
    )
}