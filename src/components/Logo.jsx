import { FaGithub } from "react-icons/fa";

function Logo() {
    return <div className="flex justify-around gap-x-6 items-center mx-6">
        <FaGithub className="text-5xl"/>
        <h1 className="text-xl text-accent font-semibold">Github Finder</h1>
    </div>
}

export default Logo