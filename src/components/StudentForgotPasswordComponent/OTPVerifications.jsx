import { useFormik } from "formik";
import React, { useRef, useState } from "react";
import "./OTPVerification.css";
import { Link } from "react-router-dom";
import { SnackbarProvider, useSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import { myOTPVerify } from "../../redux/portalSlice";
import axios from "axios";

const OTPVerifications = ({ myOTP: myOTP, sentEmail: sentEmail }) => {
  return (
    <SnackbarProvider
      maxSnack={1}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <MyApp myOTP={myOTP} sentEmail={sentEmail} />
    </SnackbarProvider>
  );
};

function MyApp({ myOTP: myOTP, sentEmail: sentEmail }) {
  const [OTPInput, setOTPInput] = useState([0, 0, 0, 0]);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const [confirmNewOTP, setConfirmNewOTP] = useState(false);
  const [myLatestOTP, setMyLatestOTP] = useState("");

  const myEmailResponse = useSelector(
    (state) => state.portalReducer.emailVerify
  );

  const resendNewOTP = () => {
    const myNewOTP = Math.floor(Math.random() * 9000 + 1000);
    const myNewValues = { myNewOTP, sentEmail };
    let endpoint = "https://school-portal-backend-adex2210.vercel.app/student_account/otp";
    axios.post(endpoint, myNewValues)
    .then((response) => {
      localStorage.secret = response.data.secret;
      console.log(response.data.message);
      setConfirmNewOTP(true);
      setMyLatestOTP(myNewOTP);
      enqueueSnackbar(response.data.message, { variant: "success" });
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    const endpoint = "https://school-portal-backend-adex2210.vercel.app/student_account/confirm_otp";
      let secret = localStorage.secret;
      axios
        .get(endpoint, {
          headers: {
            Authorization: `Bearer ${secret}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((response) => {
          if (confirmNewOTP) {
            if (response.data.status) {
              if (Number(OTPInput.join("")) === myLatestOTP) {
                dispatch(myOTPVerify(true));
                enqueueSnackbar(
                  "Verification successful. Click Nest step button to proceed",
                  { variant: "success" }
                );
              } else {
                enqueueSnackbar("The provided OTP does not match. Please try again", {
                  variant: "error",
                });
              }
            } else {
              enqueueSnackbar(response.data.message, {
                variant: "error",
              });
              dispatch(myOTPVerify(false));
            }
            
          } else {
            if (response.data.status) {
              if (Number(OTPInput.join("")) === myOTP) {
                dispatch(myOTPVerify(true));
                enqueueSnackbar(
                  "Verification successful. Click Nest step button to proceed",
                  { variant: "success" }
                );
              } else {
                enqueueSnackbar(
                  "The provided OTP does not match. Please try again",
                  {
                    variant: "error",
                  }
                );
              }
            } else {
              enqueueSnackbar(response.data.message, {
                variant: "error",
              });
              dispatch(myOTPVerify(false));
            }
          // });
      }
        })
     
  }

  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);

  const handleChangeInput1 = (e) => {
    setOTPInput([e.target.value, OTPInput[1], OTPInput[2], OTPInput[3]]);

    if (e.target.value != "") {
      input2Ref.current.focus();
    }
  };

  const handleChangeInput2 = (e) => {
    setOTPInput([OTPInput[0], e.target.value, OTPInput[2], OTPInput[3]]);

    if (e.target.value != "") {
      input3Ref.current.focus();
    }
  };

  const handleChangeInput3 = (e) => {
    setOTPInput([OTPInput[0], OTPInput[1], e.target.value, OTPInput[3]]);

    if (e.target.value != "") {
      input4Ref.current.focus();
    }
  };

  return (
    <>
      <div className="otp-verification-container mx-auto shadow">
        <form className="otp-verification-form" onSubmit={handleSubmit}>
          <div className="otp-verification-info">
            <span className="otp-verification-title pb-3">
              OTP Verification
            </span>
            <p className="otp-verification-description">
              Please enter the code we just sent to{" "}
              <a
                href={`https://mail.google.com/mail/u/0/#inbox`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontStyle: "italic", color: "", fontWeight: "bold" }}
              >
                {myEmailResponse}
              </a>
            </p>
          </div>
          <div className="otp-verification-input-fields">
            <input
              className="otp-verification-input"
              placeholder=""
              type="password"
              maxLength="1"
              name="otpValue1"
              ref={input1Ref}
              onChange={handleChangeInput1}
            />
            <input
              className="otp-verification-input"
              placeholder=""
              type="password"
              maxLength="1"
              name="otpValue2"
              ref={input2Ref}
              onChange={handleChangeInput2}
            />
            <input
              className="otp-verification-input"
              placeholder=""
              type="password"
              maxLength="1"
              name="otpValue3"
              ref={input3Ref}
              onChange={handleChangeInput3}
            />
            <input
              className="otp-verification-input"
              placeholder=""
              type="password"
              maxLength="1"
              name="otpValue4"
              ref={input4Ref}
              onChange={(e) =>
                setOTPInput([
                  OTPInput[0],
                  OTPInput[1],
                  OTPInput[2],
                  e.target.value,
                ])
              }
            />
          </div>

          <div className="otp-verification-action-btns">
            <button className="otp-verification-verify" type="submit">
              Verify
            </button>
            <button className="otp-verification-clear" type="reset">
              Clear
            </button>
          </div>
        </form>
        <p className="otp-verification-resend mt-2">
          You don't receive the code ?
          <a
            style={{ cursor: "pointer" }}
            onClick={resendNewOTP}
            className="otp-verification-resend-action ms-4"
          >
            Resend
          </a>
        </p>
      </div>

      {/* <form action=""> */}

      {/* </form> */}
    </>
  );
}

export default OTPVerifications;
