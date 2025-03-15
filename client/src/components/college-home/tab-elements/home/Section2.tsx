import CourseCard from "../../../search-page-2/CourseCard"

const Section2 = () => {
  return (
    <>
      <section className="my-8 px-[1em] lg:px-[8em] xl:px-[8em] 2xl:px-[10em]">
        <div className="bg-[#f4f4f7] rounded-3xl p-5">
          <div className="flex justify-between">
            <h2 className="text-primary font-manrope text-lg font-semibold">
              Courses and Fees
            </h2>
            <a href="" className="flex font-semibold font-manrope my-auto text-primary">
              View All
              <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none" className="my-auto ms-2">
                <path d="M1 12.9999L7 6.99994L1 0.999939" stroke="#02054D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
          </div>
          <div className="my-x-scroller flex overflow-x-auto space-x-3 my-7 scrollbar-hide snap-x snap-mandatory ">
            <div className="snap-start shrink-0">
              <CourseCard YearlyFees="39000 INR" TotalFees="156000/-" Duration="4 Years" Eligiblity="10+2 with 50% + NEET" />
            </div>
            <div className="snap-start shrink-0">
              <CourseCard YearlyFees="39000 INR" TotalFees="156000/-" Duration="4 Years" Eligiblity="10+2 with 50% + NEET" />
            </div>
            <div className="snap-start shrink-0">
              <CourseCard YearlyFees="39000 INR" TotalFees="156000/-" Duration="4 Years" Eligiblity="10+2 with 50% + NEET" />
            </div>
            <div className="snap-start shrink-0">
              <CourseCard YearlyFees="39000 INR" TotalFees="156000/-" Duration="4 Years" Eligiblity="10+2 with 50% + NEET" />
            </div>
            <div className="snap-start shrink-0">
              <CourseCard YearlyFees="39000 INR" TotalFees="156000/-" Duration="4 Years" Eligiblity="10+2 with 50% + NEET" />
            </div>
            <div className="snap-start shrink-0">
              <CourseCard YearlyFees="39000 INR" TotalFees="156000/-" Duration="4 Years" Eligiblity="10+2 with 50% + NEET" />
            </div>
            <div className="snap-start shrink-0">
              <CourseCard YearlyFees="39000 INR" TotalFees="156000/-" Duration="4 Years" Eligiblity="10+2 with 50% + NEET" />
            </div>
            <div className="snap-start shrink-0">
              <CourseCard YearlyFees="39000 INR" TotalFees="156000/-" Duration="4 Years" Eligiblity="10+2 with 50% + NEET" />
            </div>
          </div>

        </div>

      </section>

    </>
  )
}

export default Section2
