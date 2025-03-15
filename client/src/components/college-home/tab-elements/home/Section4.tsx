import Slider from "./Slider";
const Section4 = () => {
  return (
    <>
    <section className="my-8 px-[1em] lg:px-[8em] xl:px-[8em] 2xl:px-[10em]">

        <div className="bg-[#f4f4f7] rounded-3xl p-8 space-y-3">
            <h2 className="text-primary font-manrope text-2xl font-semibold text-center">
                Owned & Affiliated Hospitals
            </h2>
            <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br></br>do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="my-x-scroller flex overflow-x-auto space-x-4 my-7 scrollbar-hide snap-x snap-mandatory pb-4">
                <div className="snap-start shrink-0">
                    <Slider/>
                </div>
                <div className="snap-start shrink-0">
                    <Slider/>
                </div>
                <div className="snap-start shrink-0">
                    <Slider/>
                </div>
                <div className="snap-start shrink-0">
                    <Slider/>
                </div>
                <div className="snap-start shrink-0">
                    <Slider/>
                </div>
            </div>
        </div>

      </section>
      
    </>
  )
}

export default Section4
