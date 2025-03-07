import React, { useRef, useState, useEffect } from "react";

const videos = [
  "https://www.youtube.com/embed/qJDDpm2TOvE",
  "https://www.youtube.com/embed/qJDDpm2TOvE",
  "https://www.youtube.com/embed/qJDDpm2TOvE",
  "https://www.youtube.com/embed/qJDDpm2TOvE",
  "https://www.youtube.com/embed/qJDDpm2TOvE",
  "https://www.youtube.com/embed/qJDDpm2TOvE",
];

const Section7 = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(2);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      setItemsPerSlide(window.innerWidth < 768 ? 1 : 2);
    };

    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const totalSlides = Math.ceil(videos.length / itemsPerSlide);

  const slide = (direction: "prev" | "next") => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth;
      if (direction === "next" && currentSlide < totalSlides - 1) {
        sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        setCurrentSlide((prev) => prev + 1);
      } else if (direction === "prev" && currentSlide > 0) {
        sliderRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        setCurrentSlide((prev) => prev - 1);
      }
    }
  };

  return (
    <>
      <section className="bg-[#d0d9ff] py-12 pb-24 mt-10">
        <div className="mx-4 md:mx-20">
          <h2 className="text-md md:text-3xl text-primary text-center font-manrope font-medium mb-6">
            Top Colleges Recommended For You
          </h2>
        </div>
      </section>
      
      <section className="container mx-auto px-[5em] mt-[-100px] m-16">
        <div className="relative">
          {/* Left Arrow */}
          <button
            className={`absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-primary py-2 px-4 rounded-full shadow-lg font-bold z-10 ${
              currentSlide === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => slide("prev")}
            disabled={currentSlide === 0}
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
            className={`absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-primary py-2 px-4 rounded-full shadow-lg font-bold z-10 ${
              currentSlide === totalSlides - 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => slide("next")}
            disabled={currentSlide === totalSlides - 1}
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

export default Section7;
