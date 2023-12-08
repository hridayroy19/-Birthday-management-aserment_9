import { useContext } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Authcontaxt } from "../../Porvider/AuthProvider";


const Navbar = () => {
  const {  user,logOut} = useContext(Authcontaxt);

  const handelSignout =()=>{
       logOut()
       .then()
       .catch()
  }
  return (
    <div className="navbar ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-3xl  rounded-box w-52"
          >
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-green-400 underline"
                  : " text-xl text-white"
              }
            >
              HOME
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-green-400 underline"
                  : "text-xl text-white"
              }
            >
              BLOG
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-green-400 underline"
                  : "text-xl text-white"
              }
            >
              LOGIN
            </NavLink>
          </ul>
        </div>
        <a className=" normal-case lg:text-2xl text-xl  text-secondary font-extrabold ">HAPPY BRITHDAY</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-5 px-1">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-green-400 underline"
                : "text-xl text-white"
            }
          >
            HOME
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-green-400 underline"
                : "text-xl text-white"
            }
          >
            BLOG
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-green-400 underline"
                : "text-xl text-white"
            }
          >
            LOGIN
          </NavLink>
        </ul>
      </div>
<div>
</div>





<div className="navbar-end">


{
  user ?
  <button onClick={handelSignout} className="font-bold text-xl px-2"> SIGN OUT</button>
  :
  <Link to={"/login"}>
  <button className="font-bold text-xl px-2"> LOGIN </button>
</Link>
}

       
      </div> 



    </div>
  );
};

export default Navbar;
