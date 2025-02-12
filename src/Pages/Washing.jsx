import c1 from '../Images/layout-planning-and-tracking-in-laundry.webp'
import c2 from '../Images/proper-sop-for-laundry.webp'
import c3 from '../Images/laundry-revenue-growth-with-dhobilite.webp'
import c4 from '../Images/laundry-setup-for-franchise-business.webp'
import c5 from '../Images/drycleaning-at-its-best.webp'
import c6 from '../Images/lets-sit-and-plan-a-laundry.webp'
import c9 from '../Images/laundry-setup.webp'
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
const Washing = () => {

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
                <h1 className='text-4xl font-bold'>Organic Dryclean</h1>
            </div>


            <div className="px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col-reverse md:flex-row md:items-center md:space-x-12">
                    {/* Text Section */}
                    <div className="mt-8 md:mt-0 md:w-1/2">
                        <h2 className="text-2xl font-semibold mb-4">DhobiLite™ offers unique Organic Dry-Cleaning.</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Dry-Cleaning is a very popular cleaning service as it offers the best treatment for your clothes, taking care of the color, texture, and quality of them. Along with Standard Dry-Cleaning, DhobiLite also offers Premium Organic Dry-Cleaning services.
                            Dry-cleaners have a lot of options and methods for running the dry-cleaning process. But with the current environmental issues rising, DhobiLite adopted eco-friendly organic solvents and processing methods in the form of Premium Organic Dry-Cleaning Service.
                            We have chosen the most effective way to dry-clean your clothes with non-toxic and biodegradable products. Because we care about the environment and our customers. Choose our Premium Organic Dry-Cleaning to experience services such as Repairing and Custom Packaging for all your clothing items.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <img src={c4} alt="img" className="w-full md:w-auto mx-auto" />
                    </div>
                </div>
                <div className="flex items-center justify-center h-full py-12">
                    <button className="bg-yellow-500 text-white px-6 py-3 rounded-full hover:bg-yellow-600 transition duration-300">
                        Request Call Back
                    </button>
                </div>
            </div>


            <div className="px-4 sm:px-6 lg:px-8 py-12">
                <div className="lg:flex lg:items-center lg:space-x-8">
                    {/* <div className="flex flex-col-reverse md:flex-row md:items-center md:space-x-12"> */}
                    <div className="mb-8 lg:mb-0 lg:w-1/2 text-center">
                        {/* <img src={c1} alt="Location Analysis" className="mx-auto w-full max-w-md" /> */}
                        <img src={c1} alt="Location Analysis" className="w-full md:w-auto mx-auto" />
                    </div>

                    <div className="lg:w-1/2">
                        <h2 className="text-2xl font-semibold mb-4">Organic Solvent</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            For Premium Organic Dry-Cleaning, we use organic or green solvents which are far more eco-friendly than the conventional ones. We use non-toxic hydrocarbon solvent to dry-clean your clothes with utmost care.
                        </p>
                        <button className="bg-yellow-500 text-white px-6 py-3 rounded-full hover:bg-yellow-600 transition duration-300">
                            Request Call Back
                        </button>
                    </div>
                </div>
            </div>



            <div className="px-4 sm:px-6 lg:px-8 py-12">
                {/* <div className="lg:flex lg:items-center lg:space-x-8"> */}
                <div className="flex flex-col-reverse md:flex-row md:items-center md:space-x-12">
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <h2 className="text-2xl font-semibold mb-4">Custom Packaging</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Packaging is a big part of Dry-Cleaning; it includes tying down clothes carefully, bagging them up, and wrapping. We at DhobiLite ensure a careful and safe packaging method to carry your dear possessions and deliver them at your doorstep.
                        </p>
                        <button className="bg-yellow-500 text-white px-6 py-3 rounded-full hover:bg-yellow-600 transition duration-300">
                            Request Call Back
                        </button>
                    </div>

                    <div className="lg:w-1/2 text-center">
                        {/* <img src={c9} alt="Design and Layout" className="mx-auto w-full max-w-md " /> */}
                        <img src={c9} alt="Design and Layout" className="w-full md:w-auto mx-auto" />
                    </div>
                </div>
            </div>



            <div className="px-4 sm:px-6 lg:px-8 py-12">
                <div className="lg:flex lg:items-center lg:space-x-8">
                    <div className="lg:w-1/2 mb-8 lg:mb-0 text-center">
                        {/* <img src={c2} alt="Utility Requirements" className="mx-auto w-full max-w-md " /> */}
                        <img src={c2} alt="Utility Requirements" className="w-full md:w-auto mx-auto" />
                    </div>

                    <div className="lg:w-1/2">
                        <h2 className="text-2xl font-semibold mb-4">Fabrics for Organic Dry-Cleaning</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Premium Organic Dry-Cleaning goes really well with cotton, linen, silk, wool, velvet, and such. It literally covers every fabric and cloth you use, be it daily wares, ethnic dresses, winter garments, and even your household items like bedding and curtains.
                        </p>
                        <button className="bg-yellow-500 text-white px-6 py-3 rounded-full hover:bg-yellow-600 transition duration-300">
                            Request Call Back
                        </button>
                    </div>
                </div>
            </div>


            <div className="px-4 sm:px-6 lg:px-8 py-12">
                {/* <div className="lg:flex lg:items-center lg:space-x-8"> */}
                <div className="flex flex-col-reverse md:flex-row md:items-center md:space-x-12">

                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <h2 className="text-2xl font-semibold mb-4">Repairing (Small ones)</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            At DhobiLite, Premium Organic Dry-Cleaning can also include repairing small cuts and tears on your clothes, and our professional experts do it all with smooth finishing and make it appear as if the cut was never there. This is an add-on service you can include in your Premium Organic Dry-Cleaning Package.
                        </p>
                        <button className="bg-yellow-500 text-white px-6 py-3 rounded-full hover:bg-yellow-600 transition duration-300">
                            Request Call Back
                        </button>
                    </div>

                    <div className="lg:w-1/2 text-center">
                        {/* <img src={c3} alt="Revenue Potential" className="mx-auto w-full max-w-md" /> */}
                        <img src={c3} alt="Revenue Potential" className="w-full md:w-auto mx-auto" />
                    </div>
                </div>
            </div>

            <div className="px-4 sm:px-6 lg:px-8 py-12">
                <div className="lg:flex lg:items-center lg:space-x-8">
                    <div className="lg:w-1/2 text-center">
                        <img src={c3} alt="Revenue Potential" className="w-full md:w-auto mx-auto" />
                        {/* <img src={c3} alt="Revenue Potential" className="mx-auto w-full max-w-md" /> */}
                    </div>
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <h2 className="text-2xl font-semibold mb-4">Stay Clean, Go Green</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Clean and immaculate clothes will be sure to turn heads wherever in the world you may go because a neat look never goes out of style. However, we need to remember that it is not fair to let mother earth suffer in our quest to look intelligent and dashing always. While dry cleaning and laundry services do a great job of keeping our clothes clean and smart, the cleaning process may emit many carbon emissions and chemicals damaging to nature.</p><br />
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Now, the question may arise that how we can avoid or remedy the damage caused o nature due to these cleaning activities? The answer is simple. You can switch to a more sustainable, organic, and eco-friendly means of doing your laundry and dry-cleaning! But where do you find such organic dry-cleaning services? The answer is simple, DhobiLite is premium organic dry-cleaning service is all you need and more.
                        </p>
                        <button className="bg-yellow-500 text-white px-6 py-3 rounded-full hover:bg-yellow-600 transition duration-300">
                            Request Call Back
                        </button>
                    </div>


                </div>
            </div>


            {/* <div>
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
            </div> */}

            <div className="px-4 sm:px-6 lg:px-8 py-12">
                <div className="lg:flex lg:items-start lg:space-x-8">
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <h2 className="text-xl font-bold mb-4 text-center lg:text-left">
                            What Makes an Organic Dry-Cleaning Service Different From the Rest?
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Quite similar to the traditional dry-cleaning method, the purpose of organic dry-cleaning is to ensure that the clothes are kept clean and neat. The difference lies in the dry-cleaning process. Are you curious to learn what makes an organic dry-cleaning service different from the rest of regular dry-cleaning services? Well then, here you go.
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>Uses cleaning agents and detergents that do not harm the environment.</li>
                            <li>Use of cleaning liquids and agents that are derived from natural sources or those having less of a negative impact on the environment.</li>
                            <li>Use of cleaning material and processes that are not tested on animals</li>
                            <li>Use of raw material sourced from sustainable sources with a deep concern for the environment</li>
                            <li>Eco-friendly packaging options for your laundry</li>
                        </ul>
                    </div>
                    <div className="lg:w-1/2 text-center">
                        <img src={c5} alt="Consultancy Service" className="w-full md:w-auto mx-auto" />
                        {/* <img src={c5} alt="Consultancy Service" className="mx-auto w-full max-w-md " /> */}
                    </div>
                </div>
            </div>

            <div className="px-4 sm:px-6 lg:px-8 py-12">
                {/* <div className="lg:flex lg:items-start lg:space-x-8"> */}
                <div className="flex flex-col-reverse md:flex-row md:items-center md:space-x-12">

                    <div className="lg:w-1/2 text-center">
                        {/* <img src={c6} alt="Consultancy Service" className="mx-auto w-full max-w-md" /> */}
                        <img src={c6} alt="Consultancy Service" className="w-full md:w-auto mx-auto" />
                    </div>
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <h2 className="text-xl font-bold mb-4 text-center lg:text-left">
                            Why Choose DhobiLite Organic Dry-cleaning service?
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            If you are looking for an organic dry-cleaning service, then DhobiLite Dry-cleaning service is the best place to go. Here is why DhobiLite is the best:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>It has a dedicated premium package that focuses on organic and eco-friendly dry-cleaning services</li>
                            <li>A welcoming and friendly team of staff dedicated to providing a high-quality service</li>
                            <li>Offers flexible and customizable dry-cleaning service options</li>
                            <li>Timely and efficient service</li>
                            <li>Top-notch service at a fair price</li>
                            <li>Avoidance of harmful chemicals and solvents that are unsafe on the skin</li>
                            <li>Follows sustainable and eco-friendly processes</li>
                            <li>Prioritizes quality of service and customer satisfaction above all</li>
                        </ul>
                    </div>
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
        </>
    )
}

export default Washing;