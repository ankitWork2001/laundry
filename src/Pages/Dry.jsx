import c1 from '../Images/layout-planning-and-tracking-in-laundry.webp'
import c2 from '../Images/proper-sop-for-laundry.webp'
import c3 from '../Images/laundry-revenue-growth-with-dhobilite.webp'
import c4 from '../Images/laundry-setup-for-franchise-business.webp'
import c9 from '../Images/laundry-setup.webp'
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
const Dry = () => {

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
                <h1 className='text-4xl font-bold'>DryClean Services At Doorstep</h1>
            </div>


            <div className="px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col-reverse md:flex-row md:items-center md:space-x-12">
                    {/* Text Section */}
                    <div className="mt-8 md:mt-0 md:w-1/2">
                        <h2 className="text-2xl font-semibold mb-4">DryCleaning at its best</h2>
                        <p className="text-gray-600 leading-relaxed">
                        Doing laundry can consume a lot of your time. It is often hard for us to manage this essential chore with our heavy work-life and tight schedule. To save you from this trouble, DhobiLite brings to your doorstep every type of laundry and cleaning service you can think of.
                        </p>
                        <p className="text-gray-600 leading-relaxed">Along with laundry, DhobiLite is dry-cleaning service can save your time and trouble as it offers quality dry wash and classy ironing that makes your clothes look like-new.
Going through the laundry at home means a long process - washing, drying, ironing, and folding. Dry-cleaning makes it super-easy while restoring the texture, preventing shrink or damage, and reviving the brightness and life of your garments. There is no better way you can remove the stain and the odor from your clothes.
At DhobiLite, we use various effective technologies and machines to dry-clean your garments. Trust us with the task, and you wont be disappointed.</p>
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
                        <h2 className="text-2xl font-semibold mb-4">Ornamental Dress Dry-Clean</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                        Ornamental and ethnic dresses look gorgeous, but with the delicate intricacies of design on the fabric, these beautiful garments are not suitable for hand or machine wash; only Dry-cleaning can be a safe option to go with for these expensive clothes.
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
                        <h2 className="text-2xl font-semibold mb-4">Saree Dry-Clean</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                        Indian women have a special love for their sarees, but cleaning this extended piece of elegant cloth might not be that easy. To maintain the quality and color of your lovely sarees, what better option can be there than Dry-Cleaning!
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
                        <h2 className="text-2xl font-semibold mb-4">Suit Dry-Clean</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                        Suit is a formal dress that adds style and class to your personality, and indeed these costly items deserve the quality care of Dry-Cleaning.
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
                        <h2 className="text-2xl font-semibold mb-4">Blanket and Bedding Dry-Clean</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                        Bedding items get frequently stained and scruffy; cleaning the large pieces of bedding clothes and the heavy blankets can take a toll on you. Leave us with the task, and we assure you to make your beddings look fresh and spotless.
                        </p>
                        <button className="bg-yellow-500 text-white px-6 py-3 rounded-full hover:bg-yellow-600 transition duration-300">
                            Request Call Back
                        </button>
                    </div>

                    <div className="lg:w-1/2 text-center">
                        <img src={c3} alt="Revenue Potential" className="w-full md:w-auto mx-auto" />
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
                        <h2 className="text-2xl font-semibold mb-4">Dry Cleaning at Its Best</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                        Keeping your clothes clean and fresh is always a must because clothes make a man. After all, smart-looking clothes will be sure to leave a good impression of your personality and dressing sense. However, doing the laundry and cleaning your clothes is often a tedious and time-consuming task that eats into your productive work hours. And of course, it is not the most enjoyable job on the planet (That goes without saying).
Would not it be great if someone take care of the daily chore of doing your laundry and keeping your clothes clean and neat ready to be worn easily whenever you feel like it? Of course, it would be great! DhobiLite laundry and cleaning service is now here to take care of all your laundry and cleaning needs.
                        </p>
                       
                    </div>
                </div>
            </div>

            <div className="px-4 sm:px-6 lg:px-8 py-12">
                {/* <div className="lg:flex lg:items-center lg:space-x-8"> */}
                <div className="flex flex-col-reverse md:flex-row md:items-center md:space-x-12">

                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <h2 className="text-2xl font-semibold mb-4">Doing Your Laundry at Home Vs. Obtaining the Services of A Dry Cleaning Service</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                        Traditionally, people used to do their laundry at home, and that too, by hand as sophisticated cleaning equipment like washing machines and dryers was not heard of at that time. Be it doing the laundry by hand or using washing equipment like a washing machine, doing your laundry at home is easier said than done. It is not just about washing your clothes and keeping them clean. There is a long process that entails. Doing your laundry at home would include washing, drying, ironing, and folding your clothes- sounds like a long and tiring process, right?
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-6">On the other hand, instead of doing your laundry at home, you have the option of obtaining the service of a dry-cleaning service that would do your laundry and even go the additional step of dry cleaning your clothes. Of course, getting a dry-cleaning service to do your laundry is much easier, convenient, and requires minimal time and effort from your end. But the positives do not just end there. During dry-cleaning, a stringent cleaning process is followed, which eliminates even the stubbornest of stains and odor from your clothes and keeps it as fresh as a daisy. Dry-cleaning is also a great way to keep your clothes clean and tidy while retaining the original texture of the fabric, preventing shrinkage or damage to your clothes, and reviving the brightens and appearance of your outfits.</p>
                        <p className="text-gray-600 leading-relaxed mb-6">So what do you think is best- Doing your laundry at home or getting a dry-cleaning service to do it on your behalf? Of course, obtaining the services of a dry-cleaning service is undoubtedly the best and easiest way to go about things.</p>
                        <button className="bg-yellow-500 text-white px-6 py-3 rounded-full hover:bg-yellow-600 transition duration-300">
                            Request Call Back
                        </button>
                    </div>

                    <div className="lg:w-1/2 text-center">
                        <img src={c3} alt="Revenue Potential" className="w-full md:w-auto mx-auto" />
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

export default Dry;