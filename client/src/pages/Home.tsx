import Hero from "../components/home/Hero";

import Section6 from "../components/home/Section6";
import Section5 from "../components/home/Section5";
import RC from "../assets/Groupsss.png";
import Icon from "../assets/Group 35246.png";
import Icon2 from "../assets/Group 3524663.png";
import Icon3 from "../assets/Group 35247.png";
import Icon4 from "../assets/Group 35248.png";
import Card from "../components/home/Card";
import GirlPng from "../assets/image 43.png";
import GirlPic from "../assets/asqaz.png";
import Img from "../assets/img74.png";
import Icon1 from "../assets/Group 35584.png";
import Icon_2 from "../assets/Group 35584452.png";
import Scape from "../assets/360.png";

const Home = () => {
  return (
    <>
      <Hero />

      <section className="px-[1em] lg:px-[8em] xl:px-[8em] 2xl:px-[10em] h-fit lg:mt-[3em] overflow-hidden">
        <div className="my-8">
          <h2 className="text-center text-md md:text-[1.5em] font-manrope font-medium text-primary">
            Confused about choosing the right college?
          </h2>
          <p className="text-center text-sm font-manrope mt-2 text-myfont font-medium">
            We're here to guide you every step of the way on your college
            journey.
          </p>
        </div>

        <div className="gap-5 p-3 lg:h-[67vh] xl:h-[50vh] flex flex-col md:flex-row md:justify-center items-center">
          <div className="flex flex-col justify-between xl:justify-start h-full space-y-8">
            <Card
              icon={Icon}
              heading="Find"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
              ipsum dolor sit amet, consectetur adipiscing."
            />

            <Card
              icon={Icon3}
              heading="Analyze"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
              ipsum dolor sit amet, consectetur adipiscing."
            />
          </div>

          <div className="w-1/2">
            <img src={RC} alt="" className="mx-auto" />
          </div>

          <div className="flex flex-col justify-between xl:justify-start h-full space-y-8">
            <Card
              icon={Icon4}
              heading="Compare"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
              ipsum dolor sit amet, consectetur adipiscing."
            />

            <Card
              icon={Icon2}
              heading="Apply"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
              ipsum dolor sit amet, consectetur adipiscing."
            />
          </div>
        </div>
        <hr className="text-[#7a89ff] my-16" />
      </section>

      <div className="px-[1em] lg:px-[8em] xl:px-[8em] 2xl:px-[10em] mx-auto my-5">
        <div className="text-center text-lg md:text-[1.5em] font-manrope font-medium text-primary">
          Discover New Perks
        </div>

        <div className="mt-7 grid grid-cols-10 gap-4 px-3 md:px-7">
          <div className="col-span-12 lg:col-span-3 bg-[#e6ebff] px-2 pt-4 rounded-3xl md:flex md:flex-col justify-between">
            <div>
              <h2 className="text-[25px] mb-4 text-center text-[#A5B1E3] font-bold font-manrope">
                International Exposure
              </h2>

              <div className="flex my-2 p-1 md:p-4">
                <i className="text-xs">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="me-1 mt-1"
                  >
                    <path
                      d="M8 0L10.1607 5.83927L16 8L10.1607 10.1607L8 16L5.83927 10.1607L0 8L5.83927 5.83927L8 0Z"
                      fill="#252525"
                    />
                  </svg>
                </i>

                <p className="text-justify text-sm px-2">
                  Healthedu provides opportunities for students to engage in
                  global programs, exchange initiatives, and experiences to
                  broaden their horizons.
                </p>
              </div>
            </div>
            <img src={GirlPng} alt="" className="mx-auto" />
          </div>

          <div className="col-span-12 lg:col-span-7">
            <div className="grid grid-cols-10 gap-3">
              <div className="col-span-12 md:col-span-6 bg-[#edfcfe] rounded-2xl p-3">
                <div className="my-2 w-fit bg-white p-1 rounded-full flex justify-start items-center px-2 gap-2">
                  <img src={Icon1} alt="" />
                  <h1 className="text-justify font-medium text-gray-700 my-auto me-2">
                    Healthedu Scholarships
                  </h1>
                </div>
                <p className="text-justify text-sm p-3">
                  Healthedu aims to empower students pursuing careers in
                  health-related fields by offering scholarships. These
                  scholarships provide essential financial support, enabling
                  students to continue their studies and achieve their
                  professional goals.
                </p>
                <div className="bg-white rounded-full p-2 w-max float-right my-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <path
                      d="M7.87158 17.0405L17.8716 7.04053"
                      stroke="#252525"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.87158 7.04053H17.8716V17.0405"
                      stroke="#252525"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="col-span-12 md:col-span-4 my-auto md:my-0">
                <img src={GirlPic} alt="" className="mx-auto" />
              </div>
            </div>

            <div className="grid grid-cols-10 gap-3 mt-3">
              <div className="col-span-12 md:col-span-4">
                <img src={Scape} alt="" className="mx-auto" />
              </div>
              <div className="col-span-12 md:col-span-6 bg-[#f6f6f6] p-3 rounded-3xl">
                <div className="md:flex my-2 w-max bg-white p-1 rounded-full">
                  <div>
                    <img src={Icon_2} alt="" />
                  </div>
                  <div className="text-justify my-auto ms-3">Placements</div>
                </div>
                <p className="text-justify text-sm px-2">
                  Healthedu provides comprehensive career placement assistance,
                  connecting students with internships and job opportunities.
                  These initiatives are designed to equip students with
                  practical experience and help them successfully launch their
                  professional careers.
                </p>
                <div className="bg-white rounded-full p-2 w-max float-right my-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <path
                      d="M7.87158 17.0405L17.8716 7.04053"
                      stroke="#252525"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.87158 7.04053H17.8716V17.0405"
                      stroke="#252525"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-[#d0d9ff] pt-12 my-16 px-[1em] lg:px-[8em] xl:px-[8em] 2xl:px-[10em]">
        <div className="mx-auto">
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-12 lg:col-span-5 xl:col-span-6 2xl:col-span-6 space-y-5 my-auto">
              <h2 className="text-lg md:text-3xl text-primary font-manrope font-medium">
                Unsure about the right medical career path?
              </h2>
              <p className="text-justify text-sm mb-5">
                Find clarity with Career Compass, our personalized
                recommendation tool tailored for medical education. Explore your
                skills, personality, and interests to receive expert guidance
                and advice for a successful healthcare career.
              </p>
              <button className="rounded-full text-primary p-3 font-manrope font-semibold bg-white text-[13px]">
                Find Your Career Match
              </button>
            </div>
            <div className="col-span-12 lg:col-span-7 xl:col-span-6 2xl:col-span-6 flex align-bottom">
              <img src={Img} alt="" className="mx-auto"/>
            </div>
          </div>
        </div>
      </section>
      <Section5 />
      <Section6 />
    </>
  );
};

export default Home;
