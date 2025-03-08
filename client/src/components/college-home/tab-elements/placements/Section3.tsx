import { useState } from "react";
import Year2023 from "./tabs/Year2023";
const PrIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M11.6996 15.6C11.3548 15.6 11.0242 15.4631 10.7804 15.2193C10.5366 14.9755 10.3996 14.6448 10.3996 14.3V6.60793C8.47552 6.93909 6.7455 7.97956 5.55106 9.52394C4.35662 11.0683 3.78456 13.0044 3.94782 14.9499C4.11108 16.8955 4.99779 18.7091 6.4329 20.0328C7.86801 21.3565 9.74724 22.0942 11.6996 22.1C13.5431 22.1003 15.3271 21.4476 16.7352 20.2578C18.1433 19.0679 19.0845 17.4177 19.3917 15.6H11.6996ZM10.4035 5.29103C11.1146 5.18963 11.6996 5.78243 11.6996 6.50003V14.3H19.4996C20.2172 14.3 20.81 14.885 20.7086 15.5961C20.3755 17.8695 19.195 19.9327 17.4041 21.3719C15.6131 22.8112 13.3441 23.5199 11.0523 23.3558C8.76061 23.1918 6.61568 22.1672 5.04792 20.4876C3.48016 18.808 2.60556 16.5976 2.59961 14.3C2.59918 12.1108 3.38799 9.99481 4.82137 8.34009C6.25474 6.68536 8.23661 5.60283 10.4035 5.29103ZM14.2996 11.7V3.90003C16.3683 3.90003 18.3523 4.72181 19.815 6.18459C21.2778 7.64738 22.0996 9.63134 22.0996 11.7H14.2996ZM22.1802 13C22.8276 13 23.3853 12.5242 23.3983 11.8768L23.3996 11.7C23.3997 10.4901 23.1584 9.29228 22.69 8.17668C22.2216 7.06109 21.5354 6.0501 20.6716 5.20288C19.8078 4.35565 18.7837 3.68919 17.6592 3.24249C16.5348 2.79579 15.3325 2.57782 14.1228 2.60133C13.4754 2.61433 12.9996 3.17333 12.9996 3.81943V11.7C12.9996 12.0448 13.1366 12.3755 13.3804 12.6193C13.6242 12.8631 13.9548 13 14.2996 13H22.1802Z" fill="#02054D" />
    </svg>
);

const Section3 = () => {
    const [activeTab, setActiveTab] = useState("2023"); // Default active tab

    // Function to handle tab change
    const handleTabChange = (tabName: string) => {
        setActiveTab(tabName);
    };
    return (
        <>
            <section className="my-3 px-[8em]">
                <div className="flex space-x-2 justify-center">
                    <div className="rounded-full p-2 bg-[#F1F4FF]">
                        {PrIcon}
                    </div>
                    <div className="text-primary font-manrope font-semibold text-lg my-auto">
                        Placement Regards
                    </div>
                </div>
            </section>
            <section className="mt-5 container px-[8em]">
                {/* Tab Buttons */}
                <div className="flex flex-col md:flex-row my-3 space-x-2 w-full text-center justify-center">
                    {[
                        "2023", "2022", "2021"].map(
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
            <section className="mb-5">
                {/* Tab Content */}
                <div className="mt-5">

                    {activeTab === "2023" && (
                        <Year2023/>
                    )}
                    {activeTab === "2022" && (
                        <Year2023/>
                    )}
                    {activeTab === "2021" && (
                        <Year2023/>
                    )}
                </div>
            </section>




        </>
    )
}

export default Section3;
