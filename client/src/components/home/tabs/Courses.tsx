import { useState } from 'react';
import PG1 from '../../../assets/p1.png';
import PG2 from '../../../assets/p2.png';
import PG3 from '../../../assets/p3.png';
import PG4 from '../../../assets/p4.png';
import PG5 from '../../../assets/p5.png';
import PG6 from '../../../assets/p6.png';
import PG7 from '../../../assets/p7.png';
import PG8 from '../../../assets/p8.png';
import PG9 from '../../../assets/p9.png';
import PG10 from '../../../assets/p10.png';
import PG11 from '../../../assets/p11.png';

const Courses = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
        { link: PG1, title: "MBBS (Bachelor of Medicine,Bachelor of Surgery)" },
        { link: PG2, title: 'BDS (Bachelor of Dental Surgery)' },
        { link: PG3, title: 'BAMS (Bachelor of Ayurvedic Medicine and Surgery)' },
        { link: PG4, title: 'BHMS (Bachelor of Homeopathic Medicine and Surgery)' },
        { link: PG5, title: 'BUMS (Bachelor of Unani Medicine and Surgery)' },
        { link: PG6, title: 'BPT (Bachelor of Physiotherapy)' },
        { link: PG7, title: 'BSc Nursing (Bachelor of Science in Nursing)' },
        { link: PG8, title: 'MD (Doctor of Medicine)' },
        { link: PG9, title: 'MS (Master of Surgery)' },
        { link: PG10, title: 'MDS (Master of Dental Surgery)' },
        { link: PG11, title: 'MSc Nursing (Master of Science in Nursing)' },
    ];

    const goNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const goPrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? cards.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative max-w-full overflow-hidden">
            <button
                onClick={goPrev}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-primary py-2 px-4 rounded-full shadow-lg font-bold z-10"
            >
                &#10094;
            </button>

            <div className="flex justify-center items-center">
                <div
                    style={{
                        display: 'flex',
                        transition: 'transform 0.5s ease-in-out',
                        transform: `translateX(-${currentIndex * 100}%)`, // Adjusting for 100% width
                        width: '100%',
                    }}
                >
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="min-w-full sm:min-w-1/2 md:min-w-1/4 p-3 md:mx-2 bg-white border-zinc-200 border-2 rounded-[30px]"
                        >
                            <div className="flex flex-col justify-around h-[100%]">
                                <div className="relative">
                                    <img src={card.link} alt={card.title} className="w-full rounded-lg" />
                                    <h3 className="text-[16px] font-semibold mt-1 bg-white px-4 py-1 w-max rounded-full absolute top-[5px] left-[10px]">PG</h3>
                                    <h3 className="text-[16px] font-semibold mt-1">{card.title}</h3>
                                </div>
                                <div className="mt-3 px-4 py-2 rounded-full border-1 border-zinc-300 w-max">
                                    <i className="fas fa-angle-right text-zinc-500"></i>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={goNext}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-primary py-2 px-4 rounded-full shadow-lg font-bold z-10"
            >
                &#10095;
            </button>

        </div>
    );
};

export default Courses;
