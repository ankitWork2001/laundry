import logo from '../Images/logo.webp'
const Footer = () => {
    return (
        <footer className="bg-white p-6 md:p-12">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo and Description */}
                <div>
                    <img
                        src={logo}
                        alt="DhobiLite Logo"
                        className="mb-4 max-w-[120px]"
                    />
                    <p className="text-gray-600">
                        DhobiLite is the one stop solution for all your garment laundry &
                        dry cleaning needs.
                    </p>
                    {/* Social Icons */}
                    <div className="flex mt-4 space-x-4 text-gray-600">
                        <a href="#" className="hover:text-blue-500">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="#" className="hover:text-blue-500">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="hover:text-blue-500">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="hover:text-blue-500">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>

                {/* Help & Support */}
                <div>
                    <h2 className="font-semibold text-gray-800 mb-4">Help & Support</h2>
                    <ul className="space-y-2">
                        <li>
                            <span className="text-gray-600">🕒 Monday-Sunday 9:00 AM - 10:00 PM</span>
                        </li>
                        <li>
                            <a href="tel:+918800414848" className="text-gray-600 hover:text-blue-500">
                                📞 +91 880 041 4848
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-600 hover:text-blue-500">
                                💬 WhatsApp
                            </a>
                        </li>
                        <li>
                            <a href="mailto:cc@dhobiLite.com" className="text-gray-600 hover:text-blue-500">
                                ✉️ cc@dhobiLite.com
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="font-semibold text-gray-800 mb-4">Quick Links</h2>
                    <ul className="space-y-2 text-gray-600">
                        <li><a href="#" className="hover:text-blue-500">Prepaid Plans</a></li>
                        <li><a href="#" className="hover:text-blue-500">FAQ</a></li>
                        <li><a href="#" className="hover:text-blue-500">Terms and Conditions</a></li>
                        <li><a href="#" className="hover:text-blue-500">Careers</a></li>
                        <li><a href="#" className="hover:text-blue-500">Franchise</a></li>
                        <li><a href="#" className="hover:text-blue-500">Consultancy</a></li>
                        <li><a href="#" className="hover:text-blue-500">Locate Us</a></li>
                        <li><a href="#" className="hover:text-blue-500">Blogs</a></li>
                    </ul>
                </div>

                {/* QR Code */}
                <div>
                    <h2 className="font-semibold text-gray-800 mb-4">Scan the QR Code</h2>
                    <p className="text-gray-600 mb-4">To Download Mobile App</p>
                    <img
                        src="/path-to-qr-code.png"
                        alt="QR Code"
                        className="max-w-[120px] mb-4"
                    />
                    <img
                        src="/path-to-dlai-logo.png"
                        alt="DLAI Logo"
                        className="max-w-[150px]"
                    />
                    <p className="text-gray-600 text-sm mt-2">DLAI Certified Member</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
