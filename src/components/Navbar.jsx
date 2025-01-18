import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../Images/logo.webp'
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="flex items-center justify-between p-4 bg-white shadow-md">
            <div className="flex items-center">
                <img src={logo} alt="Logo" className="h-10 w-auto" />
            </div>

            {/* Links for larger screens */}
            <div className="hidden md:flex space-x-6 items-center">
                <Link to="/" className=" hover:text-gray-900">Home</Link>
                <Link to="/" className=" hover:text-gray-900">Our Services</Link>
                <Link to="/laundry-consultancy-planning-service" className=" hover:text-gray-900">Consultancy</Link>
                <button className=" px-4 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white">8800414848</button>
                <button className=" px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600">
                    Request Call Back
                </button>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-2xl text-gray-700">
                    {menuOpen ? <IoClose /> : <TiThMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-16 left-0 w-full bg-gray-100 shadow-md flex flex-col items-start p-4 space-y-4 md:hidden">
                    <Link to="/" className="text-gray-700 hover:text-gray-900" onClick={toggleMenu}>Home</Link>
                    <Link to="/" className="text-gray-700 hover:text-gray-900" onClick={toggleMenu}>Our Services</Link>
                    <Link to="/laundry-consultancy-planning-service" className="text-gray-700 hover:text-gray-900" onClick={toggleMenu}>Consultancy</Link>
                    <button className=" px-4 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white">8800414848</button>
                    <button className=" px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600">
                        Request Call Back
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;