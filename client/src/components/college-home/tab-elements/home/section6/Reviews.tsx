import ReviewCard from "./ReviewCard";
const Reviews = () => {
    return (
        <>
            <div className="bg-[#f4f4f7] rounded-3xl p-5">
                <div className="flex flex-wrap space-x-1 space-y-2">
                    <button className="text-white bg-[#444FFF] rounded-full px-3 py-1 text-[12px] font-medium">
                        All
                    </button>
                    <button className="text-zinc-500 bg-white rounded-full px-3 py-1 text-[12px]">
                        Infrastructure
                    </button>
                    <button className="text-zinc-500 bg-white rounded-full px-3 py-1 text-[12px]">
                        Cost-effective
                    </button>
                    <button className="text-zinc-500 bg-white rounded-full px-3 py-1 text-[12px]">
                        Campus Life
                    </button>
                    <button className="text-zinc-500 bg-white rounded-full px-3 py-1 text-[12px]">
                        Academics
                    </button>
                    <button className="text-zinc-500 bg-white rounded-full px-3 py-1 text-[12px]">
                        Placements
                    </button>
                </div>
                <div className="overflow-auto h-50 my-y-scroller">
                    <div className="my-3 pe-2 space-y-2">
                        <ReviewCard
                            Description="MMC Chennai College truly deserves the title of 'Best in Education. The institution excels in delivering a top-notch academic experience, providing students with a comprehensive and dynamic learning environment. The faculty members are highly knowledgeable and committed, ensuring that students receive quality education that prepares them for real-world challenges."
                            Name="Matisha Puthran | MBBS"
                            Date="23 Sep'16" />
                    </div>
                    <div className="my-3 pe-2 space-y-2">
                        <ReviewCard
                            Description="MMC Chennai College truly deserves the title of 'Best in Education. The institution excels in delivering a top-notch academic experience, providing students with a comprehensive and dynamic learning environment. The faculty members are highly knowledgeable and committed, ensuring that students receive quality education that prepares them for real-world challenges."
                            Name="Matisha Puthran | MBBS"
                            Date="23 Sep'16" />
                    </div>
                    <div className="my-3 pe-2 space-y-2">
                        <ReviewCard
                            Description="MMC Chennai College truly deserves the title of 'Best in Education. The institution excels in delivering a top-notch academic experience, providing students with a comprehensive and dynamic learning environment. The faculty members are highly knowledgeable and committed, ensuring that students receive quality education that prepares them for real-world challenges."
                            Name="Matisha Puthran | MBBS"
                            Date="23 Sep'16" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reviews
