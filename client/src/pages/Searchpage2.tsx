import Banner from '../components/search-page/Banner';
import Section1 from '../components/search-page-2/Section1';
import Section2 from '../components/search-page-2/Section2';
import FooterForm from '../components/general/FooterForm';


const SearchPage2 = () => {
    return (
        <>
            <div className="mt-4">
                <Banner />
            </div>
            <div className="px-[5em] my-8">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-9 space-y-10">
                        <Section1 />
                    </div>
                    <div className="col-span-12 md:col-span-3 space-y-4">
                        <Section2 />
                    </div>
                </div>
            </div>
            <FooterForm />
        </>
    )
}

export default SearchPage2;
