interface ChatProps {
    listaContatosFechado: boolean
    messages?: any
    contactUser?: any
    onChange: (novaMensagem: string) => void
    sendMessage: () => void
    value: string
}

export default function SuperChat(props: ChatProps) {
    function renderizarConversa() {
        return props.messages?.map(message => {
            if(message.toUser.email === props.contactUser.email) {
                return (
                    <div className="m-10" key={`mensagem-${message.ID}`}>
                        <div className="bg-yellow-300 p-2 w-44 md:w-96 rounded-lg">
                            <span className="text-xs md:text-base">{message.text}</span>
                        </div>
                    </div>
                )
            } else {
                return(
                    <div className="flex justify-end m-10" key={`mensagem-${message.ID}`}>
                        <div className="bg-indigo-300 p-2 w-44 md:w-96 rounded-lg">
                            <span className="text-xs md:text-base">{message.text}</span>
                        </div>
                    </div>
                )
            }
        })
    }

    return (
        <div className={`bg-gray-300 relative m-5 rounded-lg flex-auto ${props.listaContatosFechado ? '' : 'hidden md:block'}`}>
            <div className="overflow-auto h-4/5" style={{height: '35rem'}}>
                {props.messages ? (
                    <>
                        {renderizarConversa()}
                        <div className="absolute w-1/2 bottom-5 left-1/4">
                            <input 
                                type="text" 
                                placeholder="Mande sua mensagem..."
                                className="w-full p-3 rounded-lg mb-10 self-end justify-self-center placeholder:text-xs md:placeholder:text-base"
                                onChange={e => props.onChange(e.target.value)}
                                value={props.value}
                                onKeyUp={
                                    (e) => {
                                        if (e.key === 'Enter' || e.keyCode === 13) {
                                            props.sendMessage()
                                        }
                                    }
                                }
                                />
                        </div>
                    </>
                ) : (
                    <div className="flex h-full items-center justify-center">
                        <h1 className="text-gray-500">Nenhuma Conversa Selecionada</h1>
                    </div>
                )}
            </div>
        </div>
    )
}