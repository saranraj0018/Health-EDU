import Logo from "../../assets/hedu-Logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-white shadow-md px-[8em] flex justify-between items-center py-4 h-fit">
      <div className="w-[110px]">
        <img src={Logo} alt="Logo" className="" />
      </div>

      <ul className="flex text-[.9em] text-gray-600 font-semibold font-manrope gap-[38px]">
        <li className="active border-b-3 border-black pb-0">
          <Link to="/">Home</Link>
        </li>

        <li className="">
          <button>
            <span className="pe-3">Colleges</span>
            <i className="fa fa-chevron-down font-medium"></i>
          </button>
        </li>

        <li className="">
          <Link to="courses" className="">
            <span className="pe-3">Courses</span>
            <i className="fa fa-chevron-down"></i>
          </Link>
        </li>

        <li className="">
          <Link to="counselling" className="">
            Counselling
          </Link>
        </li>

        <li className="">
          <Link to="scholarships" className="">
            Scholarships
          </Link>
        </li>

        <li className="">
          <Link to="contact-us" className="">
            Contact us
          </Link>
        </li>

        <li className="">
          <Link to="login" className="font-semibold text-black">
            Login
          </Link>
        </li>

        <li>
          <Link
            to="register"
            className="bg-primary text-white rounded-3xl py-2 px-7 font-semibold"
          >
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
