import React from "react";
import "../Student/Login.css";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      // console.log(values);
      const endpoint = "http://localhost:2000/student_account/student_login";
      axios.post(endpoint, values).then((response) => {
        // console.log(response.data.result);
        if (response.data.result) {
          localStorage.studentLoginToken = response.data.studentLoginToken;
          const Toast = Swal.mixin({
            toast: true,
            position: "top",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "success",
            title: "Signed in successfully",
          });
          navigate("/student/admission/pick_class");
        } else {
          const Toast = Swal.mixin({
            toast: true,
            position: "top",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "error",
            title: "Incorrect email or password",
          });
        }
      });
    },
  });
  return (
    <>
      <div className="login-main-container">
        <div className="login-content">
          <div className="login-text text-center">Login</div>
          <form action="#" onSubmit={formik.handleSubmit}>
            <div className="login-field">
              <input
                required=""
                type="text"
                name="email"
                onChange={formik.handleChange}
                className="login-input"
                placeholder="Email or Phone"
              />
              <span className="login-span">
                <svg
                  className=""
                  xmlSpace="preserve"
                  style={{ enableBackground: "new 0 0 512 512" }}
                  viewBox="0 0 512 512"
                  y="0"
                  x="0"
                  height="20"
                  width="50"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      className=""
                      data-original="#000000"
                      fill="#595959"
                      d="M256 0c-74.439 0-135 60.561-135 135s60.561 135 135 135 135-60.561 135-135S330.439 0 256 0zM423.966 358.195C387.006 320.667 338.009 300 286 300h-60c-52.008 0-101.006 20.667-137.966 58.195C51.255 395.539 31 444.833 31 497c0 8.284 6.716 15 15 15h420c8.284 0 15-6.716 15-15 0-52.167-20.255-101.461-57.034-138.805z"
                    ></path>
                  </g>
                </svg>
              </span>
              <label className="login-label">Email or Phone</label>
            </div>
            <div className="login-field">
              <input
                required=""
                type="password"
                name="password"
                onChange={formik.handleChange}
                className="login-input"
                placeholder="Password"
              />
              <span className="login-span">
                <svg
                  className=""
                  xmlSpace="preserve"
                  style={{ enableBackground: "new 0 0 512 512" }}
                  viewBox="0 0 512 512"
                  y="0"
                  x="0"
                  height="20"
                  width="50"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      className=""
                      data-original="#000000"
                      fill="#595959"
                      d="M336 192h-16v-64C320 57.406 262.594 0 192 0S64 57.406 64 128v64H48c-26.453 0-48 21.523-48 48v224c0 26.477 21.547 48 48 48h288c26.453 0 48-21.523 48-48V240c0-26.477-21.547-48-48-48zm-229.332-64c0-47.063 38.27-85.332 85.332-85.332s85.332 38.27 85.332 85.332v64H106.668zm0 0"
                    ></path>
                  </g>
                </svg>
              </span>
              <label className="login-label">Password</label>
            </div>
            <div className="login-forgot-pass">
              <a href="#">Forgot Password?</a>
            </div>
            <button className="login-button">Sign in</button>
            <div className="login-sign-up">
              Not a member?
              <a href="#">signup now</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
