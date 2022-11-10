import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useTitle from "../../hooks/useTitle";
import loginBanner from "../../assests/login.jpg";
const Login = () => {
  useTitle("Login");
  const { loginUser, google } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const notify = () => toast("login successfully");
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        const currentUserInfo = {
          email: user.email,
        };
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUserInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("token", data.token);
            notify();
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const singInGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    google(googleProvider)
      .then((result) => {
        const user = result.user;
        const currentUserInfo = {
          email: user.email,
        };
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUserInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("token", data.token);
            notify();
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content grid md:grid-cols-2 text-center">
        <div>
          <img src={loginBanner} alt="" />
        </div>
        <div className="bg-[#0D0D0D] border shadow-2xl rounded-md ">
          <form className="card-body " onSubmit={handleLogin}>
            <div className="form-control ">
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
                  to="/register"
                  className="label-text-alt link hover:link-error text-[#CAD5E2]"
                >
                  new here ? register
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="bg-[#CAD5E2] hover:text-red-600 py-2">
                Login
              </button>
            </div>
          </form>

          <button
            className="hover:text-red-600 bg-[#CAD5E2] py-2 px-6 mb-3"
            type="submit"
            onClick={singInGoogle}
          >
            Sing in Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
