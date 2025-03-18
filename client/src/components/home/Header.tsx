import Logo from "../../assets/hedu-Logo.png";
import { Link } from "react-router-dom";
import RegisterPopup from '../general/RegisterPopup'
import { useState } from "react";



const Header = () => {

  const [sideBar, setSideBar] = useState(true);


  return (
    
    <>
    <nav className="flex lg:hidden bg-white px-[2em] justify-end items-start flex-col py-4 h-fit transition-all ease-in-out duration-100">

      <div className="flex justify-between items-center w-full">

        <div className="flex-1">
          <img src={Logo} alt="Logo" className="w-[100px]" />
        </div>
   

        <button onClick={() => {
          setSideBar((sidebar) => !sidebar)
        }} className="text-2xl cursor-pointer">
          <i className="fa fa-bars"></i>
        </button>
      </div>


      {sideBar && (
          <div className="lg:hidden flex flex-col space-y-4 py-4 mt-5 w-full transition-all">
            <Link className="text-gray-700 hover:text-black text-left" to="/">Home</Link>
            <Link className="text-gray-700 hover:text-black text-left" to="/college-home">Colleges</Link>
            <Link className="text-gray-700 hover:text-black text-left" to="/courses">Courses</Link>
            <Link className="text-gray-700 hover:text-black text-left" to="/counselling">Counselling</Link>
            <Link className="text-gray-700 hover:text-black text-left" to="/scholarships">Scholarships</Link>
            <Link className="text-gray-700 hover:text-black text-left" to="/contact">Contact Us</Link>
            <Link className="text-black font-semibold text-left" to="/login">Login</Link>
            <div className="text-right w-full">
              <RegisterPopup />
            </div>
          </div>
        )}
      
    </nav>


    <nav className="hidden lg:flex bg-white px-[8em] justify-between items-center py-4 h-fit">
      <div className="w-[110px]">
        <img src={Logo} alt="Logo" className="" />
      </div>

      <ul className="flex text-[.9em] text-gray-600 font-semibold font-manrope gap-[38px]">
        <li className="active border-b-3 border-black pb-0">
          <Link to="/">Home</Link>
        </li>

        <li className="/college-home">
          <Link to="/college-home" className="pe-3" style={{ cursor: 'pointer' }}>
            <span className="pe-3">Colleges</span>
            <i className="fa fa-chevron-down font-medium"></i>
          </Link>
        </li>

        <li className="">
          <Link to="/" className="" style={{ cursor: 'pointer' }}>
            <span className="pe-3">Courses</span>
            <i className="fa fa-chevron-down"></i>
          </Link>
        </li>

        <li className="">
          <Link to="/" className="" style={{ cursor: 'pointer' }}>
            Counselling
          </Link>
        </li>

        <li className="">
          <Link to="/" className="" style={{ cursor: 'pointer' }}>
            Scholarships
          </Link>
        </li>

        <li className="">
          <Link to="/" className="" style={{ cursor: 'pointer' }}>
            Contact us
          </Link>
        </li>

        <li className="">
          <Link to="/" className="font-semibold text-black" style={{ cursor: 'pointer' }}>
            Login
          </Link>
        </li>

        <li className="">
          <RegisterPopup/>
        </li>
      </ul>
    </nav>
    </>
  );
};

export default Header;
