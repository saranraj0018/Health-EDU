import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Progress from "./section6/Progress";
import Reviews from "./section6/Reviews";

const CircularProgress = ({ progress }) => {
    return (
        <CircularProgressbar
            value={(progress / 5) * 100} // Convert 0-5 to percentage
            text={`${progress}`}
            styles={buildStyles({
                strokeLinecap: "round",
                textSize: "18px",
                pathColor: "#444FFF",
                textColor: "black",
                trailColor: "#d0d9ff",
            })}
        />
    );
};

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