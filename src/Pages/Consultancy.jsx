import c1 from '../Images/layout-planning-and-tracking-in-laundry.webp'
import c2 from '../Images/proper-sop-for-laundry.webp'
import c3 from '../Images/laundry-revenue-growth-with-dhobilite.webp'
import c4 from '../Images/laundry-setup-for-franchise-business.webp'
import c5 from '../Images/drycleaning-at-its-best.webp'
import c6 from '../Images/lets-sit-and-plan-a-laundry.webp'
import c7 from '../Images/dhobilite-consulting-services.webp'
import c8 from '../Images/great-customer-experience-with-dhobilite-services.webp'
import c9 from '../Images/laundry-setup.webp'
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
const Consultancy = () => {

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
    ];

    return (
        <>

            <div className='bg-blue-500 text-white p-4'>
                <h1 className='text-4xl font-bold'>DhobiLite Dry Cleaning and<br /> Laundry Consultancy<br /> Services</h1>
            </div>

            <div className="px-4 sm:px-6 lg:px-8 py-12">
                <div className="lg:flex lg:items-center lg:space-x-12">
                    <div className="mb-8 lg:mb-0 lg:w-1/2">
                        <h2 className="text-2xl font-semibold mb-4">We are the experts</h2>
                        <p className="text-gray-600 leading-relaxed">
                            At DhobiLite, we provide end-to-end consulting and planning services for new laundry business planning or on-premise laundry setup planning or expansion or renovation of the existing laundromat. Our laundromat consultant services cover all aspects, including analysis, facility planning, process management, process improvement. So, whether you are looking to set up a laundry on-premises of your hotel or any other establishment or interested in setting up a commercial laundry business, our team of experienced laundry consultants leverages their expertise and in-depth knowledge to provide you with market-oriented solutions for setting up and streamlining the operations.
                        </p>
                        <h2 className="text-2xl font-semibold mb-4">Consulting Services for Commercial Laundry and Dry-cleaning</h2>
                        <p className="text-gray-600 leading-relaxed">
                            At DhobiLite, we are helping aspiring businessmen to help set up successful laundry and drycleaning businesses in India. Therefore, we provide them with consultancy services on all aspects such as location, layout and design, utility requirements, and revenue potential.
                        </p>
                    </div>
                    <div className="lg:w-1/2 mt-8 lg:mt-0">
                        <img src={c4} alt="img" className="mx-auto w-full max-w-md" />
                    </div>
                </div>
            </div>


            <div className="px-4 sm:px-6 lg:px-8 py-12">
                <div className="lg:flex lg:items-center lg:space-x-8">
                    <div className="mb-8 lg:mb-0 lg:w-1/2 text-center">
                        <img src={c1} alt="Location Analysis" className="mx-auto w-full max-w-md" />
                    </div>

                    <div className="lg:w-1/2">
                        <h2 className="text-2xl font-semibold mb-4">Location Analysis</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            The location of a laundromat / factory / collection point is of utmost importance. Factors such as neighbourhood demographics, traffic, competition, availability of adequate space and parking, business trade area, etc., have a significant impact on the success of a laundry and drycleaning business. As the best laundry consultants in India, we leverage our experience to guide and advise you on selecting the right location for your business after an in-depth analysis of the area.
                        </p>
                        <button className="bg-yellow-500 text-white px-6 py-3 rounded-full hover:bg-yellow-600 transition duration-300">
                            Request Call Back
                        </button>
                    </div>
                </div>
            </div>



            <div className="px-4 sm:px-6 lg:px-8 py-12">
                <div className="lg:flex lg:items-center lg:space-x-8">
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <h2 className="text-2xl font-semibold mb-4">Design and Layout</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Optimum utilisation of space is dependent on the design and layout of the laundromat. For designing a perfect setup, many factors need to be taken into consideration, such as functional area, the number of machines to be installed, expected customer flow, services that will be offered, and much more. Therefore, as a leading laundry consultant, we provide you with the best layout and design to ensure you get the best results.
                        </p>
                        <button className="bg-yellow-500 text-white px-6 py-3 rounded-full hover:bg-yellow-600 transition duration-300">
                            Request Call Back
                        </button>
                    </div>

                    <div className="lg:w-1/2 text-center">
                        <img src={c9} alt="Design and Layout" className="mx-auto w-full max-w-md " />
                    </div>
                </div>
            </div>



            <div className="px-4 sm:px-6 lg:px-8 py-12">
                <div className="lg:flex lg:items-center lg:space-x-8">
                    <div className="lg:w-1/2 mb-8 lg:mb-0 text-center">
                        <img src={c2} alt="Utility Requirements" className="mx-auto w-full max-w-md " />
                    </div>

                    <div className="lg:w-1/2">
                        <h2 className="text-2xl font-semibold mb-4">Utility Requirements</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            The majority part of any working laundry is the utility. Lack of the right equipment may result in an increase in costs on water, sewer, electricity, electrical services, and gas. As a leading laundry consultant, we advise you on the right equipment to ensure minimum costs and maximum profits.
                        </p>
                        <button className="bg-yellow-500 text-white px-6 py-3 rounded-full hover:bg-yellow-600 transition duration-300">
                            Request Call Back
                        </button>
                    </div>
                </div>
            </div>


            <div className="px-4 sm:px-6 lg:px-8 py-12">
                <div className="lg:flex lg:items-center lg:space-x-8">
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <h2 className="text-2xl font-semibold mb-4">Revenue Potential</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            The sole purpose of running any business is to earn profits, and laundromats are no exception. We at DhobiLite provide you with consulting services on cash flow, debt-service, revenue maximisation, higher return on investment. In addition, we offer you guidance on making your business more profitable.
                        </p>
                        <button className="bg-yellow-500 text-white px-6 py-3 rounded-full hover:bg-yellow-600 transition duration-300">
                            Request Call Back
                        </button>
                    </div>

                    <div className="lg:w-1/2 text-center">
                        <img src={c3} alt="Revenue Potential" className="mx-auto w-full max-w-md" />
                    </div>
                </div>
            </div>


            <div>
                <h1 className="text-4xl font-bold mb-4 text-center">Laundry Consultant Services for On-Premise Laundry Set Up</h1>
                <p>Whether you are a hotel, a hospital, or any other business interested in setting up a laundromat on-premise, we can help you with our on-premise laundry consultancy services. We provide you with consultancy on the following factors:</p>
                <div className="container mx-auto p-4">
                    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <div className="bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="p-4">
                                <h2 className="text-lg font-bold mb-2">Production
                                    Assessment</h2>
                                <p className="text-gray-700 mb-4">The first thing to consider when setting up an on-premise laundry is the type of fabrics that will be processed in-house. We take into consideration factors such as textile composition, linen par, soiled linen sorting, budgeted shifts, labour hours, availability of labour, and clean linen distribution. As a leading laundry consultant in India, we consider each unique factor and provide you with a detailed report on the production assessment to enable you to make informed decisions.</p>
                            </div>
                        </div>
                        <div className="bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="p-4">
                                <h2 className="text-lg font-bold mb-2">Design and
                                    Layout</h2>
                                <p className="text-gray-700 mb-4">While designing an in-house laundromat, the foremost priority for any business is to adhere to local and municipal construction laws and still ensure a perfect layout to increase workflow efficiency, energy management, and utility optimisation. As the best laundry and dry cleaning consultant, we provide you with the fastest way to start an on-premise laundry yet ensure your laundry is entirely compliant.</p>

                            </div>
                        </div>
                        <div className="bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="p-4">
                                <h2 className="text-lg font-bold mb-2">Workforce
                                    Requirements</h2>
                                <p className="text-gray-700 mb-4">Labour costs form a significant part of a laundry is operating costs. As a trusted laundry and dry cleaning consultant, we suggest ways to minimise labour costs and maximise labour productivity and efficiency and help you in automating various processes.</p>
                            </div>
                        </div>
                        <div className="bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="p-4">
                                <h2 className="text-lg font-bold mb-2">Estimation of
                                    Production Cost</h2>
                                <p className="text-gray-700 mb-4">Through in-depth research and analysis, we help you determine whether doing laundry in-house will be a cost-efficient option for you or not and how it will affect your bottom line.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center h-full py-12">
                    <button className="bg-yellow-500 text-white px-6 py-3 rounded-full hover:bg-yellow-600 transition duration-300">
                        Request Call Back
                    </button>
                </div>
            </div>

            <div className="px-4 sm:px-6 lg:px-8 py-12">
                <div className="lg:flex lg:items-start lg:space-x-8">
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <h2 className="text-xl font-bold mb-4 text-center lg:text-left">
                            Consultancy Service for Analysis, Review, and Evaluation of Your Laundry
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            As a trusted laundry consultant, we review your current laundry operations in-depth and provide you with detailed reports and recommendations on reducing operational costs, maximizing operational efficiency, increasing volume, and increasing profitability. We provide you with an accurate facility evaluation also. Our services include:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>Production operations review</li>
                            <li>Design and layout review</li>
                            <li>Production facility and equipment evaluation</li>
                            <li>Facility and equipment appraisal</li>
                            <li>Efficient time study</li>
                        </ul>
                    </div>
                    <div className="lg:w-1/2 text-center">
                        <img src={c5} alt="Consultancy Service" className="mx-auto w-full max-w-md " />
                    </div>
                </div>
            </div>

            <div className="px-4 sm:px-6 lg:px-8 py-12">
                <div className="lg:flex lg:items-start lg:space-x-8">
                    <div className="lg:w-1/2 text-center">
                        <img src={c6} alt="Consultancy Service" className="mx-auto w-full max-w-md" />
                    </div>
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <h2 className="text-xl font-bold mb-4 text-center lg:text-left">
                            Consultancy Services for Laundry Layout and Design
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            We provide comprehensive consultancy services, from concept to design to laundry management, to enable you to design an efficient laundromat. We assist you with:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>Production operations review</li>
                            <li>Design and layout review</li>
                            <li>Production facility and equipment evaluation</li>
                            <li>Facility and equipment appraisal</li>
                            <li>Efficient time study</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="px-4 sm:px-6 lg:px-8 py-12">
                <div className="lg:flex lg:items-start lg:space-x-8">
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <h2 className="text-xl font-bold mb-4 text-center lg:text-left">
                            Consultancy Services on Laundry and Dry-cleaning Operations
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            We provide you detailed consultancy service in the following areas of laundry and drycleaning operation:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>Production operations review</li>
                            <li>Design and layout review</li>
                            <li>Production facility and equipment evaluation</li>
                            <li>Facility and equipment appraisal</li>
                            <li>Efficient time study</li>
                        </ul>
                    </div>
                    <div className="lg:w-1/2 text-center">
                        <img src={c7} alt="Consultancy Service" className="mx-auto w-full max-w-md" />
                    </div>
                </div>
            </div>

            <div className="px-4 sm:px-6 lg:px-8 py-12">
                <div className="lg:flex lg:items-start lg:space-x-8">
                    <div className="lg:w-1/2 text-center">
                        <img src={c8} alt="Consultancy Service" className="mx-auto w-full max-w-md" />
                    </div>
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <h2 className="text-xl font-bold mb-4 text-center lg:text-left">
                            Consultancy Services for Utility Infrastructure
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            We provide you with detailed information on the utility infrastructure needed for the laundry and dry-cleaning business. Our consultancy services include:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>Production operations review</li>
                            <li>Design and layout review</li>
                            <li>Production facility and equipment evaluation</li>
                            <li>Facility and equipment appraisal</li>
                            <li>Efficient time study</li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="px-4 sm:px-6 lg:px-8 py-12">
                <div className="lg:flex lg:items-start lg:space-x-8">
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <h2 className="text-xl font-bold mb-4 text-center lg:text-left">
                            Consultancy Service for Analysis, Review, and Evaluation of Your Laundry
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Financials are of utmost importance for any business. So, we provide an in-depth report on economic statements and financials in setting up a laundry and drycleaning business in India. It covers the following areas:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>Production operations review</li>
                            <li>Design and layout review</li>
                            <li>Production facility and equipment evaluation</li>
                            <li>Facility and equipment appraisal</li>
                            <li>Efficient time study</li>
                        </ul>
                    </div>

                    <div className="lg:w-1/2 text-center">
                        <img src={c5} alt="Consultancy Service" className="mx-auto w-full max-w-md" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 py-12 space-y-6 border border-gray-400">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                    What are you looking for?
                </h2>
                <p className="text-gray-600 leading-relaxed ">
                    We make it easy for people to enter the laundry and drycleaning industry by providing them with world-class consultancy services. So, if you are planning to set up or expand your business, we can provide you with planning and consultancy services. Our team of experienced laundry consultants would be happy to resolve all your queries and offer you customised consultancy solutions as per your specific needs.
                </p>
                <button className="bg-yellow-500 text-white px-6 py-3 rounded-full hover:bg-yellow-600 transition duration-300">
                    Request Call Back
                </button>
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
        </>
    )
}

export default Consultancy