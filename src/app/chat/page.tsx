"use client";


import ContactsList from "@/components/Contacts/ContactsList";
import Content from "@/components/template/Content";
import Footer from "@/components/template/Footer";
import Header from "@/components/template/Header";
import { useState } from "react";

export default function Chat() {
    const [ContactListClose, setContactListClose] = useState(false)

    return (
        <div className="flex flex-col h-screen">
        <Header></Header>
            <Content>
                <ContactsList onClick={setContactListClose} fechado={ContactListClose}></ContactsList>
            </Content>
        <Footer></Footer>
    </div>
    )
}