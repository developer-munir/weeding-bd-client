import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useTitle from "../../hooks/useTitle";

import loginBanner from "../../assests/login.jpg";
const Register = () => {
  useTitle("Register");
  const { registerUser, userProfileUpdate } = useContext(AuthContext);
  const notify = () => toast("Registation Successfully");
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, email, password);
    const userName = {
      displayName: name,
    };
    registerUser(email, password)
      .then((result) => {
        userProfileUpdate(userName)
          .then(() => {
            notify();
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content grid md:grid-cols-2 text-center">
        <div className="text-center">
          <div>
            <img src={loginBanner} alt="" />
          </div>
        </div>
        <div className="bg-[#0D0D0D] border shadow-2xl rounded-md ">
          <form className="card-body" onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#CAD5E2]">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#CAD5E2]">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#CAD5E2]">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link
                  to="/login"
                  className="label-text-alt link hover:link-success text-[#CAD5E2]"
                >
                  Already have an account?
                </Link>
              </label>
            </div>

            <button className="bg-[#CAD5E2] py-2 px-6 mb-3" type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
