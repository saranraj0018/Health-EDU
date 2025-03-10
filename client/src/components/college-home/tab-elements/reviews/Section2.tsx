import Infra1 from "../../../../assets/college-home/tabs/gallery//Infra1.png";
import Infra2 from "../../../../assets/college-home/tabs/gallery//Infra2.png";

const Section2 = () => {
    return (
        <>
            <section className="px-[8em] space-y-2 bg-[#F1F4FF] py-5 my-8">
                <h2 className="text-primary font-manrope text-center font-semibold text-2xl">
                    Student Testimonials
                </h2>
                <div className="my-x-scroller flex overflow-x-auto space-x-4 my-7 scrollbar-hide snap-x snap-mandatory pb-4">
                    <div className="snap-start shrink-0">
                        <img src={Infra1} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={Infra2} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={Infra1} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={Infra2} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={Infra1} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={Infra2} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={Infra1} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={Infra2} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section2
