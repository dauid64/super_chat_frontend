import Header from "@/components/template/Header";
import Footer from "@/components/template/Footer";
import Content from "@/components/template/Content";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Header></Header>
        <Content>
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-gray-950 text-2xl md:text-5xl font-bold">Bem vindo ao Super Chat</h1>
            <h2 className="text-gray-950 text-sm md:text-lg">Comunica-se com seus amigos da melhor maneira</h2>
            <a href="/cadastro" className="text-blue-600 underline-offset-2 hover:text-blue-500 text-xs md:text-base">Cadastre-se já!</a>
          </div>
        </Content>
      <Footer></Footer>
    </div>
  );
}
