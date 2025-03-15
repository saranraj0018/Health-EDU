import Company1 from "../../../../assets/college-home/tabs/placement/byjus.png";
import Company2 from "../../../../assets/college-home/tabs/placement/info.png";
import Company3 from "../../../../assets/college-home/tabs/placement/tata.png";
import Company4 from "../../../../assets/college-home/tabs/placement/tcs.png";
import Company5 from "../../../../assets/college-home/tabs/placement/tm.png";
import Company6 from "../../../../assets/college-home/tabs/placement/zoho.png";



const OrIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
        <path d="M6.5 9.5H5.5M10.5 9.5H9.5M6.5 6.5H5.5M10.5 6.5H9.5M18.5 15.5H17.5M18.5 11.5H17.5M14 8.5V22.5H18C19.886 22.5 20.828 22.5 21.414 21.914C22 21.328 22 20.386 22 18.5V12.5C22 10.614 22 9.672 21.414 9.086C20.828 8.5 19.886 8.5 18 8.5H14ZM14 8.5C14 5.672 14 4.257 13.121 3.379C12.243 2.5 10.828 2.5 8 2.5C5.172 2.5 3.757 2.5 2.879 3.379C2 4.257 2 5.672 2 8.5V10.5M8.025 14.455C8.03082 14.7213 7.98337 14.9862 7.88544 15.2339C7.78751 15.4817 7.64107 15.7074 7.45471 15.8977C7.26836 16.0881 7.04584 16.2393 6.80024 16.3425C6.55463 16.4457 6.29088 16.4988 6.02448 16.4987C5.75807 16.4986 5.49438 16.4452 5.24887 16.3418C5.00337 16.2383 4.78101 16.0869 4.59485 15.8963C4.40868 15.7057 4.26246 15.4799 4.16478 15.2321C4.06709 14.9842 4.01991 14.7193 4.026 14.453C4.03795 13.9304 4.25399 13.4333 4.62788 13.0681C5.00176 12.7028 5.50379 12.4984 6.02648 12.4987C6.54917 12.499 7.05099 12.7038 7.42451 13.0695C7.79803 13.4351 8.01358 13.9324 8.025 14.455ZM2.07 20.71C3.128 19.082 4.809 18.472 6.025 18.473C7.241 18.474 8.872 19.082 9.931 20.71C9.999 20.815 10.018 20.945 9.956 21.054C9.709 21.493 8.94 22.364 8.386 22.422C7.747 22.49 6.079 22.5 6.026 22.5C5.973 22.5 4.253 22.49 3.616 22.422C3.06 22.363 2.292 21.493 2.044 21.054C2.01618 20.9998 2.00388 20.939 2.00847 20.8783C2.01306 20.8176 2.03435 20.7594 2.07 20.71Z" stroke="#02054D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
);

const Section4 = () => {
    return (
        <>
            <section className="my-3 px-[1em] lg:px-[8em] xl:px-[8em] 2xl:px-[10em] bg-[#f1f4ff] py-3">
                <div className="flex space-x-2 justify-center">
                    <div className="rounded-full p-2 bg-white">
                        {OrIcon}
                    </div>
                    <div className="text-primary font-manrope font-semibold text-lg my-auto">
                        Our Recruiter
                    </div>
                </div>

                <div className="my-x-scroller flex overflow-x-auto space-x-4 my-7 scrollbar-hide snap-x snap-mandatory pb-4">
                    <div className="snap-start shrink-0">
                        <img src={Company1} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={Company2} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={Company3} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={Company4} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={Company5} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={Company6} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={Company1} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={Company2} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={Company3} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={Company4} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={Company5} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={Company6} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section4
