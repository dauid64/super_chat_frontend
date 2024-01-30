interface AuthInputProps {
    label: string
    tipo: 'text' | 'email' | 'password'
    obrigatorio?: boolean
    valor: any
    onChange: (novoValor: any) => void
}

export default function AuthInput(props: AuthInputProps) {
    return (
        <div className="flex flex-col">
            <label className="mt-4 font-bold text-lg">{props.label}</label>
            <input
                className="mt-2 p-3 rounded-lg w-full"
                type={props.tipo} 
                value={props.valor} 
                onChange={e => props.onChange?.(e.target.value)} 
                required={props.obrigatorio}
            />
        </div>
    )
}