import c1 from '../Images/layout-planning-and-tracking-in-laundry.webp'
import c2 from '../Images/proper-sop-for-laundry.webp'
import c3 from '../Images/laundry-revenue-growth-with-dhobilite.webp'
import c4 from '../Images/laundry-setup-for-franchise-business.webp'
import c9 from '../Images/laundry-setup.webp'
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
const Jacket = () => {

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
                <h1 className='text-4xl font-bold'>Jackets Cleaning and repairing Service Near Me</h1>
            </div>


            <div className="px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col-reverse md:flex-row md:items-center md:space-x-12">
                    {/* Text Section */}
                    <div className="mt-8 md:mt-0 md:w-1/2">
                        <h2 className="text-2xl font-semibold mb-4">We know how to handle Leather Jackets.</h2>
                        <p className="text-gray-600 leading-relaxed">
                        Leather jackets put a shot of cool in your wardrobe. They are expensive, though, and they can be expensive to clean since you can not throw them in the washing machine with your jeans. Hand it over to DhobiLite and we will take utmost care while cleaning.
                        DhobiLite specialises in the treatment of leather jackets. We begin the dry-cleaning process of leather jackets by carefully reading the care instructions on your leather jackets. The method adopted by DhobiLite for cleaning leather jackets is entirely safe and does not cause fading, permanent discolouration, chemical stains or oil losses. We use the best tools and products to remove stains, restore and protect your leather jackets without damaging them. DhobiLite has skilled and experienced staff who can work with various types of leather and can safely clean your jackets. We also take care that your jackets remain lustrous and moisturised.
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
                        <h2 className="text-2xl font-semibold mb-4">A Short Guide on Leather Jacket Cleaning</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                        Leather jackets are classy and stylish. They never go out of fashion, allowing you to continue using them for years to come. However, maintaining leather can be a bit daunting, but if done carefully, they look as good as new every time you wear them.
                        </p>
                        
                    </div>
                </div>
            </div>


            <div className="px-4 sm:px-6 lg:px-8 py-12 border border-gray-400 rounded-md">
            <h2 className="text-2xl font-semibold mb-4">Know Your Leather</h2>
                <p className="text-gray-600 leading-relaxed mb-6">It is significant that you understand the type of leather used to fashion your jacket. Leather is usually divided into five grades of leather:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Full-grain leather</li>
                    <li>Top-grain leather</li>
                    <li>Split-grain leather</li>
                    <li>Genuine leather</li>
                    <li>Bonded leather</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mb-6">The leather then has different finishing, including embossed, Nappa, nubuck, suede, die-cut, embroidered, patent, printed, split, aniline, brush-coloured, degrained, metallic, pigmented, waxy, semi-aniline, etc.</p>
                <p className="text-gray-600 leading-relaxed mb-6">The characteristics and quality of the material differ based on where the finishing of the hide is done. Other factors that may influence the quality of leather include the breed of animal, the food they have been fed, the climate they were raised in, the exercise they underwent, etc. Hides are natural, and the life of the animals is what impacts their quality.</p>
                <p className="text-gray-600 leading-relaxed mb-6">Always remember to check the labels to determine the type of leather and the material of the lining from which it is made. Leather jackets are not meant to be washed using a washing machine or immersed in water. However, to prevent the build-up of grease or dirt, wiping it with a damp cloth and conditioning it helps in the build-up of mould. The jacket should be dried; naturally, it should not stay damp for long. Jackets with cotton or polyester lining can be maintained using the same method but if the lining is rayon or silk, then avoid doing anything at home. The job is meant for a specialist!</p>
            </div>

            <div className="px-4 sm:px-6 lg:px-8 py-12">
                {/* <div className="lg:flex lg:items-center lg:space-x-8"> */}
                <div className="flex flex-col-reverse md:flex-row md:items-center md:space-x-12">
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <h2 className="text-2xl font-semibold mb-4">Know the Leather of Your Jacket</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                        The tag of the jacket always carries the details of the material from which it is made along with the care instructions. If at all you are trying to clean the jacket at home, then don not deviate from the instructions; else, the jacket will be spoiled.
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
                        <h2 className="text-2xl font-semibold mb-4">Protect it from the Elements</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                        Use a moisture protectant if you are going to wear the jacket out in snow or rain. You must spray it from seam to seam, so every part is protected. You must re-apply it as mentioned in the instructions.
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
                        <h2 className="text-2xl font-semibold mb-4">Know the Basics</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                        If at all you spill something on your jacket, then you should refrain from rubbing it anxiously. Use a clean piece of cloth to dab and absorb it, and then allow it to dry naturally. You must never put it in a dryer.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-6">Leather jackets should never be folded; instead, you must hang them using a sturdy hanger. Always take off the plastic when it comes back from the dry cleaners; else, it may dry it out and give a flaky look to your leather jacket. Remember to empty the pockets when not using the jacket to prevent the leather from stretching.</p>
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
                        <h2 className="text-2xl font-semibold mb-4">Use the Services of Trusted Dry Cleaners to Clean Leather Jackets</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                        The best way to maintain your leather jacket is to get it dry-cleaned from professional dry cleaners. Selecting experienced, established and reliable dry-cleaners like DhobiLite ensures that your leather jacket stays new as always.</p>
                        <p className="text-gray-600 leading-relaxed mb-6">
                        Leather jackets normally undergo a lot of treatment to achieve the required colour and feel of the leather jacket that you own. We use premium-quality cleaning agents combined with advanced machinery to clean your leather jacket. The leather jackets are processed in a way that they retain their actual colour, finish and feel. Our technology cleans and restores your precious leather jacket.
                        </p>
                        
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

export default Jacket;