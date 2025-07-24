'use client';

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import * as Yup from "yup";
import Logo from "../../../assets/images/partyverse.png";
import Button from "@/ui/Button";
import "./style.scss";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character")
    .required("Password is required"),
});

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await loginSchema.validate({ email, password }, { abortEarly: false });
      console.log("Email:", email);
      console.log("Password:", password);
      setEmail("");
      setPassword("");
      setErrors({});
    } catch (validationError: any) {
      const err: { email?: string; password?: string } = {};
      validationError.inner.forEach((e: any) => {
        err[e.path as 'email' | 'password'] = e.message;
      });
      setErrors(err);
    }
  };

  return (
    <div className="row mx-0 bg-white login align-items-center justify-content-around px-md-5 px-3">
      <div className="col-12 text-white">
        <Image src={Logo} alt="logo" className="mb-5 mt-0" />
        <div className="text-dark">
          <div className="fw-bold py-1 pt-3 lh-100 ls-0 fs-21">Let’s begin planning your party.</div>
          <div className="fw-normal py-1 pb-3 fs-16 lh-100 ls-0">Enter your email id and password</div>
          <form onSubmit={handleSubmit}>
            <div className="custom-input-wrapper my-4">
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
            <div className="custom-input-wrapper my-4">
              <label className="custom-label" htmlFor="password">Password</label>
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
              <Button label="Login" type="submit" />
            </div>
          </form>
          <div className="text-center py-3"><Link href={"/signup"} className="text-decorartion-none fw-normal text-decoration-underline fs-14 lh-120 ls-0 text-center login-label">Create Account/ Sign up</Link></div>
          <div className="text-center">{(errors.email && <div className="text-danger fs-12 mt-1">{errors.email}</div>) || (errors.password && <div className="text-danger fs-12 mt-1">{errors.password}</div>)}</div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;