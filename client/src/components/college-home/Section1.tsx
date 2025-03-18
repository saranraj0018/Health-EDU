import Icon1 from '../../assets/college-home/icon-1.png';
import Icon2 from '../../assets/college-home/icon-2.png';
import Icon3 from '../../assets/college-home/icon-3.png';
import Icon4 from '../../assets/college-home/icon-4.png';
import Icon5 from '../../assets/college-home/icon-5.png';
import Icon6 from '../../assets/college-home/icon-6.png';
import Icon7 from '../../assets/college-home/icon-7.png';
import Icon8 from '../../assets/college-home/icon-8.png';




type Props = {
  heading: string; 
  description: string; 
  Afu: string; 
  Itype: string; 
  Fac: string; 
  AreaSq: string; 
  EstYr: string; 
  AreaAcre: string; 
  Acrd: string; 
  Web: string;
}





const Section1 = ({ heading, description, Afu, Itype, Fac, AreaSq, EstYr, AreaAcre, Acrd, Web }: Props) => {
  return (
    <>
      <section className="px-[1em] lg:px-[8em] xl:px-[8em] 2xl:px-[10em] my-8 space-y-4">
        <h2 className="text-primary text-center text-2xl lg:text-3xl font-manrope font-semibold">
          {heading}
        </h2>
        <p className="text-center text-primary">
          {description}
        </p>
      </section>
      <section className="px-[1em] lg:px-[8em] xl:px-[8em] 2xl:px-[10em] my-4">
        <div className="grid grid-cols-16 gap-4">
          <div className="col-span-8 md:col-span-4 lg:col-span-2 p-2 rounded-lg bg-[#f1f4ff] space-y-2">
            <img src={Icon1} alt="" />
            <p className="text-primary text-[13px] font-medium">
              Affiliate University <br />
              <span>{Afu}</span>
            </p>
          </div>
          <div className="col-span-8 md:col-span-4 lg:col-span-2 p-2 rounded-lg bg-[#f1f4ff] space-y-2">
            <img src={Icon2} alt="" />
            <p className="text-primary text-[13px] font-medium">
              Institution Type <br />
              <span>{Itype}</span>
            </p>
          </div>
          <div className="col-span-8 md:col-span-4 lg:col-span-2 p-2 rounded-lg bg-[#f1f4ff] space-y-2">
            <img src={Icon3} alt="" />
            <p className="text-primary text-[13px] font-medium">
              Total Faculty <br />
              <span>{Fac}</span>
            </p>
          </div>
          <div className="col-span-8 md:col-span-4 lg:col-span-2 p-2 rounded-lg bg-[#f1f4ff] space-y-2">
            <img src={Icon4} alt="" />
            <p className="text-primary text-[13px] font-medium">
              Area (Sq. M) <br />
              <span>{AreaSq}</span>
            </p>
          </div>
          <div className="col-span-8 md:col-span-4 lg:col-span-2 p-2 rounded-lg bg-[#f1f4ff] space-y-2">
            <img src={Icon5} alt="" />
            <p className="text-primary text-[13px] font-medium">
              Est. Year <br />
              <span>{EstYr}</span>
            </p>
          </div>
          <div className="col-span-8 md:col-span-4 lg:col-span-2 p-2 rounded-lg bg-[#f1f4ff] space-y-2">
            <img src={Icon6} alt="" />
            <p className="text-primary text-[13px] font-medium">
              Total Area (Acre) <br />
              <span>{AreaAcre}</span>
            </p>
          </div>
          <div className="col-span-8 md:col-span-4 lg:col-span-2 p-2 rounded-lg bg-[#f1f4ff] space-y-2">
            <img src={Icon7} alt="" />
            <p className="text-primary text-[13px] font-medium">
              Accredited by <br />
              <span>{Acrd}</span>
            </p>
          </div>
          <div className="col-span-8 md:col-span-4 lg:col-span-2 p-2 rounded-lg bg-[#f1f4ff] space-y-2">
            <img src={Icon8} alt="" />
            <p className="text-primary text-[13px] font-medium">
              Website <br />
              <span>{Web}</span>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Section1
