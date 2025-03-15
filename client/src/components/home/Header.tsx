import Logo from "../../assets/hedu-Logo.png";
import { Link } from "react-router-dom";
import RegisterPopup from '../general/RegisterPopup'


const Header = () => {
  return (
    
    // TODO: NEED TO FIX RESPONSIVE HERE - ALTER CLASS NAME

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
  );
};

export default Header;
