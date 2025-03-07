import oahImage from "../../../../assets/college-home/tabs/home/oah-image.png";
const Slider = () => {
    return (
        <>
            <div className="flex bg-white rounded-2xl p-2 space-x-2">
                <div>
                    <img src={oahImage} alt="" />
                </div>
                <div className="space-y-2 my-auto">
                    <h3 className="text-primary font-manrope font-semibold">
                        Sree Abirami Hospital Private Limited
                    </h3>
                    <div className="flex flex-wrap space-x-2">
                        <div className="flex space-x-1">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                                    <g clip-path="url(#clip0_4974_4284)">
                                        <path d="M15.2693 8.08095C15.2693 13.1706 8.72548 17.5332 8.72548 17.5332C8.72548 17.5332 2.18164 13.1706 2.18164 8.08095C2.18164 6.34542 2.87108 4.68096 4.09829 3.45376C5.3255 2.22655 6.98995 1.53711 8.72548 1.53711C10.461 1.53711 12.1255 2.22655 13.3527 3.45376C14.5799 4.68096 15.2693 6.34542 15.2693 8.08095Z" stroke="#02054D" stroke-width="1.18979" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M8.72523 10.2622C9.92991 10.2622 10.9065 9.28563 10.9065 8.08094C10.9065 6.87625 9.92991 5.89966 8.72523 5.89966C7.52054 5.89966 6.54395 6.87625 6.54395 8.08094C6.54395 9.28563 7.52054 10.2622 8.72523 10.2622Z" stroke="#02054D" stroke-width="1.18979" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_4974_4284">
                                            <rect width="17.4502" height="17.4502" fill="white" transform="translate(0 0.810059)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className="text-sm">
                                Coimbatore, Tamil Nadu
                            </div>
                        </div>
                        <div className="flex space-x-1">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                    <path d="M9.4502 17.0352C13.5923 17.0352 16.9502 13.6773 16.9502 9.53516C16.9502 5.39302 13.5923 2.03516 9.4502 2.03516C5.30806 2.03516 1.9502 5.39302 1.9502 9.53516C1.9502 13.6773 5.30806 17.0352 9.4502 17.0352Z" stroke="#444FFF" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M1.9502 9.53516H16.9502" stroke="#444FFF" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M9.4502 2.03516C11.3262 4.08892 12.3923 6.75418 12.4502 9.53516C12.3923 12.3161 11.3262 14.9814 9.4502 17.0352C7.57423 14.9814 6.50813 12.3161 6.4502 9.53516C6.50813 6.75418 7.57423 4.08892 9.4502 2.03516Z" stroke="#444FFF" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className="text-sm">
                                Website
                            </div>
                        </div>
                    </div>
                    <div className="flex space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none" className="my-auto">
                            <g clip-path="url(#clip0_4974_4296)">
                                <path d="M9.00041 13.7302L3.71066 16.6912L4.89191 10.7452L0.441406 6.62916L6.46166 5.91516L9.00041 0.410156L11.5392 5.91516L17.5594 6.62916L13.1089 10.7452L14.2902 16.6912L9.00041 13.7302Z" fill="#FFBE3F" />
                            </g>
                            <defs>
                                <clipPath id="clip0_4974_4296">
                                    <rect width="18" height="18" fill="white" transform="translate(0 0.0351562)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <div className="text-sm">
                            4.8/5
                        </div>
                        <div className="text-[11px] text-zinc-500 flex flex-col justify-end">
                            124 user Reviews
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slider
