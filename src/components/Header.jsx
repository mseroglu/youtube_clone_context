import { Link, useNavigate } from "react-router-dom"
import { IoMdSearch } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { IoVideocam } from "react-icons/io5";
import { MdVideoLibrary } from "react-icons/md";

const Header = () => {
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const text = e.target[0].value
        navigate(`/results?search_query=${text}`)

    }
    return (
        <header className="flex justify-between items-center p-4">
            <Link to={"/"} className="flex items-center gap-2">
                <img className="w-[50px]" src="Youtube_logo.png" alt="logo" />
                <h3 className="text-2xl max-sm:hidden ">YouTube</h3>
            </Link>

            <form onSubmit={handleSubmit} 
            className="flex group border border-gray-400 rounded-full overflow-hidden ">
                <input type="text" placeholder="Ara"
                    className="bg-black text-white outline-none px-5 py-2 md:min-w-[400px] " />
                <button className="bg-zinc-800 px-4 text-2xl rounded-e p-1 hover:bg-zinc-700">
                    <IoMdSearch />
                </button>
            </form>

            <div className="flex px-2 text-2xl cursor-pointer">
                <div className="hover:bg-gray-700 p-2 rounded-full transition duration-200">
                    <FaBell />
                </div>
                <div className="hover:bg-gray-700 p-2 rounded-full transition duration-[200ms]">
                    <IoVideocam />
                </div>
                <div className="hover:bg-gray-700 p-2 rounded-full transition duration-200">
                    <MdVideoLibrary />
                </div>

            </div>
        </header>
    )
}

export default Header
