import Facilities1 from "../../../../assets/college-home/tabs/campus/Facilities1.png";
import Facilities2 from "../../../../assets/college-home/tabs/campus/Facilities2.png";
import Facilities3 from "../../../../assets/college-home/tabs/campus/Facilities3.png";
import Facilities4 from "../../../../assets/college-home/tabs/campus/Facilities4.png";
import Facilities5 from "../../../../assets/college-home/tabs/campus/Facilities5.png";



const Hospital = (
    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
        <path opacity="0.1" d="M15.8965 31.7558C24.2422 31.7558 31.0078 24.9902 31.0078 16.6444C31.0078 8.29866 24.2422 1.53308 15.8965 1.53308C7.55073 1.53308 0.785156 8.29866 0.785156 16.6444C0.785156 24.9902 7.55073 31.7558 15.8965 31.7558Z" fill="#444FFF" />
        <path d="M12.6674 35.2009C12.4029 35.1993 12.1413 35.1456 11.8976 35.0428C11.6539 34.9401 11.4328 34.7903 11.247 34.6021C11.0611 34.4139 10.9142 34.191 10.8145 33.946C10.7148 33.701 10.6644 33.4388 10.6661 33.1743V19.9123C10.6627 19.3769 10.8712 18.862 11.2462 18.4799C11.6212 18.0978 12.1321 17.8796 12.6674 17.8729H15.2007V14.7823C15.1451 13.8743 15.4508 12.9812 16.0512 12.2978C16.6516 11.6144 17.4978 11.1961 18.4054 11.1343H27.3354C28.2595 11.1803 29.128 11.5894 29.7519 12.2726C30.3758 12.9558 30.7046 13.8578 30.6667 14.7823V17.8729H33.9474C34.2119 17.8763 34.4731 17.9316 34.7162 18.0359C34.9593 18.1402 35.1795 18.2913 35.3641 18.4807C35.5488 18.6701 35.6944 18.894 35.7925 19.1396C35.8906 19.3852 35.9394 19.6478 35.9361 19.9123V33.1743C35.9394 33.7063 35.7322 34.218 35.3596 34.5977C34.987 34.9774 34.4793 35.1943 33.9474 35.2009H12.6674Z" fill="#444FFF" />
        <path d="M11.2617 19.8614C11.2748 19.5691 11.4011 19.2933 11.6139 19.0924C11.8266 18.8915 12.1091 18.7812 12.4017 18.7847H16.0244V14.4147C16.0038 13.7189 16.2581 13.0429 16.7322 12.5332C17.2064 12.0235 17.8622 11.7211 18.5577 11.6914H27.2851C27.9806 11.7211 28.6364 12.0235 29.1106 12.5332C29.5847 13.0429 29.839 13.7189 29.8184 14.4147V18.7974H34.2011C34.4925 18.7905 34.775 18.898 34.9881 19.0969C35.2012 19.2958 35.3279 19.5702 35.3411 19.8614V33.5034C35.3248 33.7935 35.1971 34.0661 34.9847 34.2643C34.7723 34.4625 34.4916 34.5711 34.2011 34.5674H12.4017C12.1112 34.5711 11.8305 34.4625 11.6181 34.2643C11.4057 34.0661 11.278 33.7935 11.2617 33.5034V19.8614Z" fill="#444FFF" />
        <path d="M24.3582 21.6855H22.2175V25.5109H18.6582V27.8415H22.2175V31.6669H24.3582V27.8415H27.9175V25.5109V25.4982H24.3582V21.6855Z" fill="white" />
        <path d="M27.8672 14.6305V16.8345H17.9239V14.6178C17.9222 14.4854 17.9469 14.3539 17.9964 14.231C18.0459 14.1081 18.1194 13.9963 18.2125 13.902C18.3056 13.8078 18.4164 13.7329 18.5387 13.6819C18.6609 13.6308 18.7921 13.6045 18.9246 13.6045H26.8792C27.1437 13.6174 27.3932 13.7308 27.5768 13.9215C27.7604 14.1122 27.8643 14.3658 27.8672 14.6305Z" fill="white" />
    </svg>
);


const Section2 = () => {
    return (
        <>
            <section className="px-[1em] lg:px-[8em] xl:px-[8em] 2xl:px-[10em] space-y-2">
                <h2 className="text-primary text-2xl font-manrope font-semibold text-center">
                    Abirami College Of Pharmacy Facilities
                </h2>
                <p className="text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br /> incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                    <div className="flex space-x-2 bg-[#F1F4FF] rounded-2xl p-2 pe-8">
                        <div className="bg-white p-1 rounded-md">
                            {Hospital}
                        </div>
                        <div className="font-manrope font-semibold text-sm my-auto me-8">
                            Medical/Hospital
                        </div>
                    </div>
                    <div className="flex space-x-2 bg-[#F1F4FF] rounded-2xl p-2 pe-8">
                        <div className="bg-white p-1 rounded-md">
                            {Hospital}
                        </div>
                        <div className="font-manrope font-semibold text-sm my-auto me-8">
                            Sports
                        </div>
                    </div>
                    <div className="flex space-x-2 bg-[#F1F4FF] rounded-2xl p-2 pe-8">
                        <div className="bg-white p-1 rounded-md">
                            {Hospital}
                        </div>
                        <div className="font-manrope font-semibold text-sm my-auto me-8">
                            Girls Hostel
                        </div>
                    </div>
                    <div className="flex space-x-2 bg-[#F1F4FF] rounded-2xl p-2 pe-8">
                        <div className="bg-white p-1 rounded-md">
                            {Hospital}
                        </div>
                        <div className="font-manrope font-semibold text-sm my-auto me-8">
                            Library
                        </div>
                    </div>
                    <div className="flex space-x-2 bg-[#F1F4FF] rounded-2xl p-2 pe-8">
                        <div className="bg-white p-1 rounded-md">
                            {Hospital}
                        </div>
                        <div className="font-manrope font-semibold text-sm my-auto me-8">
                            I.T Infrastructure
                        </div>
                    </div>
                    <div className="flex space-x-2 bg-[#F1F4FF] rounded-2xl p-2 pe-8">
                        <div className="bg-white p-1 rounded-md">
                            {Hospital}
                        </div>
                        <div className="font-manrope font-semibold text-sm my-auto me-8">
                            Boys Hostel
                        </div>
                    </div>
                    <div className="flex space-x-2 bg-[#F1F4FF] rounded-2xl p-2 pe-8">
                        <div className="bg-white p-1 rounded-md">
                            {Hospital}
                        </div>
                        <div className="font-manrope font-semibold text-sm my-auto me-8">
                            Gym
                        </div>
                    </div>
                    <div className="flex space-x-2 bg-[#F1F4FF] rounded-2xl p-2 pe-8">
                        <div className="bg-white p-1 rounded-md">
                            {Hospital}
                        </div>
                        <div className="font-manrope font-semibold text-sm my-auto me-8">
                            Boys Hostel
                        </div>
                    </div>
                    <div className="flex space-x-2 bg-[#F1F4FF] rounded-2xl p-2 pe-8">
                        <div className="bg-white p-1 rounded-md">
                            {Hospital}
                        </div>
                        <div className="font-manrope font-semibold text-sm my-auto me-8">
                            Laboratories
                        </div>
                    </div>
                    <div className="flex space-x-2 bg-[#F1F4FF] rounded-2xl p-2 pe-8">
                        <div className="bg-white p-1 rounded-md">
                            {Hospital}
                        </div>
                        <div className="font-manrope font-semibold text-sm my-auto me-8">
                            Alumni Associations
                        </div>
                    </div>

                </div>
                <div className="my-x-scroller flex overflow-x-auto space-x-4 my-7 scrollbar-hide snap-x snap-mandatory pb-4">
                    <div className="snap-start shrink-0">
                        <img src={Facilities1} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={Facilities2} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={Facilities3} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={Facilities4} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={Facilities5} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={Facilities1} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={Facilities2} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={Facilities3} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={Facilities4} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={Facilities5} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section2
