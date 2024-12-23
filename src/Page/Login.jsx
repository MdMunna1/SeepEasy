import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { MainContex } from "../Contex/ContexComponent";

const Login = () => {
  let { login, setUser, updateproile, googleLogin } = useContext(MainContex);
  let nagi = useNavigate();

  function hendllogin(e) {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;

    login(email, password)
      .then((res) => {
        setUser(res?.user);
      
        // let time = res?.user?.metadata?.lastSignInTime;
        // let time = new Date();

        // let lastuser = { email, time };
        // fetch("https://server-project-woad.vercel.app/user", {
        //   method: "PATCH",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify(lastuser),
        // })
        //   .then((res) => res.json())
        //   .then((result) => console.log("PATCH Response:", result))
        //   .catch((error) => console.error("PATCH Error:", error));

        // Swal.fire({
        //   position: "top-end",
        //   icon: "success",
        //   title: "Success login",
        //   showConfirmButton: false,
        //   timer: 1500,
        // });
        nagi("/");
      })
      .catch((eror) => {
        Swal.fire("login not success!");
      
      });
  }
  function heldlgoogleLogin() {
    googleLogin().then((result) => {
      // console.log(result.user)
      let name = result?.user?.displayName;
      let photo = result?.user?.photoURL;
      updateproile({ displayName: name, photoURL: photo });
       Swal.fire({
                      title: "Login Success",
                      icon: "success",
                      draggable: true
                    });
      nagi("/");
    });
  }
  return (
    <>
    <section className="bg-gradient-to-t from-black via-red-500 to-black ">
    <div className="card bg-transparent mb-10 w-full mx-auto max-w-sm shrink-0 shadow-white shadow-2xl py-4">
        <form onSubmit={hendllogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label flex justify-between py-2">
              <Link
                to={"/forget"}
                href="#"
                className="label-text-alt text-white link link-hover"
              >
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <div className="w-full bg-violet-700 py-1 items-center text-white rounded-xl mx-auto flex justify-center">
          {" "}
          <button
            onClick={heldlgoogleLogin}
            className={"flex gap-1 font-bold mt-2 items-center"}
          >
            <FaGoogle /> Login
          </button>
        </div>
        <button className="font-bold py-6 text-white">
          Create New Accout{" "}
          <Link className="text-red-500" to={"/register"}>
            Register?
          </Link>
        </button>
      </div>
    </section>
     
    </>
  );
};

export default Login;
