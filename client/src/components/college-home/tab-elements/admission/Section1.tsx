import InfraImage from "../../../../assets/college-home/tabs/admission/Admission-Image.png";

const Steps = (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M6.34333 6.37633L4.99583 5.01692M13.5291 6.37633L14.8766 5.01692M4.99492 14.9903L6.34242 13.6299M9.93575 4.56408V2.75M4.54575 10.0036H2.75M15.4687 15.433L18.9649 14.0525C19.0493 14.0187 19.1216 13.9605 19.1725 13.8852C19.2234 13.81 19.2507 13.7212 19.2507 13.6304C19.2507 13.5395 19.2234 13.4507 19.1725 13.3755C19.1216 13.3003 19.0493 13.242 18.9649 13.2083L10.5637 9.8945C10.4819 9.86285 10.3926 9.85573 10.3069 9.87401C10.2211 9.8923 10.1425 9.9352 10.0807 9.99745C10.019 10.0597 9.9767 10.1386 9.95908 10.2245C9.94147 10.3104 9.94929 10.3996 9.98158 10.4812L13.2651 18.9612C13.4136 19.3462 13.9526 19.3462 14.1011 18.9612L15.4687 15.433Z" stroke="#02054D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
);
const Docs = (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M12.5 2.0835V3.3335C12.5 4.51183 12.5 5.101 12.8667 5.46683C13.2317 5.8335 13.8208 5.8335 15 5.8335H16.25" stroke="#02054D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M6.66634 9.16675H13.333M6.66634 11.6667H13.333M6.66634 14.1667H10.1413M3.33301 13.3334V6.66675C3.33301 4.31008 3.33301 3.13091 4.06551 2.39925C4.79717 1.66675 5.97634 1.66675 8.33301 1.66675H11.8097C12.1497 1.66675 12.3205 1.66675 12.4738 1.73008C12.6263 1.79341 12.7472 1.91341 12.988 2.15508L16.178 5.34508C16.4197 5.58675 16.5397 5.70675 16.603 5.86008C16.6663 6.01258 16.6663 6.18341 16.6663 6.52341V13.3334C16.6663 15.6901 16.6663 16.8692 15.9338 17.6009C15.2022 18.3334 14.023 18.3334 11.6663 18.3334H8.33301C5.97634 18.3334 4.79717 18.3334 4.06551 17.6009C3.33301 16.8692 3.33301 15.6901 3.33301 13.3334Z" stroke="#02054D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
);

const Section1 = () => {
    return (
        <>
            <section className="px-[1em] lg:px-[8em] xl:px-[8em] 2xl:px-[10em] my-4">
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-12 md:col-span-4">
                        <img src={InfraImage} alt="" />
                    </div>
                    <div className="col-span-12 md:col-span-8 my-auto">
                        <h2 className="text-primary font-manrope text-2xl font-semibold">
                            Abirami College of Pharmacy: Your Path to a<br />
                            Brighter Future in Pharmaceutical Education
                        </h2>
                        <hr className="border-1 border-[#AAB7FF] my-5" />
                        <div className="grid grid-cols-10 gap-4">
                            <div className="col-span-12 md:col-span-5 space-y-2">
                                <h3 className="flex text-primary text-md font-manrope font-medium space-x-1">
                                    <div className="p-2 rounded-full bg-[#F1F4FF]">
                                        {Steps}
                                    </div>
                                    <div className="my-auto">
                                        Steps to Apply
                                    </div>
                                </h3>
                                <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm">
                                    <li>
                                        Download the application form by visiting the official website of Sri Ramachandra University Or obtain the same in person from the university office on payment through cash.
                                    </li>
                                    <li>
                                        Fill the application form and send it to the university address along with required documents and application fee of INR 1000 in the form of DD.
                                    </li>
                                </ol>

                            </div>
                            <div className="col-span-12 md:col-span-5 space-y-2">
                                <h3 className="flex text-primary text-md font-manrope font-medium space-x-1">
                                    <div className="p-2 rounded-full bg-[#F1F4FF]">
                                        {Docs}
                                    </div>
                                    <div className="my-auto">
                                        Documents required to be enclosed:
                                    </div>
                                </h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                                    <li>
                                        X & XII Marks statement/Transcripts
                                    </li>
                                    <li>
                                        XII Grade Diploma Certificate (For Diploma/GCE Level)
                                    </li>
                                    <li>
                                        Transfer Certificate AND Code of Conduct Certificate
                                    </li>
                                    <li>
                                        Migration Certificate
                                    </li>
                                    <li>
                                        Birth Certificate as age proof
                                    </li>
                                    <li>
                                        Community Certificate and Copy of Aadhaar Card
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section1
