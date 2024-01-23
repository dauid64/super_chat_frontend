interface ChatProps {
    listaContatosFechado: boolean
}

export default function SuperChat(props: ChatProps) {
    return (
        <div className={`bg-gray-300 relative m-5 rounded-lg flex-auto ${props.listaContatosFechado ? '' : 'hidden md:block'}`}>
            <div className="overflow-auto h-4/5">
                <div className="m-10">
                    <div className="bg-yellow-300 p-2 w-44 md:w-96 rounded-lg">
                        <span className="text-xs md:text-base">Olá como vai voce?</span>
                    </div>
                </div>
                <div className="flex justify-end m-10">
                    <div className="bg-indigo-300 p-2 w-44 md:w-96 rounded-lg">
                        <span className="text-xs md:text-base">Olá como vai voce?</span>
                    </div>
                </div>
                <div className="absolute w-1/2 bottom-5 left-1/4">
                    <input 
                        type="text" 
                        placeholder="Mande sua mensagem..."
                        className="w-full p-3 rounded-lg mb-10 self-end justify-self-center placeholder:text-xs"
                        />
                </div>
            </div>
        </div>
    )
}