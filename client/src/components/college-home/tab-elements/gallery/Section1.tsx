import Gallery1 from "../../../../assets/college-home/tabs/gallery/Gallery-1.png";

const Section1 = () => {
    return (
        <>
            <section className="px-[8em] space-y-2">
                <h2 className="text-primary text-2xl font-manrope font-semibold text-center">
                    A Glimpse into Life at Abirami College of Pharmacy
                </h2>
                <p className="text-center">
                    Welcome to the Gallery page of Abirami College of Pharmacy, where every picture tells a story of learning, <br />achievement, and vibrant campus life. Explore moments that define our commitment to excellence and the experiences that<br /> make our college a cherished place for students.
                </p>
                <div className="my-x-scroller flex overflow-x-auto space-x-4 my-7 scrollbar-hide snap-x snap-mandatory pb-4">
                    <div className="snap-start shrink-0">
                        <img src={Gallery1} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={Gallery1} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={Gallery1} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={Gallery1} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={Gallery1} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={Gallery1} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={Gallery1} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={Gallery1} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section1
