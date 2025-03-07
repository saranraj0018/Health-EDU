import { useState } from "react";
import College1 from "../../../assets/c1.png";
import College2 from "../../../assets/c2.png";
import College3 from "../../../assets/c3.png";
import College4 from "../../../assets/c4.png";
import College5 from "../../../assets/c5.png";
import College6 from "../../../assets/c6.png";

const Rankings = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false); // To manage smooth transitions

  const cards = [
    {
      link: College1,
      title: "MBBS Colleges",
      content:
        "Top MBBS Colleges in Tamil Nadu: Rankings, Facilities, Placements, and More",
    },
    {
      link: College2,
      title: "MD Colleges",
      content:
        "Top MD Colleges in Tamil Nadu: Rankings, Facilities, Placements, and More",
    },
    {
      link: College3,
      title: "MS Colleges",
      content:
        "Top MS Colleges in Tamil Nadu: Rankings, Facilities, Placements, and More",
    },
    {
      link: College4,
      title: "BAMS Colleges",
      content:
        "Top BAMS Colleges in Tamil Nadu: Rankings, Facilities, Placements, and More",
    },
    {
      link: College5,
      title: "BPT Colleges",
      content:
        "Top BPT Colleges in Tamil Nadu: Rankings, Facilities, Placements, and More",
    },
    {
      link: College6,
      title: "M.F.Sc Colleges",
      content:
        "Top M.F.Sc Colleges in Tamil Nadu: Rankings, Facilities, Placements, and More",
    },
  ];

  const goNext = () => {
    if (!transitioning) {
      setTransitioning(true);
      if (currentIndex === cards.length - 1) {
        // Reset to the first item after reaching the end
        setTimeout(() => {
          setCurrentIndex(0);
          setTransitioning(false);
        }, 500); // Match the duration of the transition
      } else {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        setTimeout(() => {
          setTransitioning(false);
        }, 500); // Match the duration of the transition
      }
    }
  };

  const goPrev = () => {
    if (!transitioning) {
      setTransitioning(true);
      if (currentIndex === 0) {
        // Go to the last item
        setTimeout(() => {
          setCurrentIndex(cards.length - 1);
          setTransitioning(false);
        }, 500); // Match the duration of the transition
      } else {
        setCurrentIndex((prevIndex) => prevIndex - 1);
        setTimeout(() => {
          setTransitioning(false);
        }, 500); // Match the duration of the transition
      }
    }
  };

  const cardWidth = () => {
    if (window.innerWidth <= 480) {
      return "100%"; // 1 card visible on mobile
    } else if (window.innerWidth <= 768) {
      return "50%"; // 2 cards visible on tablets
    } else {
      return "25%"; // 4 cards visible on larger screens
    }
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
            display: "flex",
            transition: transitioning ? "transform 0.5s ease-in-out" : "none", // Disable transition during reset
            transform: `translateX(-${currentIndex * 100}%)`, // Adjust the slide distance based on the width of the cards
            width: "100%",
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="p-3 mx-2 bg-white border-zinc-200 border-2 rounded-[30px]"
              style={{ minWidth: cardWidth() }}
            >
              <img
                src={card.link}
                alt={card.title}
                className="w-full rounded-lg"
              />
              <h3 className="text-[15px] font-manrope mt-3">{card.title}</h3>
              <p className="text-xs text-zinc-500">{card.content}</p>
              <div className="mt-3 px-4 py-2 rounded-full border-1 border-zinc-300 w-max">
                <i className="fas fa-angle-right text-zinc-500"></i>
              </div>
            </div>
          ))}
          {/* To loop the carousel */}
          {cards.map((card, index) => (
            <div
              key={`duplicate-${index}`}
              className="p-3 mx-2 bg-white border-zinc-200 border-2 rounded-[30px]"
              style={{ minWidth: cardWidth() }}
            >
              <img
                src={card.link}
                alt={card.title}
                className="w-full rounded-lg"
              />
              <h3 className="text-[15px] font-manrope mt-3">{card.title}</h3>
              <p className="text-xs text-zinc-500">{card.content}</p>
              <div className="mt-3 px-4 py-2 rounded-full border-1 border-zinc-300 w-max">
                <i className="fas fa-angle-right text-zinc-500"></i>
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

export default Rankings;
