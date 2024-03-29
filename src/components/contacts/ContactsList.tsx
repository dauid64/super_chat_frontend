import { MdOutlineSlideshow } from "react-icons/md";
import Cookies from 'js-cookie'
import { useEffect, useState } from "react";
import useAuth from "@/data/hook/useAuth";

interface ContatcsListProps {
    fechado: boolean
    toggleContacts: (novoValor: boolean) => void
    searchContactUser: (id: number) => void
}

const BASE_URL_API = process.env.NEXT_PUBLIC_API_URL

export default function ContactsList(props: ContatcsListProps) {
    const [contacts, setContacts] = useState(null)

    useEffect(() => {
        async function getUsersAPI() {
            const token = Cookies.get('token')
            const res = await fetch(BASE_URL_API + '/usuarios', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            })
            const contacts = await res.json()
            setContacts(contacts)
        }

        getUsersAPI()
    }, [])

    function renderizarContatos() {
        return contacts?.map(contact => {
            return (
                <div className="flex items-center justify-center mt-2" key={`${contact.ID}`}>
                    <div className="bg-indigo-400 rounded-full w-11/12 flex items-center p-2" onClick={() => props.searchContactUser(contact.ID)}>
                        <div className="bg-gray-300 rounded-full w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center m-1">
                            <img className="w-10 h-10 lg:w-16 lg:h-16 rounded-full" />
                        </div>
                        <ul className="ml-3" key={`contatos-${contact.ID}`}>
                            <li className="text-xs lg:text-sm" >Nome: {contact.email}</li>
                        </ul>
                    </div>
                </div>
            )
        })
    }
    function renderizaListaDeContatos() {
        if (props.fechado) {
            return (
                <div className="bg-indigo-300 w-10 rounded-r-lg mt-3 h-8 cursor-pointer duration-300" onClick={() => props.toggleContacts(!props.fechado)}>
                    <MdOutlineSlideshow size={30} />
                </div>
            )
        } else {
            return (
            <div className="w-full md:w-1/4 bg-indigo-300 rounded-r-lg duration-300">
                <div className="flex justify-end pr-3 pt-1">
                    <button 
                    className="justify-self-end text-lg font-bold text-gray-950"
                    onClick={() => props.toggleContacts(!props.fechado)}
                >X</button>
                </div>
                <h1 className="text-gray-950 font-bold text-2xl text-center">Contatos</h1>
                {renderizarContatos()}
            </div>
            )
        }
    }
    return renderizaListaDeContatos()
}