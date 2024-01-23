interface ContentProps {
    children?: any
}

export default function Content(props) {
    return (
        <div className="bg-slate-100 flex-auto flex">
            {props.children}
        </div>
    )
}