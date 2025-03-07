import LogoIcon from "../../assets/logo-icon.png";
const Hero = ({Rating, CollegeName}) => {
  return (
    <>
      <section className="px-[8em]">
        <div className="college-banner h-100 rounded-3xl p-4 flex flex-col justify-between">
            <div className="flex justify-end">
                <div className="bg-[#c0c9c9] rounded-lg border-1 border-white p-1 w-max flex">
                    <div className="bg-white rounded-full p-2">
                        <img src={LogoIcon} alt="" className="w-min" />
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="my-auto mx-2">
                        <path d="M10.6326 1.12969L12.7357 5.92656C12.8148 6.10706 12.941 6.26302 13.1009 6.37817C13.2609 6.49333 13.4488 6.56346 13.6451 6.58125L18.7685 7.04063C19.3482 7.125 19.5794 7.83594 19.1591 8.24531L15.2997 11.4875C14.9872 11.75 14.8451 12.1625 14.931 12.5609L16.0529 17.8125C16.1513 18.3891 15.5466 18.8297 15.0279 18.5563L10.556 15.9375C10.3874 15.8385 10.1953 15.7862 9.99975 15.7862C9.80417 15.7862 9.61214 15.8385 9.4435 15.9375L4.97162 18.5547C4.45444 18.8266 3.84819 18.3875 3.94662 17.8109L5.0685 12.5594C5.15287 12.1609 5.01225 11.7484 4.69975 11.4859L0.83881 8.24688C0.42006 7.83906 0.65131 7.12656 1.22944 7.04219L6.35287 6.58281C6.54916 6.56502 6.73707 6.49489 6.89702 6.37973C7.05697 6.26458 7.1831 6.10862 7.26225 5.92813L9.36537 1.13125C9.62631 0.60625 10.3732 0.60625 10.6326 1.12969Z" fill="#FFBE3F"/>
                        <path d="M10.4802 6.21401L10.1239 2.67964C10.1099 2.48276 10.0692 2.14526 10.3849 2.14526C10.6349 2.14526 10.7708 2.66558 10.7708 2.66558L11.8395 5.50308C12.2427 6.58276 12.0771 6.95308 11.688 7.17183C11.2411 7.42183 10.5817 7.22651 10.4802 6.21401Z" fill="#FFFF8D"/>
                        <path d="M14.8875 11.1734L17.9532 8.78124C18.1047 8.65467 18.3782 8.45311 18.1594 8.22342C17.986 8.04217 17.5172 8.30311 17.5172 8.30311L14.8344 9.35155C14.0344 9.62811 13.5032 10.0375 13.4563 10.5531C13.3954 11.2406 14.0125 11.7703 14.8875 11.1734Z" fill="#FFDB94"/>
                    </svg>
                    <div className="my-auto font-semibold font-manrope">
                        {Rating} Health Edu Rating
                    </div>
                </div>
            </div>
            <div className="text-4xl text-gray-200 font-medium font-manrope">
                {CollegeName}
            </div>
        </div>
      </section>
    </>
  )
}

export default Hero
