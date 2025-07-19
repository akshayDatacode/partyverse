'use client'
import Image from "next/image";
import { useState } from "react";
import Logo from "../../../assets/images/partyverse.png"
import Button from "@/ui/Button";
import "./style.scss";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    setEmail("");
    setPassword("");
  }
  return (
    <div className="row mx-0 h-100 w-100 bg-white px-5 py-5 login ">
      <div className="col-12 text-white px-3">
        <Image src={Logo} alt="logo" className="mb-5 mt-3" />
        <div className="text-dark">
          <div className="fw-bold py-1 pt-3 lh-100 ls-0 fs-21">Let’s begin planning your party.</div>
          <div className="fw-normal py-1 pb-3 fs-16 lh-100 ls-0">Enter your email id and password</div>
          <form onSubmit={handleSubmit}>
            <div className="custom-input-wrapper my-4 px-2">
              <label className="custom-label" htmlFor="email">Email</label>
              <input
                type="email"
                className="custom-input custom-placeholder"
                id="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="custom-input-wrapper my-4 px-2">
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
            <div className="my-3 text-center">
              <Button label="Login" type="submit"/>
            </div>
          </form>
          <div className="fw-normal text-decoration-underline fs-14 lh-120 ls-0 text-center py-3 login-label">Create Account/ Sign up</div>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;