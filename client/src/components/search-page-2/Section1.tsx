import Tdi from '../../components/search-page-2/Tdi';
import LearnCard from '../../components/search-page-2/LearnCard';
import Learnicon1 from '../../assets/search-page-2/pharmacy-icon.png';
import PharmacyCareer1 from '../../assets/search-page-2/pharmacy-career-1.png'
import PharmacyCareer2 from '../../assets/search-page-2/pharmacy-career-2.png'
import PharmacyCareer3 from '../../assets/search-page-2/pharmacy-career-3.png'
import PharmacyCareer4 from '../../assets/search-page-2/pharmacy-career-4.png'
import PcIcon_1 from '../../assets/search-page-2/PcIcon1.png';
import PcIcon_2 from '../../assets/search-page-2/PcIcon2.png';
import PcIcon_3 from '../../assets/search-page-2/PcIcon3.png';
import PcIcon_4 from '../../assets/search-page-2/PcIcon4.png';
import PcIcon_5 from '../../assets/search-page-2/PcIcon5.png';
import '../../assets/css/style.css';


const Section1 = () => {
  return (
    <>
      <Tdi Title="B.PHARM (Bachelor of Pharmacy)" Description="B.Pharm is a professional degree program that focuses on the science and technology of preparing and dispensing medications. It equips students with knowledge of drug formulations, therapeutic uses, and the regulatory framework of the pharmaceutical industry. This course blends science and healthcare, aiming to improve patient care and health outcomes." />
                        <hr className="text-[#7a89ff]" />
                        <div className="my-8 space-y-4">
                            <h2 className="text-primary text-center font-semibold font-manrope text-2xl">
                                What you'll Learn
                            </h2>
                            <div className="grid grid-cols-12 gap-3">
                                <div className="col-span-12 md:col-span-4">
                                    <LearnCard image={Learnicon1} title="Pharmaceutical Chemistry" description="Understand the composition, structure, and properties of drugs." />
                                </div>
                                <div className="col-span-12 md:col-span-4">
                                    <LearnCard image={Learnicon1} title="Pharmacology and Toxicology" description="Understand the composition, structure, and properties of drugs." />
                                </div>
                                <div className="col-span-12 md:col-span-4">
                                    <LearnCard image={Learnicon1} title="Formulation and Development" description="Understand the composition, structure, and properties of drugs." />
                                </div>
                                <div className="col-span-12 md:col-span-4">
                                    <LearnCard image={Learnicon1} title="Clinical Pharmacy Practices" description="Understand the composition, structure, and properties of drugs." />
                                </div>
                                <div className="col-span-12 md:col-span-4">
                                    <LearnCard image={Learnicon1} title="Pharmaceutical Technology" description="Understand the composition, structure, and properties of drugs." />
                                </div>
                                <div className="col-span-12 md:col-span-4 adm-opn rounded-3xl p-4 space-y-2">
                                    <h2 className="bg-orange-400 w-max p-1 font-medium text-sm">
                                        2025 - 2026
                                    </h2>
                                    <h3 className="text-white font-manrope text-3xl">
                                        Admission Open
                                    </h3>
                                    <button className="bg-[#25BDE2] text-white py-1 px-2 rounded-full">
                                        APPLY NOW
                                    </button>
                                </div>
                            </div>
                        </div>
                        <hr className="text-[#7a89ff]" />
                        <div className="space-y-3">
                            <h2 className="text-primary text-center font-semibold font-manrope text-1xl">
                                Career Opportunities
                            </h2>
                            <h3 className="text-primary text-center font-semibold font-manrope text-2xl">
                                Exciting Career Paths in the Pharmaceutical Industry
                            </h3>
                            <div className="flex justify-center gap-2">
                                <img src={PharmacyCareer1} alt="" />
                                <img src={PharmacyCareer2} alt="" />
                                <img src={PharmacyCareer3} alt="" />
                                <img src={PharmacyCareer4} alt="" />
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gap-3">
                            <div className="col-span-12 md:col-span-6 space-y-8">
                                <div className="flex space-x-3">
                                    <img src={PcIcon_1} alt="" className="w-[70px] h-min" />
                                    <div>
                                        <h4 className="text-primary font-manrope font-bold text-lg">
                                            Pharmacist
                                        </h4>
                                        <p className="text-[14px]">
                                            Work in hospitals or retail pharmacies to
                                            dispense medications and counsel patients.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex space-x-3">
                                    <img src={PcIcon_2} alt="" className="w-[70px] h-min" />
                                    <div>
                                        <h4 className="text-primary font-manrope font-bold text-lg">
                                            Pharmacist
                                        </h4>
                                        <p className="text-[14px]">
                                            Work in hospitals or retail pharmacies to
                                            dispense medications and counsel patients.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex space-x-3">
                                    <img src={PcIcon_3} alt="" className="w-[70px] h-min" />
                                    <div>
                                        <h4 className="text-primary font-manrope font-bold text-lg">
                                            Pharmacist
                                        </h4>
                                        <p className="text-[14px]">
                                            Work in hospitals or retail pharmacies to
                                            dispense medications and counsel patients.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 space-y-8">
                                <div className="flex space-x-3">
                                    <img src={PcIcon_4} alt="" className="w-[70px] h-min" />
                                    <div>
                                        <h4 className="text-primary font-manrope font-bold text-lg">
                                            Pharmacist
                                        </h4>
                                        <p className="text-[14px]">
                                            Work in hospitals or retail pharmacies to
                                            dispense medications and counsel patients.
                                        </p>
                                    </div>
                                </div><div className="flex space-x-3">
                                    <img src={PcIcon_5} alt="" className="w-[70px] h-min" />
                                    <div>
                                        <h4 className="text-primary font-manrope font-bold text-lg">
                                            Pharmacist
                                        </h4>
                                        <p className="text-[14px]">
                                            Work in hospitals or retail pharmacies to
                                            dispense medications and counsel patients.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
    </>
  )
}

export default Section1
