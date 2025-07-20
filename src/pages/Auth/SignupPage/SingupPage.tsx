'use client'
import Image from "next/image";
import { use, useState } from "react";
import Logo from "../../../assets/images/partyverse.png"
import Button from "@/ui/Button";
import "./style.scss";

const SignupPage = () => {
  const [fullName, setFullName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({fullName,password,email,phoneNumber});
    setFullName("");
    setConfirmPassword("");
    setPhoneNumber("");
    setEmail("");
    setPassword("");
  }
  return (
    <div className="row mx-0 h-100 w-100 bg-white signup align-item-start justify-content-start mx-5 px-3">
      <div className="col-12 text-white">
        <div className="py-3">
        <Image src={Logo} alt="logo" className="" />
        </div>
        <div className="text-dark">
          <div className="fw-bold lh-100 ls-0 fs-21 pt-2 pb-4">Create Account</div>
          <form onSubmit={handleSubmit}>
            <div className="custom-input-wrapper">
              <label className="custom-label" htmlFor="name">Your Full Name</label>
              <input
                type="name"
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
              <label className="custom-label" htmlFor="password">password</label>
              <input
                type="password"
                className="custom-input custom-placeholder"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="custom-input-wrapper">
              <label className="custom-label" htmlFor="password">Confirm Password</label>
              <input
                type="password"
                className="custom-input custom-placeholder"
                id="password"
                placeholder="Enter Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="custom-input-wrapper">
              <label className="custom-label" htmlFor="PhoneNo">Phone Number</label>
              <input
                type="number"
                className="custom-input custom-placeholder"
                id="PhoneNo"
                placeholder="Enter Your Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="py-2 text-center">
              <Button label="Continue" type="submit"/>
            </div>
          </form>
          <div className="fw-normal fs-14 lh-120 ls-0 text-center py-3 signup-label">Your Email Address is already Registered! “Error”</div>
        </div>
      </div>
    </div>
  );
}
export default SignupPage;