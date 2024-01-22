import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="text-gray-950 flex w-screen items-center justify-center bg-gradient-to-r from-indigo-500 to-yellow-500">
            <h1 className="mr-4 text-sm">Feito por Carlos David</h1>
            <ul className="m-4">
                <a href="https://github.com/dauid64"><li className="text-sm flex items-center"><FaGithub className="mr-2"/>Github</li></a>
                <a href="https://www.linkedin.com/in/carlos-david-castro-de-souza-neto-795a83210/"><li className="text-sm flex items-center"><FaLinkedin className="mr-2"/>Linkedin</li></a>
            </ul>
        </div>
    )
}