import { useState } from "react";
import Home from "./tab-elements/home/Home";
import CoursesFees from "./tab-elements/courses-fees/CoursesFees";
import Admission from "./tab-elements/admission/Admission";
const Tabs = () => {
    const [activeTab, setActiveTab] = useState("Home"); // Default active tab

    // Function to handle tab change
    const handleTabChange = (tabName: string) => {
        setActiveTab(tabName);
    };

    return (
        <>
        <section className="mt-5 container px-[8em]">
            {/* Tab Buttons */}
            <div className="flex flex-col md:flex-row my-3 space-x-2 w-full text-center justify-center">
                {[
                    "Home", "Courses & Fees", "Admission", "Scholarship", "Placement", "Campus", "Gallery", "Reviews"].map(
                    (tab) => (
                        <button
                            key={tab}
                            onClick={() => handleTabChange(tab)}
                            className={`text-3xl hover:bg-primary hover:text-white py-2 px-4 bg-[#F4F4F7] font-manrope rounded-full font-medium transition ${activeTab === tab ? "bg-primary text-white" : "text-[#101010]"
                                } text-sm`}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    )
                )}
            </div>
        </section>
        <hr/>
        <section className="mb-5">
            {/* Tab Content */}
            <div className="mt-5">

                {activeTab === "Home" && (
                    <Home />
                )}
                {activeTab === "Courses & Fees" && (
                    <CoursesFees/>
                )}
                {activeTab === "Admission" && (
                    <Admission/>
                )}
                {activeTab === "Scholarship" && (
                    <p className="text-gray-600">Learn about the admission Scholarship.</p>
                )}
                {activeTab === "Placement" && (
                    <p className="text-gray-600">Compare colleges side by Placement.</p>
                )}
                {activeTab === "Campus" && (
                    <p className="text-gray-600">Compare colleges side by Campus.</p>
                )}
                {activeTab === "Gallery" && (
                    <p className="text-gray-600">Compare colleges side by gallery.</p>
                )}
                {activeTab === "Reviews" && (
                    <p className="text-gray-600">Compare colleges side by Reviews.</p>
                )}
            </div>
        </section>
        </>
    );
};

export default Tabs;
