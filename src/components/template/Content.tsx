interface ContentProps {
    children?: any
}

export default function Content(props) {
    return (
        <div className="bg-slate-100 flex-grow">
            {props.children}
        </div>
    )
}