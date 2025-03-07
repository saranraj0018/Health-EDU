import Filters from "./Filters";
import Card from "./Card";

const CoursesFees = () => {
  return (
    <>
      <h2 className="text-center text-primary font-manrope font-semibold text-2xl">
        Courses & Fees
      </h2>
      <Filters />

      <section className="px-[6em]">
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-12 md:col-span-3 border-1 border-[#E0E0E0] rounded-2xl">
            <Card CourseName="B.Pharma" YearlyFees="39000 INR" TotalFees="156000/-" Duration="4 Years" Eligiblity="10+2 with 50% + NEET" />
          </div>
          <div className="col-span-12 md:col-span-3 border-1 border-[#E0E0E0] rounded-2xl">
            <Card CourseName="B.Pharma" YearlyFees="39000 INR" TotalFees="156000/-" Duration="4 Years" Eligiblity="10+2 with 50% + NEET" />
          </div>
          <div className="col-span-12 md:col-span-3 border-1 border-[#E0E0E0] rounded-2xl">
            <Card CourseName="B.Pharma" YearlyFees="39000 INR" TotalFees="156000/-" Duration="4 Years" Eligiblity="10+2 with 50% + NEET" />
          </div>
          <div className="col-span-12 md:col-span-3 border-1 border-[#E0E0E0] rounded-2xl">
            <Card CourseName="B.Pharma" YearlyFees="39000 INR" TotalFees="156000/-" Duration="4 Years" Eligiblity="10+2 with 50% + NEET" />
          </div>
          <div className="col-span-12 md:col-span-3 border-1 border-[#E0E0E0] rounded-2xl">
            <Card CourseName="B.Pharma" YearlyFees="39000 INR" TotalFees="156000/-" Duration="4 Years" Eligiblity="10+2 with 50% + NEET" />
          </div>
          <div className="col-span-12 md:col-span-3 border-1 border-[#E0E0E0] rounded-2xl">
            <Card CourseName="B.Pharma" YearlyFees="39000 INR" TotalFees="156000/-" Duration="4 Years" Eligiblity="10+2 with 50% + NEET" />
          </div>
          <div className="col-span-12 md:col-span-3 border-1 border-[#E0E0E0] rounded-2xl">
            <Card CourseName="B.Pharma" YearlyFees="39000 INR" TotalFees="156000/-" Duration="4 Years" Eligiblity="10+2 with 50% + NEET" />
          </div>
          <div className="col-span-12 md:col-span-3 border-1 border-[#E0E0E0] rounded-2xl">
            <Card CourseName="B.Pharma" YearlyFees="39000 INR" TotalFees="156000/-" Duration="4 Years" Eligiblity="10+2 with 50% + NEET" />
          </div>
        </div>
        {/* PAGINATION BUTTON FIELDS */}
        <div className="mt-8 flex justify-center space-x-2">
          <button className="bg-white hover:bg-primary text-primary hover:text-white px-3 py-1 shadow-lg rounded-md font-medium">
            1
          </button>
          <button className="bg-white hover:bg-primary text-primary hover:text-white px-3 py-1 shadow-lg rounded-md font-medium">
            2
          </button>
          <button className="bg-white hover:bg-primary text-primary hover:text-white px-3 py-1 shadow-lg rounded-md font-medium">
            3
          </button>
          <button className="bg-white hover:bg-primary text-primary hover:text-white px-3 py-1 shadow-lg rounded-md font-medium">
            ...
          </button>
          <button className="bg-white hover:bg-primary hover:text-white px-3 py-1 shadow-lg rounded-md font-medium flex">
            Next
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" className="ms-1 my-auto">
              <path d="M3.75 9H14.25" stroke="#121212" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M9 3.75L14.25 9L9 14.25" stroke="#121212" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
        {/* PAGINATION BUTTON FIELDS */}

      </section>


    </>
  )
}

export default CoursesFees
