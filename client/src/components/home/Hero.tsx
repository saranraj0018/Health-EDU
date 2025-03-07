
import "../../assets/css/style.css";
import Search from "./banner/Search";

const Hero = () => {
  return (
    <>
      <section className="hero-bg py-8 h-[80vh] flex justify-center items-center">
        <div className="px-[30px]">
          <div className="text-center text-white font-manrope text-md md:text-5xl font-medium">
            Your Gateway to
            <br />
            <span className="text-secondary">
              Allied Science Education Excellence
            </span>
          </div>
          <Search />
          <div className="my-3">
            <p className="text-white text-2xl text-center my-8 font-manrope font-medium">
              Explore Courses, Find Colleges, Apply Now
            </p>
            <form action="" className="grid grid-cols-12 gap-3">
              <div className="col-span-12 md:col-span-4">
                <select name="" id="" className='text-white w-full p-2 border-[#9EA2A6] border-1 rounded-[10px] bg-[#ffffff2e] backdrop-blur-sm'>
                  <option value="Select your Study Goa">
                    Preffered Location
                  </option>
                </select>
              </div>
              <div className="col-span-12 md:col-span-4">
                <select name="" id="" className='text-white w-full p-2 border-[#9EA2A6] border-1 rounded-[10px] bg-[#ffffff2e] backdrop-blur-sm'>
                  <option value="Select your Study Goa">
                    Select Fee Range
                  </option>
                </select>
              </div>
              <div className="col-span-12 md:col-span-4">
                <select name="" id="" className='text-white w-full p-2 border-[#9EA2A6] border-1 rounded-[10px] bg-[#ffffff2e] backdrop-blur-sm'>
                  <option value="Select your Study Goa">
                    Select Degree
                  </option>
                </select>
              </div>
              <div className="col-span-12 flex justify-center mt-5">
                <button type="submit" className='text-primary px-5 py-1 border-white border-1 rounded-[15px] bg-white font-semibold'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
