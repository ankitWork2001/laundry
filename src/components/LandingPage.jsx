import { useEffect, useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import specifice from '../Images/specifications-image.webp'
import panindia from '../Images/pan-india.webp'
import hero from '../Images/lady-with-laundry-in-hand.webp'
import appstore from '../Images/app-store.webp'
import googleplay from '../Images/google-play (1).webp'
import test1 from '../Images/deepshikha.webp'
import test2 from '../Images/shraddha.webp'
import test3 from '../Images/manish.webp'
import d1 from '../Images/dhobilite-franchise.webp'
import d2 from '../Images/dhobilite_process.webp'
import d3 from '../Images/laundry-drycleaning-tips.webp'
import d4 from '../Images/process-folowed-in-laundry.webp'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
    {
        name: "Shraddha Dey",
        role: "Associate, Samsung Electronics",
        image: test2,
        text: "DhobiLite rocks... very good service and faster than Domino's. Best dry cleaner near me.",
    },
    {
        name: "Manish Sharma",
        role: "IT Professional",
        image: test3,
        text: "I have been a regular customer of DhobiLite for over a year. Great service, highly recommended!",
    },
    {
        name: "Deepshikha",
        role: "Student, LBS",
        image: test1,
        text: "Best online laundry services in NCR. Great value for money and polite staff!",
    },
];

const cities = [
    "New Delhi", "Noida", "Gurgaon", "Ghaziabad", "Greater Noida", "Faridabad", "Ahmedabad", "Amravati", "Azamgarh", "Balrampur", "Bardoli", "Bhubaneswar", "Chennai", "Chirawa", "Chowkham, Arunachal Pradesh", "Coimbatore", "Cuttack", "Goa", "Gondia", "Gorakhpur", "Mysore", "Haldwani", "Serampore, Hooghly", "Chandannagar, Hooghly", "Chinsurah, Hooghly", "Hyderabad", "Jaipur", "Jammu", "Jhunjhunu", "Jodhpur", "Kaithal", "Kanpur", "Lucknow", "Maharajganj", "Moradabad", "Mumbai", "Muzaffar Nagar", "Nagaur", "Panchkula", "Patna", "Pimpri Chinchwad", "Pune", "Rourkela", "Sohna", "Vadodara", "Vapi", "WB, Raniganj", "WB, Asansol", "WB, Durgapur", "Zirakpur"
];

const LandingPage = () => {

    const [currentCity, setCurrentCity] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const typingInterval = setInterval(() => {
            setCurrentCity(cities[index]);
            setIndex((prevIndex) => (prevIndex + 1) % cities.length);
        }, 2000);

        return () => clearInterval(typingInterval);
    }, [index]);


    //   testinomial
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        arrows: false, 
    };
    //   testinomial

    // State to track the open FAQ item
    const [open, setOpen] = useState(null);

    // Function to toggle FAQ open/close
    const toggleFAQ = (index) => {
        setOpen(open === index ? null : index);
    };

    // FAQ data
    const faqData = [
        {
            question: "What type of cleaning services does DhobiLite offer?",
            answer: "DhobiLite offers a range of cleaning services, including laundry, dry cleaning, and more specialized services.",
        },
        {
            question: "Apart from laundry and dry cleaning, what other services does DhobiLite offer?",
            answer: "Other services include carpet cleaning, upholstery cleaning, and curtain cleaning, among others.",
        },
        {
            question: "Do you offer any discounts for first-time customers?",
            answer: "Yes, DhobiLite offers discounts to first-time customers. You can use the code APP30 to avail 25% off on your first service. We value our customers and strive to provide the best possible experience, and our first-time customer discount is just one of the many ways we show our appreciation."
        },
        {
            question: "Does DhobiLite have a minimum order amount for pickup and delivery services?",
            answer: "Yes, DhobiLite has a minimum order amount for pickup and delivery services. The minimum order amount varies by location, and it is usually communicated by SMS. Customers can also inquire about the minimum order amount by contacting the DhobiLite customer service team. For our first time users, our minimum order amount criteria is far less as compared to other users."
        },
        {
            question: "How can I avail discounts and offers at DhobiLite?",
            answer: "You need to install DhobiLite on your device to know about all special offers and discounts. We also offer some amazing discounts to our new customers. One can also avail coupons through referrals. Apart from this, keep an eye on the app to redeem all upcoming offers."
        },
        {
            question: "Is it possible to schedule a pickup and delivery online at DhobiLite?",
            answer: "Yes, it is possible to schedule a pickup and delivery of your laundry or dry cleaning items online through DhobiLite’s app and Whatsapp. The customers can select their preferred date and time for pickup and delivery. Customers can also track the status of their order and receive real-time updates on their mobile devices. Our app system ensures that the pickup and delivery process is hassle-free and convenient for our customers."
        },
        {
            question: "What do DhobiLite's prepaid plans mean?",
            answer: "DhobiLite provides a Pre-Paid plan with discounted rates for customers. Users can choose from various custom-tailored plans based on their needs, such as a plan with maximum discounts on dry-cleaning for frequent users. The plans have no expiration date, allowing customers to use them at their convenience."
        },
        {
            question: "What is DhobiLite's policy for lost or damaged items?",
            answer: "At DhobiLite, we take utmost care with every item we receive and make every effort to ensure that items are returned in the same condition as received. In the rare event that an item is lost or damaged during our service, we will reimburse up to a maximum of 3 times the processing cost of the garment to the customer only in DhobiLite Prepaid account."
        },
        {
            question: "Why DhobiLite's is the best laundry service provider near me?",
            answer: "DhobiLite is the top choice for laundry service near you. Our expert team takes great care of your clothes, using best -quality products and technology. You can book online easily and we deliver right to your door. Our service is fast, affordable, and reliable. We make sure your clothes are clean and fresh, just the way you like them. Let DhobiLite handle your laundry needs so you can focus on what’s important. Choose us for a hassle-free laundry experience right in your neighbourhood."
        },
        {
            question: "Is online laundry safe and reliable with DhobiLite?",
            answer: ""
        },
        {
            question: "How to find doorstep laundry service with DhobiLite?",
            answer: "Finding doorstep laundry service near you is easy with DhobiLite. Visit our website or app, enter your location details, and schedule a pickup. Our professional team ensures convenient, reliable, and secure laundry services right at your doorstep, saving you time and effort."
        },
        {
            question: "What are DhobiLite's business hours?",
            answer: "DhobiLite's customer service is available 24/7. You can contact DhobiLite by phone, email, or through the DhobiLite app."
        },
        {
            question: "What are DhobiLite's payment options?",
            answer: "DhobiLite accepts a variety of payment methods, including cash, UPI, credit card, and debit card. You can also pay for your order online or through the DhobiLite app."
        }
    ];

    // Cards data
    const cards = [
        { title: "DryClean", description: "We use various best available technology and machines to increase the longevity of your favourite...", icon: "👕" },
        { title: "Organic Dryclean", description: "Experience the epitome of freshness and eco-conscious care, where sustainability meets immaculate...", icon: "🧥" },
        { title: "Leather Jacket", description: "We use the latest technology and advanced machinery to ensure optimal preservation, extending...", icon: "🧥" },
        { title: "Shoe", description: "Shoe speaks louder than words. Our meticulous shoe cleaning service, combines advanced...", icon: "🧣" },
        { title: "Bag", description: "Cleaning a handbag or any other accessories, such as purses or clutches is a no brainer now....", icon: "👗" },
        { title: "Sofa", description: "Sofa cleaning expert care that breathes new life into your upholstery, creating a welcoming and...", icon: "🪟" },
        { title: "Carpet", description: "Innovative techniques and expert attention that breathes life back into your carpets, creating a...", icon: "👟" },
    ];

    return (
        <>
            <div className="flex flex-col items-center p-4 md:flex-row md:justify-between bg-blue-500">
                <div className="md:w-1/2">
                    <h1 className="text-6xl font-bold mb-4 text-white">
                        Dry Clean &<br /> Laundry with 48h<br /> delivery in <span className="text-yellow-500">50 cities</span><br />
                        <span className="text-blue-800 font-semibold">{currentCity}</span>
                    </h1>
                </div>
                <div className="mt-4 md:mt-0 md:w-1/2">
                    <img
                        src={hero}
                        alt="Dry Clean & Laundry"
                        className="max-w-full h-auto object-cover"
                    />
                </div>
            </div>

            <div className=" py-12">
                <div className="bg-white max-w-4xl mx-auto p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-center mb-8">Get Free Pickup Service</h2>


                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            placeholder="Location"
                            className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            type="text"
                            placeholder="Mobile Number"
                            className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            type="text"
                            placeholder="Address"
                            className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </form>
                    <div className="text-center mt-6">
                        <button
                            type="submit"
                            className="bg-orange-500 text-white py-3 px-8 rounded-full shadow hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300"
                        >
                            Call me back
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-blue-800 text-yellow-500 py-10 flex flex-col lg:flex-row items-center justify-between px-4">
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl lg:text-3xl font-semibold">Download DhobiLite™ Mobile App</h1>
                    <p className="text-lg lg:text-xl">Get 25% OFF on garment cleaning*.</p>
                </div>
                <div className="flex space-x-4 mt-4 lg:mt-0">
                    <img src={googleplay} alt="Google Play" className="h-12 lg:h-16" />
                    <img src={appstore} alt="App Store" className="h-12 lg:h-16" />
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold">Our Services</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-lg p-6 flex flex-col  "
                        >
                            <div className="text-4xl mb-4">{card.icon}</div>
                            <h2 className="text-xl font-bold mb-2">{card.title}</h2>
                            <p className="text-gray-600 mb-4">{card.description}</p>
                            <button className="text-blue-500 hover:underline">Read More</button>
                            <button className="text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white py-2 px-4 rounded-full">View Rate List</button>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center align-middle mt-6">
                    <button className="border border-yellow-400 bg-yellow-400 text-white px-4 py-2 rounded-full">
                        Request Callback
                    </button>
                </div>
            </div>

            {/* About Section */}
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-xl font-bold mb-4">
                            India is First On-Demand Laundry & Dry Cleaning Service Provider
                        </h2>
                        <p className="text-gray-700 mb-4">
                            DhobiLite™ is a premiere online Dry Cleaning service and Laundry service created by a group
                            of IIT-alumni with a vision to pioneer laundry service in India, through a focus on quality,
                            trust, personal commitment and superior customer service.
                        </p>
                        <p className="text-gray-700 mb-4">
                            DhobiLite is a professional On-Demand garment care, dry cleaning and finishing service which
                            caters to your personal wardrobe, car, shoes and all household products. We provide you the
                            best Online Dry-Cleaning and Laundry services with affordable pricing.
                        </p>
                        <p className="text-gray-700 mb-4">
                            We understand the pressure of a busy and high-powered life and hence provide services at your
                            doorstep. Looking for urgent laundry service or dry cleaning service? We can provide you in
                            48 hours, in an effort to match your busy schedule and the demands it necessarily entails.
                            From traditional self-service cleaning options to convenient online laundry service and dry
                            cleaning service with pick up and drop-off services, we have got you covered! We do laundry
                            and dry-cleaning of all types of garments and fabrics, even comforters, area rugs, sofa,
                            shoes, car and much more. We are here to make your life easier - we shall go to your home,
                            condo, apartment, office, or even your boat to pick up and deliver your articles.
                        </p>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src={panindia}
                            alt="img"
                            className="rounded-lg max-w-full h-auto"
                        />
                    </div>
                </div>
            </div>

            {/* Statistics Section */}
            <div className="container mx-auto px-4 py-10 bg-blue-100">
                <div className="flex flex-wrap justify-center gap-8">
                    {[
                        { value: "53.42L", label: "CLOTHES WASHED" },
                        { value: "8.73L", label: "ORDERS PROCESSED" },
                        { value: "4.54L", label: "SATISFIED FAMILIES" },
                        { value: "103", label: "OUTLETS" },
                        { value: "50", label: "CITIES" },
                        { value: "4.6", label: "RATING" },
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <h1 className="text-4xl font-bold text-blue-600">{stat.value}</h1>
                            <p className="text-gray-600">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold text-center mb-6">10-Step Formula for Exceptional Garment Cleaning Services</h2>
                <div className="flex flex-wrap justify-center gap-6">

                    <div className=" bg-white shadow-lg rounded-lg p-4 w-full sm:w-[48%] lg:w-[23%]">
                        <div className="bg-blue-500 text-white text-2xl font-bold rounded h-12 w-12 flex items-center justify-center">
                            1
                        </div>
                        <p className="ml-4 text-gray-800 font-medium">Dirty Clothes</p>
                    </div>
                    <div className=" bg-white shadow-lg rounded-lg p-4 w-full sm:w-[48%] lg:w-[23%]">
                        <div className="bg-blue-500 text-white text-2xl font-bold rounded h-12 w-12 flex items-center justify-center">
                            2
                        </div>
                        <p className="ml-4 text-gray-800 font-medium">Easy Pickup</p>
                    </div>
                    <div className=" bg-white shadow-lg rounded-lg p-4 w-full sm:w-[48%] lg:w-[23%]">
                        <div className="bg-blue-500 text-white text-2xl font-bold rounded h-12 w-12 flex items-center justify-center">
                            3
                        </div>
                        <p className="ml-4 text-gray-800 font-medium">Inspection by Experts</p>
                    </div>
                    <div className=" bg-white shadow-lg rounded-lg p-4 w-full sm:w-[48%] lg:w-[23%]">
                        <div className="bg-blue-500 text-white text-2xl font-bold rounded h-12 w-12 flex items-center justify-center">
                            4
                        </div>
                        <p className="ml-4 text-gray-800 font-medium">Dry Spotting with Steam and Chemicals</p>
                    </div>
                    <div className=" bg-white shadow-lg rounded-lg p-4 w-full sm:w-[48%] lg:w-[23%]">
                        <div className="bg-blue-500 text-white text-2xl font-bold rounded h-12 w-12 flex items-center justify-center">
                            5
                        </div>
                        <p className="ml-4 text-gray-800 font-medium">Preprocessing treatment</p>
                    </div>
                    <div className=" bg-white shadow-lg rounded-lg p-4 w-full sm:w-[48%] lg:w-[23%]">
                        <div className="bg-blue-500 text-white text-2xl font-bold rounded h-12 w-12 flex items-center justify-center">
                            6
                        </div>
                        <p className="ml-4 text-gray-800 font-medium">Processing</p>
                    </div>
                    <div className=" bg-white shadow-lg rounded-lg p-4 w-full sm:w-[48%] lg:w-[23%]">
                        <div className="bg-blue-500 text-white text-2xl font-bold rounded h-12 w-12 flex items-center justify-center">
                            7
                        </div>
                        <p className="ml-4 text-gray-800 font-medium">Steam Ironing</p>
                    </div>
                    <div className=" bg-white shadow-lg rounded-lg p-4 w-full sm:w-[48%] lg:w-[23%]">
                        <div className="bg-blue-500 text-white text-2xl font-bold rounded h-12 w-12 flex items-center justify-center">
                            8
                        </div>
                        <p className="ml-4 text-gray-800 font-medium">QC & Packing</p>
                    </div>
                    <div className=" bg-white shadow-lg rounded-lg p-4 w-full sm:w-[48%] lg:w-[23%]">
                        <div className="bg-blue-500 text-white text-2xl font-bold rounded h-12 w-12 flex items-center justify-center">
                            9
                        </div>
                        <p className="ml-4 text-gray-800 font-medium">Delivery</p>
                    </div>
                    <div className=" bg-white shadow-lg rounded-lg p-4 w-full sm:w-[48%] lg:w-[23%]">
                        <div className="bg-blue-500 text-white text-2xl font-bold rounded h-12 w-12 flex items-center justify-center">
                            10
                        </div>
                        <p className="ml-4 text-gray-800 font-medium">Happy Customer</p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src={specifice}
                            alt="img"
                            className="rounded-lg max-w-full h-auto"
                        />
                    </div>

                    <div className="w-full md:w-1/2">
                        <p className="text-blue-500 mb-4">OUR SPECIFICATIONS</p>
                        <h1 className="text-3xl font-bold mb-4">Why We Are The Best?</h1>
                        <p className="text-gray-700 mb-6">
                            We are striving continuously to provide you with laundry and dry-cleaning services for garments, shoes, and bags that are unique and one of their kind.
                        </p>
                        <div className="space-y-4">
                            <div>
                                <h2 className="text-xl font-semibold mb-2">Paperless</h2>
                                <p className="text-gray-600">Enhanced tracking and a greener approach.</p>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold mb-2">Real-Time Tracking</h2>
                                <p className="text-gray-600">Access real-time updates seamlessly.</p>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold mb-2">Free Pickup & Delivery</h2>
                                <p className="text-gray-600">Hassle-free laundry services at your doorstep.</p>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold mb-2">Enzyme-Based Cleaning Agents</h2>
                                <p className="text-gray-600">Effective and eco-friendly solutions.</p>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold mb-2">7-Day Satisfaction Guarantee</h2>
                                <p className="text-gray-600">Peace of mind with our guarantee policy.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center align-middle mt-6">
                    <button className="border border-yellow-400 bg-yellow-400 text-white px-4 py-2 rounded-full">
                        Request Callback
                    </button>
                </div>
            </div>


            <div className="container mx-auto p-4">
                <p className="text-center font-bold text-blue-500">OUR ARTICLES</p>
                <h2 className="text-center text-2xl font-bold mb-8">Blogs on Drycleaning & Laundry</h2>
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img className="w-full h-40 object-cover" src={d3} alt="Image" />
                        <div className="p-4">
                            <p className="text-sm text-gray-500">12 JAN, 2022</p>
                            <h2 className="text-lg font-bold mb-2">Laundry and Dry cleaning Tips</h2>
                            <p className="text-gray-700 mb-4">Washing clothes is a hard job especially if you are not familiar with doing it. To help you out, here are some tips.</p>
                            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Read Article</button>
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img className="w-full h-40 object-cover" src={d4} alt="Image" />
                        <div className="p-4">
                            <p className="text-sm text-gray-500">26 MAR, 2023</p>
                            <h2 className="text-lg font-bold mb-2">How to do Laundry? The right way.</h2>
                            <p className="text-gray-700 mb-4">Doing the laundry is a step-by-step process. The first step is to sort your laundry. Separate your whites...</p>
                            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Read Article</button>
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img className="w-full h-40 object-cover" src={d2} alt="Image" />
                        <div className="p-4">
                            <p className="text-sm text-gray-500">12 JAN, 2022</p>
                            <h2 className="text-lg font-bold mb-2">Process followed in DhobiLite.</h2>
                            <p className="text-gray-700 mb-4">We at DhobiLite have defined the laundry & Dry-Cleaning process to ensure proper delivery...</p>
                            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Read Article</button>
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img className="w-full h-40 object-cover" src={d1} alt="Image" />
                        <div className="p-4">
                            <p className="text-sm text-gray-500">12 NOV, 2023</p>
                            <h2 className="text-lg font-bold mb-2">DhobiLite Franchise: A unique Franchise</h2>
                            <p className="text-gray-700 mb-4">Love it or hate it, you have to wash it. Laundry and Drycleaning is an essential part of life...</p>
                            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Read Article</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
                <p className="text-blue-500 text-center">OUR CUSTOMERS SAY</p>
                <h2 className="text-center text-2xl font-bold mb-8">Customers are our brand ambassadors</h2>
                <div className="max-w-4xl mx-auto">
                    <Slider {...settings}>
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="px-4">
                                <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 text-center">
                                    <p className="text-gray-600 italic mb-6">{testimonial.text}</p>
                                    <div className="flex justify-center">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-blue-400"
                                        />
                                    </div>
                                    <h3 className="mt-4 font-semibold text-lg sm:text-xl">{testimonial.name}</h3>
                                    <p className="text-gray-500 text-sm sm:text-base">{testimonial.role}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>




            {/* FAQ Section */}
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-center text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <div key={index} className="border rounded-lg">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="flex justify-between items-center w-full px-4 py-3 text-left focus:outline-none"
                            >
                                <span className="text-lg font-medium">{faq.question}</span>
                                {open === index ? (
                                    <FiMinus className="text-2xl font-bold" />
                                ) : (
                                    <FiPlus className="text-2xl font-bold" />
                                )}
                            </button>
                            {open === index && (
                                <div className="px-4 pb-4">
                                    <p className="text-gray-700">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-blue-200 py-10">
                <h2 className="text-xl font-bold text-center mb-4 ">DhobiLite Serving 50 Cities</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {cities.map((city, index) => (
                        <p key={index} className=" text-gray-700 px-1 border-r-2 border-black ">
                            {city}
                        </p>
                    ))}
                </div>
            </div>

        </>
    );
};

export default LandingPage;
