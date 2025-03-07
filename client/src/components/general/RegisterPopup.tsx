import { useState } from "react";
import DarkLogo from "../../assets/logo.png";
import Icon from "../../assets/logo-icon.png";

const List = (
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 17 17" fill="none">
            <path d="M8.43359 0.135071L10.5943 5.97434L16.4336 8.13507L10.5943 10.2958L8.43359 16.1351L6.27287 10.2958L0.433594 8.13507L6.27287 5.97434L8.43359 0.135071Z" fill="#8C8EC8" />
        </svg>
    </div>
);
const CloseIcon = (
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 27 27" fill="none">
            <path d="M19.7562 6.91891L6.7832 19.8919" stroke="black" stroke-width="2.16216" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6.7832 6.91891L19.7562 19.8919" stroke="black" stroke-width="2.16216" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    </div>
);
const LocationIcon = (
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
            <g clip-path="url(#clip0_4974_9401)">
                <path d="M9.51062 5.20352C9.51062 8.51094 5.76898 11.3459 5.76898 11.3459C5.76898 11.3459 2.02734 8.51094 2.02734 5.20352C2.02734 4.07571 2.42155 2.99409 3.12324 2.19661C3.82494 1.39913 4.77664 0.951111 5.76898 0.951111C6.76133 0.951111 7.71303 1.39913 8.41472 2.19661C9.11641 2.99409 9.51062 4.07571 9.51062 5.20352Z" stroke="#02054D" stroke-width="0.725246" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.7687 6.62092C6.45751 6.62092 7.01591 5.98629 7.01591 5.20345C7.01591 4.4206 6.45751 3.78598 5.7687 3.78598C5.07988 3.78598 4.52148 4.4206 4.52148 5.20345C4.52148 5.98629 5.07988 6.62092 5.7687 6.62092Z" stroke="#02054D" stroke-width="0.725246" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_4974_9401">
                    <rect width="9.9777" height="11.3397" fill="white" transform="translate(0.78125 0.47876)" />
                </clipPath>
            </defs>
        </svg>
    </div>
);

const RegisterPopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex justify-center items-center">
            {/* Button to Open Popup */}
            <button
                onClick={() => setIsOpen(true)}
                className="bg-primary text-white rounded-3xl py-1 px-6 font-semibold"
            >
                Register
            </button>

            {/* Popup Modal */}
            {isOpen && (
                <div className="fixed inset-0 bg-[#0000001a] bg-opacity-50 flex justify-center items-center" style={{ zIndex: 2 }}>
                    <div className="bg-[#ffffffb1] backdrop-blur-md p-6 rounded-3xl shadow-lg w-200">
                        {/* Close Button */}
                        {/* <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-xl"
                        >
                            &times;
                        </button> */}

                        {/* Popup Content */}
                        <div className="grid grid-cols-12 gap-3">
                            <div className="col-span-12 md:col-span-5 space-y-3">
                                <div className="rounded-2xl rform-bg p-3">
                                    <img src={DarkLogo} alt="" className="mx-auto my-3" />
                                    <div className="flex flex-wrap space-x-1 space-y-2">
                                        <button className="text-white p-2 border-1 border-white rounded-full py-1 px-2 text-[12px] bg-[#ffffff2e] backdrop-blur-sm">
                                            Brochure Details
                                        </button>
                                        <button className="text-white p-2 border-1 border-white rounded-full py-1 px-2 text-[12px] bg-[#ffffff2e] backdrop-blur-sm">
                                            24/7 Counselling
                                        </button>
                                        <button className="text-white p-2 border-1 border-white rounded-full py-1 px-2 text-[12px] bg-[#ffffff2e] backdrop-blur-sm">
                                            Application Deadlines
                                        </button>
                                        <button className="text-white p-2 border-1 border-white rounded-full py-1 px-2 text-[12px] bg-[#ffffff2e] backdrop-blur-sm">
                                            Shortlist & Apply
                                        </button>
                                        <button className="text-white p-2 border-1 border-white rounded-full py-1 px-2 text-[12px] bg-[#ffffff2e] backdrop-blur-sm">
                                            Check Detailed Fees
                                        </button>
                                        <button className="text-white p-2 border-1 border-white rounded-full py-1 px-2 text-[12px] bg-[#ffffff2e] backdrop-blur-sm">
                                            Scholarships
                                        </button>
                                    </div>
                                </div>
                                <h2 className="text-lg text-black">
                                    How Health Edu helps you in Admission:
                                </h2>
                                <ul>
                                    <li className="flex space-x-2 font-medium text-black text-[13px] my-2">
                                        <div className="me-1">
                                            {List}
                                        </div>
                                        Secure college admission online with Health Edu, right from home.
                                    </li>
                                    <li className="flex space-x-2 font-medium text-black text-[13px] my-2">
                                        <div className="me-1">
                                            {List}
                                        </div>
                                        Enjoy up to 50% off on application forms.
                                    </li>
                                    <li className="flex space-x-2 font-medium text-black text-[13px] my-2">
                                        <div className="me-1">
                                            {List}
                                        </div>
                                        Upload your admission documents and earn Paytm rewards.
                                    </li>
                                    <li className="flex space-x-2 font-medium text-black text-[13px] my-2">
                                        <div className="me-1">
                                            {List}
                                        </div>
                                        Rest assured, no unwanted calls from third parties.
                                    </li>
                                </ul>
                            </div>
                            <div className="col-span-12 md:col-span-7 border-1 border-[#BCBDD3] rounded-2xl p-3 space-y-4">
                                <div className="flex justify-between">
                                    <h2 className="text-lg text-black">
                                        Register now to Apply
                                    </h2>
                                    {/* Close Button Inside */}
                                    <button onClick={() => setIsOpen(false)} className="p-2 rounded-full bg-white">
                                        {CloseIcon}
                                    </button>
                                </div>

                                <div className="flex space-x-2  ">
                                    <div className="p-2 rounded-full bg-white h-min">
                                        <img src={Icon} alt="" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-md text-black">
                                            Abirami College Of Pharmacy
                                        </h3>
                                        <div className="flex flex-wrap space-x-2 space-y-2">
                                            <div>
                                                <div className="flex p-[3px] rounded-md my-auto bg-white text-[10px]">
                                                    {LocationIcon}
                                                    <p className="ms-1 text-black">
                                                        Chennai, Tamilnadu
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex p-[3px] rounded-md my-auto bg-white text-[10px]">
                                                    {LocationIcon}
                                                    <p className="ms-1 text-black">
                                                        Deemed University
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex p-[3px] rounded-md my-auto bg-white text-[10px]">
                                                    {LocationIcon}
                                                    <p className="ms-1 text-black">
                                                        Estd 1985
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex p-[3px] rounded-md my-auto bg-white text-[10px]">
                                                    {LocationIcon}
                                                    <p className="ms-1 text-black">
                                                        NAAC Grade
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <form action="" className="grid grid-cols-12 gap-3 my-3">
                                    <div className="col-span-12 md:col-span-6">
                                        <label className="text-black text-[12px]">Name</label>
                                        <input type="text" className="text-gray w-full p-2 border-white border-1 rounded-[10px] bg-[#ffffff2e] backdrop-blur-sm" />
                                    </div>
                                    <div className="col-span-12 md:col-span-6">
                                        <label className="text-black text-[12px]">Email Address</label>
                                        <input type="text" className="text-gray w-full p-2 border-white border-1 rounded-[10px] bg-[#ffffff2e] backdrop-blur-sm" />
                                    </div>
                                    <div className="col-span-12 md:col-span-6">
                                        <label className="text-black text-[12px]">Phone Number</label>
                                        <input type="text" className="text-gray w-full p-2 border-white border-1 rounded-[10px] bg-[#ffffff2e] backdrop-blur-sm" />
                                    </div>
                                    <div className="col-span-12 md:col-span-6">
                                        <label className="text-black text-[12px]">Select District</label>
                                        <input type="text" className="text-gray w-full p-2 border-white border-1 rounded-[10px] bg-[#ffffff2e] backdrop-blur-sm" />
                                    </div>
                                    <div className="col-span-12 md:col-span-6">
                                        <label className="text-black text-[12px]">Course Interested</label>
                                        <input type="text" className="text-gray w-full p-2 border-white border-1 rounded-[10px] bg-[#ffffff2e] backdrop-blur-sm" />
                                    </div>
                                    <div className="col-span-12 md:col-span-6">
                                        <label className="text-black text-[12px]">Select Program Type</label>
                                        <input type="text" className="text-gray w-full p-2 border-white border-1 rounded-[10px] bg-[#ffffff2e] backdrop-blur-sm" />
                                    </div>
                                    <div className="col-span-12">
                                        <p className="text-[12px] text-black">
                                            By submitting this form, you accept and agree to our <a href="#" className="text-primary">Terms of Use</a>.
                                        </p>
                                    </div>
                                    <div className="col-span-12 space-y-2">
                                        <button type="submit" className='w-full text-white bg-primary py-2 rounded-full font-semibold'>APPLY NOW</button>
                                        <p className="text-[12px] text-black text-center">
                                            Already Registered <a href="#" className="text-primary">Login</a>.
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RegisterPopup;
