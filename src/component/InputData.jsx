import React from "react";

const InputData = ({ phoneNumber, otp, onPhoneNumberChange, onOTPChange }) => {
  return (
    <div className="input-data">
      <h2>Thank you for your responses!</h2>

      <label htmlFor="phoneNumber">Phone Number:</label>
      <input
        type="tel"
        id="phoneNumber"
        name="phoneNumber"
        placeholder="Enter your phone number"
        value={phoneNumber}
        onChange={(e) => onPhoneNumberChange(e.target.value)}
      />
      <label htmlFor="otp">OTP:</label>
      <input
        type="text"
        id="otp"
        name="otp"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => onOTPChange(e.target.value)}
      />
    </div>
  );
};

export default InputData;
