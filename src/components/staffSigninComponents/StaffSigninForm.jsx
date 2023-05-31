import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StaffSigninForm = () => {
  const navigate = useNavigate();
  const [myMessage, setMyMessage] = useState("");

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      const endpoint = "https://school-potal-back-end-adex2210.vercel.app";
      axios.post(endpoint, values)
      .then((res) => {
        console.log(res.data);
        if (res.data.status) {
          console.log(res.data.status);
          localStorage.token = res.data.token
          navigate("/staff_dashboard");
        } else {
          setMyMessage(res.data.message)
          console.log(res.data.message);
          navigate("/staff_signin");
          console.log(myMessage);
        }
      })
      .catch((err)=> {
        console.log(err);
      })
    },
  });
  return (
    <>
      <div className="signin-form shadow bg-light">
      <div className="fs-3 fw-bold bg-red-300" >{myMessage}</div>
        <h1 className="fs-bolder">
          welcome <br />
          back!
        </h1>
        <form
          onSubmit={formik.handleSubmit}
          action="/staff_account/staff_signin"
          method="post"
        >
          <div className="form-control signin-form-control">
            <input
              type="text"
              required="required"
              name="email"
              onChange={formik.handleChange}
              placeholder="Email"
            />
            <label>
              <span style={{ transitionDelay: "0ms" }}>E</span>
              <span style={{ transitionDelay: "50ms" }}>m</span>
              <span style={{ transitionDelay: "100ms" }}>a</span>
              <span style={{ transitionDelay: "150ms" }}>i</span>
              <span style={{ transitionDelay: "200ms" }}>l</span>
            </label>
          </div>
          <div className="form-control signin-form-control">
            <input
              type="password"
              required="required"
              name="password"
              onChange={formik.handleChange}
              placeholder="Password"
            />
            <label>
              <span style={{ transitionDelay: "0ms" }}>P</span>
              <span style={{ transitionDelay: "50ms" }}>a</span>
              <span style={{ transitionDelay: "100ms" }}>s</span>
              <span style={{ transitionDelay: "150ms" }}>s</span>
              <span style={{ transitionDelay: "200ms" }}>w</span>
              <span style={{ transitionDelay: "250ms" }}>o</span>
              <span style={{ transitionDelay: "300ms" }}>r</span>
              <span style={{ transitionDelay: "350ms" }}>d</span>
            </label>
          </div>

          <div className="d-flex justify-content-between my-5">
            <span>
              <input type="checkbox" id="checkBox" /> Remember Me
            </span>
            <a href="" id="forgotPass">
              Forgot password
            </a>
          </div>
          <button type="submit" className="button mt-5">
            <div className="btn-text">Login</div>
            <i className="fa-solid fa-arrow-right-to-bracket"></i>
          </button>
        </form>
      </div>
    </>
  );
};

export default StaffSigninForm;
