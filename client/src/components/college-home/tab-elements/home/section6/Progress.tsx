
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgress = ({ progress }: { progress: number }) => {
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

const Progress = () => {
    return (
        <>
            <h2 className="text-primary font-manrope font-semibold text-2xl">
                Abirami College of Pharmacy Reviews
            </h2>
            <div className="flex space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none" className="my-auto">
                    <g clip-path="url(#clip0_4974_4296)">
                        <path d="M9.00041 13.7302L3.71066 16.6912L4.89191 10.7452L0.441406 6.62916L6.46166 5.91516L9.00041 0.410156L11.5392 5.91516L17.5594 6.62916L13.1089 10.7452L14.2902 16.6912L9.00041 13.7302Z" fill="#FFBE3F" />
                    </g>
                    <defs>
                        <clipPath id="clip0_4974_4296">
                            <rect width="18" height="18" fill="white" transform="translate(0 0.0351562)" />
                        </clipPath>
                    </defs>
                </svg>
                <div className="text-md font-medium">
                    4.8/5
                </div>
                <div className="text-[13px] text-zinc-600 flex flex-col justify-end text-semibold">
                    124 user Reviews
                </div>
            </div>
            <div className="flex space-x-8">
                <div className="space-y-2">
                    <CircularProgress progress={4.5} />
                    <p className="font-manrope font-semibold text-[14px] text-center">Infrastructure</p>
                </div>
                <div className="space-y-2">
                    <CircularProgress progress={4.2} />
                    <p className="font-manrope font-semibold text-[14px] text-center">Academics</p>
                </div>
                <div className="space-y-2">
                    <CircularProgress progress={4.0} />
                    <p className="font-manrope font-semibold text-[14px] text-center">Placements</p>
                </div>
                <div className="space-y-2">
                    <CircularProgress progress={4.1} />
                    <p className="font-manrope font-semibold text-[14px] text-center">Cost-effective</p>
                </div>
                <div className="space-y-2">
                    <CircularProgress progress={3.5} />
                    <p className="font-manrope font-semibold text-[14px] text-center">Campus Life</p>
                </div>
            </div>
            <button className="text-white bg-primary font-manrope font-medium py-2 px-3 rounded-full">
                Write your Review
            </button>

        </>
    )
}

export default Progress
