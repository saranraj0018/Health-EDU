import React from 'react'
import Banner from '../components/search-page/Banner';
import Filter from '../components/search-page/Filter';
import Cards from '../components/search-page/Cards';

const SearchPage = () => {
  return (
    <>
    <div className="bg-[#F4F4F7]">
        <Banner />
        <Filter />
        <Cards />
    </div>

    </>
  )
}

export default SearchPage
