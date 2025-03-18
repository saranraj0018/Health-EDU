
type Props = {
    Icon1: React.ReactNode;
    Icon2: React.ReactNode;
    Icon3: React.ReactNode;
    Icon4: React.ReactNode;
    Title1: String;
    Title2: String;
    Title3: String;
    Title4: String;
};


const Content = ({ Icon1, Icon2, Icon3, Icon4, Title1, Title2, Title3, Title4 }: Props) => {
    return (
        <>
            <div>
                <div className="grid grid-cols-10 gap-5">
                    <div className="col-span-12 md:col-span-5 space-y-3">
                        <div className="flex space-x-2">
                            <div className="bg-[#E6EBFF] p-2 rounded-sm">
                                {Icon1}
                            </div>
                            <div className="text-primary font-manrope font-semibold text-md my-auto">
                                {Title1}
                            </div>
                        </div>
                        <ul className="list-disc list-inside space-y-1 text-[13px]">
                            <li>
                                Awarded to students who demonstrate exceptional academic performance in their qualifying exams.
                            </li>
                            <li>
                                Encourages and motivates high-achieving individuals to excel further.
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-12 md:col-span-5 space-y-3">
                        <div className="flex space-x-2">
                            <div className="bg-[#E6EBFF] p-2 rounded-sm">
                                {Icon2}
                            </div>
                            <div className="text-primary font-manrope font-semibold text-md my-auto">
                                {Title2}
                            </div>
                        </div>
                        <ul className="list-disc list-inside space-y-1 text-[13px]">
                            <li>
                                Designed to support students from economically disadvantaged backgrounds.
                            </li>
                            <li>
                                Ensures equal opportunities for all to pursue their dreams.
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="border-[#D0D9FF] my-5" />
                <div className="grid grid-cols-10 gap-5">
                    <div className="col-span-12 md:col-span-5 space-y-3">
                        <div className="flex space-x-2">
                            <div className="bg-[#E6EBFF] p-2 rounded-sm">
                                {Icon3}
                            </div>
                            <div className="text-primary font-manrope font-semibold text-md my-auto">
                                {Title3}
                            </div>
                        </div>
                        <ul className="list-disc list-inside space-y-1 text-[13px]">
                            <li>
                                Recognizes outstanding achievements in sports, arts, or other extracurricular activities.
                            </li>
                            <li>
                                Helps holistic development beyond academics.
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-12 md:col-span-5 space-y-3">
                        <div className="flex space-x-2">
                            <div className="bg-[#E6EBFF] p-2 rounded-sm">
                                {Icon4}
                            </div>
                            <div className="text-primary font-manrope font-semibold text-md my-auto">
                                {Title4}
                            </div>
                        </div>
                        <ul className="list-disc list-inside space-y-1 text-[13px]">
                            <li>
                                Guidance provided to avail government-funded and external private scholarships.
                            </li>
                            <li>
                                Includes schemes like SC/ST scholarships, minority scholarships, and more.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content
