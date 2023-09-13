import React, { useState } from "react";
import CircleLoader from "react-spinners/CircleLoader";
import Thanks from "./Thanks";

const InputData = ({ phoneNumber, onPhoneNumberChange }) => {
  let [loading, setLoading] = useState(false);
  let [showOtp, setShowOtp] = useState(false);
  let [otp, setOtp] = useState("");
  // let [color, setColor] = useState("");
  const [showThanks, setShowThanks] = useState(false);

  // store the otp in state
  // const onOTPChange = (otp) => {
  //   setOtp(otp);
  // };

  const handleSendOtp = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowOtp(true);
    }, 2000);
  };

  return (
    <div>
      {showThanks ? (
        <Thanks />
      ) : (
        <div>
          <h2>Enter Details for App Link</h2>

          <div className="input-data">
            {!showOtp && (
              <>
                <label className="input-label" htmlFor="phoneNumber">
                  Phone Number:
                </label>
                <input
                  className="data-input2"
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  // onChange={(e) => onPhoneNumberChange(e.target.value)}
                />
                <button onClick={handleSendOtp}>(Send OTP)</button>
              </>
            )}
            {loading && (
              <CircleLoader
                color={"#000"}
                loading={loading}
                size={20}
                cssOverride={{
                  // size: "150px",
                  display: "block",
                  margin: "0 auto",
                  borderColor: "red",
                }}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            )}
            {showOtp && (
              <>
                <label className="input-label" htmlFor="otp">
                  OTP:
                </label>
                <input
                  className="data-input"
                  type="text"
                  id="otp"
                  name="otp"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </>
            )}
          </div>
          {otp && (
            <button
              onClick={() => setShowThanks(true)}
              className="reset-button"
            >
              Submit
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default InputData;
