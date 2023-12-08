import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/footer/Footer";
import { Toaster } from "react-hot-toast";

const MainLaout = () => {
    return (
        <div>
          <div className="px-20 mt-4">

          <Navbar></Navbar>
          </div>
            <Outlet></Outlet>
              <Footer></Footer>
              <Toaster/>
        </div>
    );
};

export default MainLaout;