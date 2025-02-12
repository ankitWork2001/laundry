import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.webp";
import { TiThMenu } from "react-icons/ti";
import { IoClose, IoChevronDownSharp } from "react-icons/io5";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="flex items-center justify-between px-4 py-4 bg-white shadow-md">
            <div className="flex items-center">
                <img src={logo} alt="Logo" className="h-10 w-auto" />
            </div>

            <div className="hidden md:flex flex-1 justify-center space-x-6 items-center">
                <Link to="/" className="text-gray-700 hover:text-gray-900">
                    Home
                </Link>
                <div className="relative" ref={dropdownRef}>
                    <button
                        className="flex items-center text-gray-700 hover:text-gray-900"
                        onClick={toggleDropdown}
                    >
                        Our Services <IoChevronDownSharp className="ml-1" />
                    </button>
                    {dropdownOpen && (
                        <div className="absolute top-8 left-0 bg-white shadow-md border rounded-lg w-48">
                            <Link
                                to="/washing-services"
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                onClick={() => setDropdownOpen(false)}
                            >
                                Washing Services
                            </Link>
                            <Link
                                to="/premium-dryclean-rate"
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                onClick={() => setDropdownOpen(false)}
                            >
                                Organic Dryclean
                            </Link>
                            <Link
                                to="/laundry-dryclean-rate"
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                onClick={() => setDropdownOpen(false)}
                            >
                                Dryclean
                            </Link>
                            <Link
                                to="/jacket-dry-cleaning-services"
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                onClick={() => setDropdownOpen(false)}
                            >
                                Jacket
                            </Link>
                            <Link
                                to="/shoe"
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                onClick={() => setDropdownOpen(false)}
                            >
                                Shoe
                            </Link>
                            <Link
                                to="/bag"
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                onClick={() => setDropdownOpen(false)}
                            >
                                Bag
                            </Link>
                            <Link
                                to="/sofa-carpet"
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                onClick={() => setDropdownOpen(false)}
                            >
                                Sofa/Carpet
                            </Link>
                            <Link
                                to="/steam-press"
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                onClick={() => setDropdownOpen(false)}
                            >
                                Steam Press
                            </Link>
                        </div>
                    )}
                </div>
                <Link to="/laundry-consultancy-planning-service" className="text-gray-700 hover:text-gray-900">
                    Consultancy
                </Link>
            </div>

            <div className="hidden md:flex space-x-4 items-center">
                <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white">
                    8800414848
                </button>
                <button className="px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600">
                    Request Call Back
                </button>
            </div>

            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-2xl text-gray-700">
                    {menuOpen ? <IoClose /> : <TiThMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-16 left-0 w-full bg-gray-100 shadow-md flex flex-col items-start p-4 space-y-4 md:hidden">
                    <Link to="/" className="text-gray-700 hover:text-gray-900" onClick={toggleMenu}>
                        Home
                    </Link>
                    <div className="w-full" ref={dropdownRef}>
                        <button
                            className="flex justify-between items-center w-full text-gray-700 hover:text-gray-900"
                            onClick={toggleDropdown}
                        >
                            Our Services <IoChevronDownSharp />
                        </button>
                        {dropdownOpen && (
                            <div className="flex flex-col bg-white shadow-md border rounded-lg">
                                <Link
                                    to="/washing-services"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                    onClick={() => {
                                        setDropdownOpen(false);
                                        setMenuOpen(false);
                                    }}
                                >
                                    Washing Services
                                </Link>
                                <Link
                                    to="/premium-dryclean-rate"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                    onClick={() => {
                                        setDropdownOpen(false);
                                        setMenuOpen(false);
                                    }}
                                >
                                    Organic Dryclean
                                </Link>
                                <Link
                                    to="/laundry-dryclean-rate"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                    onClick={() => {
                                        setDropdownOpen(false);
                                        setMenuOpen(false);
                                    }}
                                >
                                    Dryclean
                                </Link>
                                <Link
                                    to="/jacket-dry-cleaning-services"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                    onClick={() => {
                                        setDropdownOpen(false);
                                        setMenuOpen(false);
                                    }}
                                >
                                    Jacket
                                </Link>
                                <Link
                                    to="/shoe"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                    onClick={() => {
                                        setDropdownOpen(false);
                                        setMenuOpen(false);
                                    }}
                                >
                                    Shoe
                                </Link>
                                <Link
                                    to="/bag"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                    onClick={() => {
                                        setDropdownOpen(false);
                                        setMenuOpen(false);
                                    }}
                                >
                                    Bag
                                </Link>
                                <Link
                                    to="/sofa-carpet"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                    onClick={() => {
                                        setDropdownOpen(false);
                                        setMenuOpen(false);
                                    }}
                                >
                                    Sofa/Carpet
                                </Link>
                                <Link
                                    to="/steam-press"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                    onClick={() => {
                                        setDropdownOpen(false);
                                        setMenuOpen(false);
                                    }}
                                >
                                    Steam Press
                                </Link>
                            </div>
                        )}
                    </div>
                    <Link
                        to="/laundry-consultancy-planning-service"
                        className="text-gray-700 hover:text-gray-900"
                        onClick={toggleMenu}
                    >
                        Consultancy
                    </Link>
                    <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white">
                        8800414848
                    </button>
                    <button className="px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600">
                        Request Call Back
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
