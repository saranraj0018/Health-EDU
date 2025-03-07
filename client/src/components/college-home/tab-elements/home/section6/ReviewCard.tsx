import Avatar from "../../../../../assets/college-home/tabs/home/Avatar.png";
const ReviewCard = ({Description, Name, Date}: {Description: string, Name: string, Date: string}) => {
    return (
        <>
            <div className="flex space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none" className="my-auto">
                    <g clip-path="url(#clip0_4974_4402)">
                        <path d="M9.00041 13.7302L3.71066 16.6912L4.89191 10.7452L0.441406 6.62916L6.46166 5.91516L9.00041 0.410156L11.5392 5.91516L17.5594 6.62916L13.1089 10.7452L14.2902 16.6912L9.00041 13.7302Z" fill="#FFBE3F" />
                    </g>
                    <defs>
                        <clipPath id="clip0_4974_4402">
                            <rect width="18" height="18" fill="white" transform="translate(0 0.0351562)" />
                        </clipPath>
                    </defs>
                </svg>
                <div className="font-semibold">
                    4
                </div>
                <div className="font-semibold">
                    Best in Education
                </div>
            </div>
            <p className="text-[12px] text-justify text-[#525252]">
                {Description}
            </p>
            <div className="flex space-x-3 mt-3">
                <img src={Avatar} alt="" />
                <div className="my-auto">
                    <p className="font-semibold text-[15px]">
                        {Name}
                    </p>
                    <p className="text-[12px]">
                        Posted on {Date}
                    </p>
                </div>
            </div>

        </>
    )
}

export default ReviewCard
