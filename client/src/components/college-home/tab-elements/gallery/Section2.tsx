import Infra1 from "../../../../assets/college-home/tabs/gallery//Infra1.png";
import Infra2 from "../../../../assets/college-home/tabs/gallery//Infra2.png";


const Infrastructure = (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M2.98047 22.5202H23.0221M6.47747 3.47949H13.9936C14.7909 3.47949 15.5556 3.79622 16.1194 4.36C16.6832 4.92378 16.9999 5.68844 16.9999 6.48574V22.5191H3.47122V6.48574C3.47122 5.68844 3.78795 4.92378 4.35173 4.36C4.91551 3.79622 5.68016 3.47949 6.47747 3.47949Z" stroke="#02054D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M7.22852 7.48877H13.241M7.22852 11.4971H13.241M16.998 9.99344H19.0022C19.3972 9.99315 19.7883 10.0707 20.1533 10.2217C20.5183 10.3726 20.8499 10.594 21.1293 10.8732C21.4087 11.1524 21.6303 11.4839 21.7816 11.8487C21.9328 12.2136 22.0106 12.6047 22.0106 12.9997V22.52M9.24243 15.5054H11.2466C11.6452 15.5057 12.0275 15.6641 12.3095 15.9457C12.5916 16.2274 12.7505 16.6094 12.7513 17.008V22.52H7.73985V17.008C7.73985 16.6095 7.89816 16.2273 8.17995 15.9455C8.46173 15.6637 8.84392 15.5054 9.24243 15.5054Z" stroke="#02054D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
);

const Section2 = () => {
    return (
        <>
            <section className="px-[1em] lg:px-[8em] xl:px-[8em] 2xl:px-[10em] space-y-2 bg-[#F1F4FF] py-5">
                <div className="flex space-x-2 justify-center">
                    <div className="rounded-full p-2 bg-white">
                        {Infrastructure}
                    </div>
                    <div className="text-primary font-manrope font-semibold text-lg my-auto">
                        Infrastructure
                    </div>
                </div>
                <div className="my-x-scroller flex overflow-x-auto space-x-4 my-7 scrollbar-hide snap-x snap-mandatory pb-4">
                    <div className="snap-start shrink-0">
                        <img src={Infra1} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={Infra2} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={Infra1} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={Infra2} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={Infra1} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={Infra2} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={Infra1} alt="" />
                    </div>
                    <div className="snap-start shrink-0">
                        <img src={Infra2} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section2
