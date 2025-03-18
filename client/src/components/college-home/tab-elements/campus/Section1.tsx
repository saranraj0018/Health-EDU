import Campus1 from "../../../../assets/college-home/tabs/campus/Campus-1.png";
import Campus2 from "../../../../assets/college-home/tabs/campus/Campus-2.png";
import Campus3 from "../../../../assets/college-home/tabs/campus/Campus-3.png";
import Campus4 from "../../../../assets/college-home/tabs/campus/Campus-4.png";

const Section1 = () => {
    return (
        <>
            <section className="px-[1em] lg:px-[8em] xl:px-[8em] 2xl:px-[10em] space-y-2">
                <h2 className="text-primary text-2xl font-manrope font-semibold text-center">
                    A Perfect Blend of Learning and Living
                </h2>
                <p className="text-center">
                    Abirami College of Pharmacy offers a vibrant and enriching campus experience, combining academic excellence with personal growth.<br /> Our campus is designed to foster innovation, collaboration, and a sense of community, making it a home away from home for students.
                </p>
                <div className="my-x-scroller flex overflow-x-auto space-x-4 my-7 scrollbar-hide snap-x snap-mandatory pb-4">
                    <div className="snap-start shrink-0">
                        <img src={Campus1} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={Campus2} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={Campus3} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={Campus4} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={Campus1} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={Campus2} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={Campus3} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={Campus4} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section1
