'use client';

import Image from "next/image";
import { useState } from "react";
import * as Yup from "yup";
import Logo from "../../../assets/images/partyverse.png";
import Button from "@/ui/Button";
import "./style.scss";

const signupSchema = Yup.object().shape({
  fullName: Yup.string().min(3, "Full name must be at least 3 characters").required("Full name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .matches(/[A-Z]/, "Password must have at least one uppercase letter")
    .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must have at least one special character")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
});

const SignupPage = () => {
  const [fullName, setFullName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await signupSchema.validate(
        { fullName, email, password, confirmPassword, phoneNumber },
        { abortEarly: false }
      );
      console.log({ fullName, password, email, phoneNumber });
      setFullName("");
      setConfirmPassword("");
      setPhoneNumber("");
      setEmail("");
      setPassword("");
      setErrors({});
    } catch (validationError: any) {
      const err: { [key: string]: string } = {};
      validationError.inner.forEach((e: any) => {
        err[e.path] = e.message;
      });
      setErrors(err);
    }
  };

  return (
    <div className="row mx-0 h-100 w-100 bg-white signup align-item-start justify-content-start mx-5 px-5">
      <div className="col-12 text-white">
        <div className="py-3">
          <Image src={Logo} alt="logo" />
        </div>
        <div className="text-dark">
          <div className="fw-bold lh-100 ls-0 fs-21 pt-2 pb-4">Create Account</div>
          <form onSubmit={handleSubmit}>
            <div className="custom-input-wrapper">
              <label className="custom-label" htmlFor="name">Your Full Name</label>
              <input
                type="text"
                className="custom-input custom-placeholder"
                id="name"
                placeholder="Enter Your Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />  
            </div>

            <div className="custom-input-wrapper">
              <label className="custom-label" htmlFor="email">Email Address</label>
              <input
                type="email"
                className="custom-input custom-placeholder"
                id="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="custom-input-wrapper">
              <label className="custom-label" htmlFor="password">Password</label>
              <input
                type="password"
                className="custom-input custom-placeholder"
                id="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              /> 
            </div>

            <div className="custom-input-wrapper">
              <label className="custom-label" htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                className="custom-input custom-placeholder"
                id="confirmPassword"
                placeholder="Enter Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              /> 
            </div>

            <div className="custom-input-wrapper">
              <label className="custom-label" htmlFor="PhoneNo">Phone Number</label>
              <input
                type="text"
                className="custom-input custom-placeholder"
                id="PhoneNo"
                placeholder="Enter Your Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            <div className="py-2 text-center">
              <Button label="Continue" type="submit" />
            </div>
          </form>

          {/* Optional error/info message */}
          <div className="fw-normal fs-14 lh-120 ls-0 text-center py-3 signup-label">
            {(errors.fullName && <div className="text-danger fs-12 mt-1">{errors.fullName}</div>)||
            (errors.email && <div className="text-danger fs-12 mt-1">{errors.email}</div>)||
            (errors.password && <div className="text-danger fs-12 mt-1">{errors.password}</div>)||
            (errors.confirmPassword && <div className="text-danger fs-12 mt-1">{errors.confirmPassword}</div>)||
            (errors.phoneNumber && <div className="text-danger fs-12 mt-1">{errors.phoneNumber}</div>) }
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
