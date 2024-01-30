"use client";


import ContactsList from "@/components/contacts/ContactsList";
import Content from "@/components/template/Content";
import Footer from "@/components/template/Footer";
import Header from "@/components/template/Header";
import SuperChat from "@/components/chat/SuperChat";
import { useEffect, useState } from "react";
import useAuth from "@/data/hook/useAuth";

export default function Chat() {
    const [ContactListClose, setContactListClose] = useState(true)
    const { user } = useAuth()
    console.log(user)

    return (
        <>
            <Header></Header>
                <Content>
                    <ContactsList onClick={setContactListClose} fechado={ContactListClose}></ContactsList>
                    <SuperChat listaContatosFechado={ContactListClose}></SuperChat>
                </Content>
            <Footer></Footer>
        </>
    )
}