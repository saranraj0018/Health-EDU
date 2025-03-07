
import "react-circular-progressbar/dist/styles.css";
import Progress from "./section6/Progress";
import Reviews from "./section6/Reviews";


const Section5 = () => {
    return (
        <>
            <section className="my-4 px-[8em]">
                <div className="grid grid-cols-10 gap-8">
                    <div className="col-span-12 md:col-span-6 space-y-4">
                        <Progress />
                    </div>
                    <div className="col-span-12 md:col-span-4">
                        <Reviews />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section5