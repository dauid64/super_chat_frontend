"use client";


import Header from "@/components/template/Header";
import Footer from "@/components/template/Footer";
import Content from "@/components/template/Content";
import useAuth from "@/data/hook/useAuth";


export default function Home() {
  const { user } = useAuth()

  return (
    <>
      <Header></Header>
        <Content>
          <div className="flex flex-col items-center justify-center h-full flex-auto">
            <h1 className="text-gray-950 text-2xl md:text-5xl font-bold">Bem vindo ao Super Chat</h1>
            { user ? (
              <>
                <h2 className="text-gray-950 text-sm md:text-lg">Olá de volta {user?.email}</h2>
                <a href="/chat" className="text-blue-600 underline-offset-2 hover:text-blue-500 text-xs md:text-base">Entre no seu chat!</a>
              </>
            ) : (
            <>
              <h2 className="text-gray-950 text-sm md:text-lg">Comunica-se com seus amigos da melhor maneira</h2>
              <a href="/cadastro" className="text-blue-600 underline-offset-2 hover:text-blue-500 text-xs md:text-base">Cadastre-se já!</a>
              <span className="text-gray-950 text-sm md:text-lg">Caso ja tenha uma conta, <a className="text-blue-600 underline-offset-2 hover:text-blue-500 text-xs md:text-base" href="/login">clique aqui!</a></span>
            </>
            )}
          </div>
        </Content>
      <Footer></Footer>
    </>
  );
}
