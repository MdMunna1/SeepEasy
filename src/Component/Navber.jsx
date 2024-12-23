
import { TiThMenu } from "react-icons/ti";
import { MdRestaurantMenu } from "react-icons/md";
import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MainContex } from "../Contex/ContexComponent";
import logo from "../assets/logo.png"
function Navber() {
  const [velu, setVelu] = useState(true);
  let { user, logOut, setUser } = useContext(MainContex);
  return (
    <>
      <nav className="items-center py-4 text-white font-semibold bg-black flex justify-between">
        <h1 className="text-2xl text-red-400 flex items-center gap-2">
          <img className="h-12 w-12 rounded-full  object-cover" src={logo} alt="" />
          SleepEase
        </h1>
        <ul className="hidden text-xs lg:text-sm sm:flex items-center gap-3">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `px-2 py-1 rounded-md ${isActive ? "bg-red-400 text-white" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/rooms"}
            className={({ isActive }) =>
              `px-2 py-1 rounded-md ${isActive ? "bg-red-400 text-white" : ""}`
            }
          >
            Rooms
          </NavLink>
          <NavLink
            to={"/mybooking"}
            className={({ isActive }) =>
              `px-2 py-1 rounded-md ${isActive ? "bg-red-400 text-white" : ""}`
            }
          >
            My Booking
          </NavLink>
          {user ? (
            <>
              <div className="flex gap-1 items-center">
                <img
                referrerPolicy="no-referrer"
                 title={user?.displayName}
                  className="h-8 w-8 rounded-full p-1"
                  src={user?.photoURL}
                  alt=""
                />{" "}
                <Link
                  className="bg-red-400 text-white font-bold py-2 px-3 rounded-md"
                  onClick={logOut}
                >
                  LogOut
                </Link>
              </div>{" "}
            </>
          ) : (
            <>
              {" "}
              <NavLink
                to={"/login"}
                className={({ isActive }) =>
                  `px-2 py-1 rounded-md ${
                    isActive ? "bg-red-400 text-white" : ""
                  }`
                }
              >
                LogIn
              </NavLink>
              <NavLink
                to={"/register"}
                className={({ isActive }) =>
                  `px-2 py-1 rounded-md ${
                    isActive ? "bg-red-400 text-white" : ""
                  }`
                }
              >
                Register
              </NavLink>
            </>
          )}
        </ul>
        {velu ? (
          <h1
            onClick={() => setVelu(!velu)}
            className="block sm:hidden text-2xl"
          >
            <TiThMenu />
          </h1>
        ) : (
          <h1
            onClick={() => setVelu(!velu)}
            className="block sm:hidden text-2xl"
          >
            <MdRestaurantMenu />
          </h1>
        )}

        <ul
          className={`absolute z-20 right-0 top-[70px] px-3 duration-300 ${
            velu ? "scale-0" : "scale-100"
          } sm:scale-0 bg-emerald-300 py-2 flex flex-col gap-8`}
        >
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `px-2 py-1 rounded-md ${isActive ? "bg-red-400 text-white" : ""}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to={"/rooms"}
            className={({ isActive }) =>
              `px-2 py-1 rounded-md ${isActive ? "bg-red-400 text-white" : ""}`
            }
          >
            Rooms
          </NavLink>
          <NavLink
            to={"/mybooking"}
            className={({ isActive }) =>
              `px-2 py-1 rounded-md ${isActive ? "bg-red-400 text-white" : ""}`
            }
          >
            My Booking
          </NavLink>
          {user ? (
            <>
              <div className="flex gap-1 items-center">
                <img
                referrerPolicy="no-referrer"
                  className="h-8 w-8 rounded-full p-1"
                  src={user?.photoURL}
                  alt=""
                />{" "}
                <Link
                  className="bg-red-400 text-white font-bold py-2 px-3 rounded-md"
                  onClick={logOut}
                >
                  LogOut
                </Link>
              </div>{" "}
            </>
          ) : (
            <>
              {" "}
              <NavLink
                to={"/login"}
                className={({ isActive }) =>
                  `px-2 py-1 rounded-md ${
                    isActive ? "bg-red-400 text-white" : ""
                  }`
                }
              >
                LogIn
              </NavLink>
              <NavLink
                to={"/register"}
                className={({ isActive }) =>
                  `px-2 py-1 rounded-md ${
                    isActive ? "bg-red-400 text-white" : ""
                  }`
                }
              >
                Register
              </NavLink>
            </>
          )}
        </ul>
      </nav>
    </>
  );
}

export default Navber;
