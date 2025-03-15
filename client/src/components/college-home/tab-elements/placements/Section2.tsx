import PlacementPosture from "../../../../assets/college-home/tabs/placement/PlacementPosture.png"
const PhIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M11.007 21.5H9.605C6.02 21.5 4.228 21.5 3.114 20.365C2 19.23 2 17.403 2 13.75C2 10.097 2 8.27 3.114 7.135C4.228 6 6.02 6 9.605 6H13.408C16.993 6 18.786 6 19.9 7.135C20.757 8.008 20.954 9.291 21 11.5V13" stroke="#02054D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M19 18.5H16M16 21.5C15.2044 21.5 14.4413 21.1839 13.8787 20.6213C13.3161 20.0587 13 19.2956 13 18.5C13 17.7044 13.3161 16.9413 13.8787 16.3787C14.4413 15.8161 15.2044 15.5 16 15.5M19 21.5C19.7956 21.5 20.5587 21.1839 21.1213 20.6213C21.6839 20.0587 22 19.2956 22 18.5C22 17.7044 21.6839 16.9413 21.1213 16.3787C20.5587 15.8161 19.7956 15.5 19 15.5M16 6L15.9 5.69C15.405 4.15 15.158 3.38 14.569 2.94C13.979 2.5 13.197 2.5 11.631 2.5H11.368C9.803 2.5 9.02 2.5 8.431 2.94C7.841 3.38 7.594 4.15 7.099 5.69L7 6" stroke="#02054D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
);

const Section2 = () => {
    return (
        <>
            <section className="my-5 px-[1em] lg:px-[8em] xl:px-[8em] 2xl:px-[10em]">
                <div className="flex space-x-2 justify-center">
                    <div className="rounded-full p-2 bg-[#F1F4FF]">
                        {PhIcon}
                    </div>
                    <div className="text-primary font-manrope font-semibold text-lg my-auto">
                        Placement Highlights
                    </div>
                </div>

                <div className="my-x-scroller flex overflow-x-auto space-x-4 my-7 scrollbar-hide snap-x snap-mandatory pb-4">
                    <div className="snap-start shrink-0">
                        <img src={PlacementPosture} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={PlacementPosture} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={PlacementPosture} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={PlacementPosture} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={PlacementPosture} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={PlacementPosture} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={PlacementPosture} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={PlacementPosture} alt="" />
                    </div>
                </div>


            </section>
        </>
    )
}

export default Section2
