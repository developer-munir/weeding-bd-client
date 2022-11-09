import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useTitle from "../../hooks/useTitle";
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
            
          })
        
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
      <div className="hero-content grid md:w-1/2 mx-auto">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
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
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link to="/register" className="label-text-alt link link-hover">
                  Register Please?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="form-control mt-6">
            <button
              className="btn btn-primary"
              type="submit"
              onClick={singInGoogle}
            >
              Sing in Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
