import Hero from "../components/college-home/Hero";
import Section1 from "../components/college-home/Section1";
import Tabs from "../components/college-home/Tabs";
import FooterForm from "../components/general/FooterForm";



const CollegeHome = () => {
  return (
    <>
      <Hero Rating="4.8" CollegeName="Abirami College of Pharmacy"/>
      <Section1
        heading="About Abirami College of Pharmacy" 
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        Afu="AKNU"
        Itype="Private"
        Fac="430"
        AreaSq="467290" 
        EstYr="1985" 
        AreaAcre="150" 
        Acrd="NAAC" 
        Web="college.edu.in"/>
      <Tabs />
      <FooterForm />
    </>
  )
}

export default CollegeHome
