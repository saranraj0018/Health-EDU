import React from 'react';

const Search = () => {
  return (
    <>
      <div className="mt-8 mb-5">
        <form action="" className="grid grid-cols-12 gap-3">
          <div className="col-span-12 md:col-span-7">
            <select name="" id="" className='text-white w-full p-2 border-[#9EA2A6] border-1 rounded-full bg-[#ffffff2e] backdrop-blur-sm'>
              <option value="Select your Study Goa">
                Select your Study Goa
              </option>
            </select>
          </div>
          <div className="col-span-12 md:col-span-4">
            <select name="" id="" className='text-white w-full p-2 border-[#9EA2A6] border-1 rounded-full bg-[#ffffff2e] backdrop-blur-sm'>
              <option value="Select your Study Goa">
                Select Location
              </option>
            </select>
          </div>
          <div className="col-span-12 md:col-span-1">
            <button type="submit" className="text-blue-950 px-3 py-2 border rounded-[300px] bg-white text-md">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Search;