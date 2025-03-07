// **********
// Tdi.tsx - Title, Description and Image Component
// **********

import image1 from '../../assets/search-page-2/pharmacy-img-1.png';
import image2 from '../../assets/search-page-2/pharmacy-img-2.png';
import image3 from '../../assets/search-page-2/pharmacy-img-3.png';

const Tdi = ({Title, Description}: { Title: string, Description: string }) => {
  return (
    <>
    <div className="space-y-5">
        <h2 className="text-primary text-center font-semibold font-manrope text-2xl">
            {Title}
        </h2>
        <p className="text-center text-sm">
            {Description}
        </p>
        <div className="grid grid-cols-12 gap-3">
            <div className="col-span-12 md:col-span-3">
                <img src={image1} />
            </div>
            <div className="col-span-12 md:col-span-3">
                <img src={image2} />
            </div>
            <div className="col-span-12 md:col-span-3">
                <img src={image3} />
            </div>
            <div className="col-span-12 md:col-span-3">
                <img src={image3} />
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Tdi
