
import Img from "../../assets/img74.png";
const Section4 = () => {
  return (
    <>
      <section className="bg-[#d0d9ff] pt-12 my-16 px-[8em]">
        <div className="mx-auto">
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-12 md:col-span-5 space-y-5 my-auto">
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
            <div className="col-span-12 md:col-span-7 flex align-bottom">
              <img src={Img} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section4;
