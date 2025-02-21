import { Outlet } from "react-router-dom";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";

const Main = () => {
  return (
    <div>
      <Header />

      <div className=" w-full">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Main;
