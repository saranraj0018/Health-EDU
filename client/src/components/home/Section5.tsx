import React, { useState } from "react";
import Rankings from "./tabs/Rankings";
import Courses from "./tabs/Courses";
import New from "../../assets/new-icon-gif-animation-14 1.png";

const Section5 = () => {
  const [activeTab, setActiveTab] = useState("ranking"); // Default active tab

  // Function to handle tab change
  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <section className="my-5  px-[8em] xl:px-[8em] 2xl:px-[10em]">
        <h2 className="text-lg md:text-3xl text-primary font-manrope font-medium mb-6">
          Discover Colleges & Courses Hand Picked For You
        </h2>
        <div className="md:flex justify-between">
          <div className="flex flex-col md:flex-row my-3 space-x-2 p-2 bg-[#f6f6f6] w-full md:w-max rounded-3xl md:rounded-full">
            {/* Tab Buttons */}
            <button
              onClick={() => handleTabChange("ranking")}
              className={`hover:bg-primary hover:text-white focus:bg-primary focus:text-white py-1 px-3 rounded-full font-manrope font-medium duration-450 ease-out ${
                activeTab === "ranking" ? "bg-primary text-white" : ""
              } text-sm`}
            >
              Ranking
            </button>
            <button
              onClick={() => handleTabChange("colleges")}
              className={`hover:bg-primary hover:text-white focus:bg-primary focus:text-white py-1 px-3 rounded-full font-manrope font-medium duration-450 ease-out ${
                activeTab === "colleges" ? "bg-primary text-white" : ""
              } text-sm`}
            >
              Colleges
            </button>
            <button
              onClick={() => handleTabChange("courses")}
              className={`hover:bg-primary hover:text-white focus:bg-primary focus:text-white py-1 px-3 rounded-full font-manrope font-medium duration-450 ease-out ${
                activeTab === "courses" ? "bg-primary text-white" : ""
              } text-sm`}
            >
              Courses
            </button>
            <button
              onClick={() => handleTabChange("applications")}
              className={`hover:bg-primary hover:text-white focus:bg-primary focus:text-white py-1 px-3 rounded-full font-manrope font-medium duration-450 ease-out ${
                activeTab === "applications" ? "bg-primary text-white" : ""
              } text-sm`}
            >
              Applications
            </button>
            <button
              onClick={() => handleTabChange("compare")}
              className={`hover:bg-primary hover:text-white focus:bg-primary focus:text-white py-1 px-3 rounded-full font-manrope font-medium duration-450 ease-out ${
                activeTab === "compare" ? "bg-primary text-white" : ""
              } text-sm`}
            >
              Compare Colleges
            </button>
          </div>
          <div className="flex">
            <img src={New} alt="" className="w-[100px]" />
            <div className="text-primary font-manrope font-medium w-[150px] my-auto">
              Know Your College
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-5">
          {activeTab === "ranking" && <Rankings />}
          {activeTab === "colleges" && <Courses />}
          {activeTab === "courses" && <Courses />}
          {activeTab === "applications" && <Rankings />}
          {activeTab === "compare" && <Rankings />}
        </div>
      </section>
    </>
  );
};

export default Section5;
