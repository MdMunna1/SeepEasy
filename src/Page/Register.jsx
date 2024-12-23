import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { MainContex } from "../Contex/ContexComponent";

const Register = () => {
  const { emailPass, setUser, updateproile, logOut, googleLogin } =
    useContext(MainContex);
  const navigate = useNavigate();

  function hendlregister(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    if (!/[A-Z]/.test(password)) {
      Swal.fire("Password must contain at least one uppercase letter!");
      return;
    } else if (!/[a-z]/.test(password)) {
      Swal.fire("Password must contain at least one lowercase letter!");
      return;
    } else if (password.length < 6) {
      Swal.fire("Password must be at least 6 characters long!");
      return;
    }

    emailPass(email, password)
      .then((res) => {
        // let time = res?.user?.metadata?.lastSignInTime;
        // let user = { name, email,time };
        setUser(res?.user);
        updateproile({ displayName: name, photoURL: photo }).then(() => {
            Swal.fire({
                title: "Register Success",
                icon: "success",
                draggable: true
              });
          
  navigate("/")
          
        });
      });
  }
  function heldlgoogleLogin() {
    googleLogin().then((result) => {
      // console.log(result.user)
      let name = result?.user?.displayName;
      let photo = result?.user?.photoURL;
      updateproile({ displayName: name, photoURL: photo });
      navigate("/");
    });
  }

  return (
    <section className="bg-gradient-to-t from-black via-red-500 to-black">
<div className="card bg-base-100 w-full bg-transparent mx-auto max-w-sm shrink-0 shadow-2xl shadow-white">
      <h1 className="text-center text-white py-2 text-2xl font-bold">Register Now</h1>
      <form onSubmit={hendlregister} className="card-body text-white">
        <div className="form-control">
          <label className="label">
            <span className="label-text  text-white">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text  text-white">Email</span>
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
            <span className="label-text  text-white">Photo URL</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Photo url"
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
            className="input text-black input-bordered"
            required
          />
        </div>

        <div className="form-control mt-6">
          <button className="py-2  text-white rounded-lg mb-3 font-bold text-white bg-black">
            Register
          </button>
        </div>
      </form>
      <div className="flex justify-center w-full">
        {" "}
        <button
          onClick={heldlgoogleLogin}
          className={
            "py-2 w-full rounded-lg flex font-bold text-white items-center gap-3 justify-center bg-black"
          }
        >
          <FaGoogle /> Login
        </button>
      </div>
      <Link className="mb-3  text-white ml-5" to="/login">
        Already have an account?{" "}
        <span className="font-bold text-red-600">Log in</span>{" "}
      </Link>
    </div>
    </section>
    
  );
};

export default Register;
