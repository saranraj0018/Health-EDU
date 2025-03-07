import React from 'react'

const Banner = () => {
  return (
    <>
    <section className="px-[6em]">
            <div className="search-hero-bg py-28 rounded-[30px]">
                <h2 className="text-center text-[2.5em] font-manrope font-bold text-primary">
                    Find Your Dream College
                </h2>
                <p className="text-center text-md font-manrope mt-2 text-myfont font-medium">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/> incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="mt-8 mx-[12em]">
                    <form action="" className="grid grid-cols-12 gap-3">
                        <div className="col-span-12 md:col-span-7">
                            <select name="" id="" className='text-white w-full p-2 border-white border-1 rounded-full bg-[#ffffff2e] backdrop-blur-sm'>
                            <option value="Select your Study Goa">
                                Select your Study Goa
                            </option>
                            </select>
                        </div>
                        <div className="col-span-12 md:col-span-4">
                            <select name="" id="" className='text-white w-full p-2 border-white border-1 rounded-full bg-[#ffffff2e] backdrop-blur-sm'>
                            <option value="Select your Study Goa">
                                Select Location
                            </option>
                            </select>
                        </div>
                        <div className="col-span-12 md:col-span-1">
                            <button type="submit" className="text-blue-950 px-3 py-2 rounded-[300px] bg-white text-md">
                            <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
      
    </>
  )
}

export default Banner
