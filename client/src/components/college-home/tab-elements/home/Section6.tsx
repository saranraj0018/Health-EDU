import UpdatesCard from "./UpdatesCard";
const Section6 = () => {
    return (
        <>
            <section className="px-[8em] my-10">
                <div className="bg-[#f4f4f7] rounded-3xl p-5">
                    <div className="flex justify-between">
                        <div className="flex space-x-2">
                            <div className="bg-white p-1 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                    <path d="M5.21783 10.465C5.15735 11.6217 5.22695 12.853 4.19367 13.6278C3.95611 13.8056 3.76334 14.0363 3.6307 14.3017C3.49807 14.5672 3.42924 14.8599 3.42969 15.1566C3.42969 15.9827 4.07766 16.687 4.92119 16.687H16.8532C17.6967 16.687 18.3447 15.9827 18.3447 15.1566C18.3447 14.555 18.0613 13.9882 17.5807 13.6278C16.5474 12.853 16.6171 11.6217 16.5566 10.465C16.482 9.01166 15.8522 7.64248 14.7971 6.64018C13.7421 5.63789 12.3424 5.07904 10.8872 5.07904C9.43197 5.07904 8.03231 5.63789 6.97728 6.64018C5.92224 7.64248 5.2924 9.01166 5.21783 10.465Z" stroke="#EC2818" stroke-width="1.35591" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M13.373 16.6871C13.373 17.3463 13.1111 17.9786 12.645 18.4448C12.1788 18.911 11.5465 19.1729 10.8872 19.1729C10.2279 19.1729 9.59564 18.911 9.12945 18.4448C8.66327 17.9786 8.40137 17.3463 8.40137 16.6871M9.64429 3.53284C9.64429 4.21893 10.2011 5.08648 10.8872 5.08648C11.5733 5.08648 12.1301 4.21893 12.1301 3.53284C12.1301 2.84674 11.5733 2.60065 10.8872 2.60065C10.2011 2.60065 9.64429 2.84674 9.64429 3.53284Z" stroke="#EC2818" stroke-width="1.35591" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className="text-primary font-manrope font-semibold text-lg">
                                Latest Updates
                            </div>
                        </div>
                        <a href="" className="flex font-semibold font-manrope my-auto text-primary">
                            View All
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none" className="my-auto ms-2">
                                <path d="M1 12.9999L7 6.99994L1 0.999939" stroke="#02054D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                    </div>
                    <div className="my-x-scroller flex overflow-x-auto space-x-3 my-3 scrollbar-hide snap-x snap-mandatory">
                        <div className="snap-start shrink-0">
                            <UpdatesCard Date="September 09, 2024" Content="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
                        </div>
                        <div className="snap-start shrink-0">
                            <UpdatesCard Date="September 09, 2024" Content="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
                        </div>
                        <div className="snap-start shrink-0">
                            <UpdatesCard Date="September 09, 2024" Content="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
                        </div>
                        <div className="snap-start shrink-0">
                            <UpdatesCard Date="September 09, 2024" Content="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
                        </div>
                        <div className="snap-start shrink-0">
                            <UpdatesCard Date="September 09, 2024" Content="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
                        </div>
                        <div className="snap-start shrink-0">
                            <UpdatesCard Date="September 09, 2024" Content="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
                        </div>
                        <div className="snap-start shrink-0">
                            <UpdatesCard Date="September 09, 2024" Content="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
                        </div>
                        <div className="snap-start shrink-0">
                            <UpdatesCard Date="September 09, 2024" Content="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section6
