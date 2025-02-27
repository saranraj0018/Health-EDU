import React, { useRef, useState, useEffect } from "react";

const videos = [
  "https://www.youtube.com/embed/VIDEO_ID_1",
  "https://www.youtube.com/embed/VIDEO_ID_2",
  "https://www.youtube.com/embed/VIDEO_ID_3",
  "https://www.youtube.com/embed/VIDEO_ID_4",
  "https://www.youtube.com/embed/VIDEO_ID_5",
  "https://www.youtube.com/embed/VIDEO_ID_6",
];

const Section6 = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(2); // Default 2 videos per slide

  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1); // 1 video per slide for small screens
      } else {
        setItemsPerSlide(2); // 2 videos per slide for medium+ screens
      }
    };

    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const totalSlides = Math.ceil(videos.length / itemsPerSlide);

  const slide = (direction: string) => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth;
      if (direction === "next" && currentSlide < totalSlides - 1) {
        sliderRef.current.scrollLeft += scrollAmount;
        setCurrentSlide(currentSlide + 1);
      } else if (direction === "prev" && currentSlide > 0) {
        sliderRef.current.scrollLeft -= scrollAmount;
        setCurrentSlide(currentSlide - 1);
      }
    }
  };

  return (
    <>
      <section className="bg-[#d0d9ff] py-12 pb-24 mt-16">
        <div className="mx-4 md:mx-20">
          <h2 className="text-md md:text-3xl text-primary text-center font-manrope font-medium mb-6">
            Top Colleges Recommended For You
          </h2>
        </div>
      </section>
      <section className=" px-[8em] xl:px-[8em] 2xl:px-[10em] mt-[-100px] my-16">
        {/* Slider Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-primary py-2 px-4 rounded-full shadow-lg font-bold z-10"
            onClick={() => slide("prev")}
          >
            &#10094;
          </button>

          {/* Video Slider */}
          <div ref={sliderRef} className="flex overflow-hidden scroll-smooth">
            {videos.map((video, index) => (
              <div
                key={index}
                className="flex-none px-2 transition-transform duration-300 w-full sm:w-full md:w-1/2"
              >
                <iframe
                  className="w-full h-[220px] md:h-[280px] rounded-3xl shadow-lg"
                  src={video}
                  title={`YouTube video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-primary py-2 px-4 rounded-full shadow-lg font-bold z-10"
            onClick={() => slide("next")}
          >
            &#10095;
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-primary" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Section6;
