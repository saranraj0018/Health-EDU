<<<<<<< HEAD
import React from 'react'
=======

import RegisterPopup from './RegisterPopup'
>>>>>>> adeb0ef2f5ada2e997c219fa846a0dc64da917a5
const FooterForm = () => {
  return (
    <>
        <section className="py-8 bg-[#D0D9FF] px-[6em] space-y-3">
            <h2 className="text-center font-manrope font-semibold text-primary text-3xl">
                Expert Advice You Can Trust.
            </h2>
            <p className="text-center font-manrope font-medium text-primary text-sm">
                Connect with Our Specialist Counselors Today!
            </p>
            <form action="" className="mt-6">
                <div className="grid grid-cols-10 gap-3">
                    <div className="col-span-12 md:col-span-3">
                        <select className="bg-white w-[100%] rounded-md p-2">
                            <option value="Preffered Location">Preffered Location</option>
                        </select>

                    </div>
                    <div className="col-span-12 md:col-span-3">
                        <select className="bg-white w-[100%] rounded-md p-2">
                            <option value="Select Fee Range">Select Fee Range</option>
                        </select>
                    </div>
                    <div className="col-span-12 md:col-span-3">
                        <select className="bg-white w-[100%] rounded-md p-2">
                            <option value="Select Degree">Select Degree</option>
                        </select>
                    </div>
                    <div className="col-span-12 md:col-span-1">
                        <input type="submit" className="bg-primary text-white rounded-md p-2 w-[100%]" value="Submit"/>
                    </div>
                </div>

            </form>
        </section>
    </>
  )
}

export default FooterForm
