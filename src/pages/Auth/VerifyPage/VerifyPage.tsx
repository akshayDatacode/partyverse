'use client';
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import Logo from "../../../assets/images/partyverse.png";
import Button from "@/ui/Button";
import "./style.scss";

const VerifyPage = () => {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prev) => {
        if (prev < 30) {
          return prev + 1;
        } else {
          clearInterval(intervalId);
          return prev;
        }
      });
    }, 1000);

    return () => clearInterval(intervalId); // cleanup
  }, []);



  const handleOtpChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    console.log("Entered OTP:", enteredOtp);
    setOtp(Array(6).fill(""));
    inputRefs.current[0]?.focus();
  };

  return (
    <div className="row mx-0 h-100 w-100 bg-white px-4 mx-5 py-5 verify">
      <div className="col-12 text-white pt-3 pb-5">
        <Image src={Logo} alt="logo" className="mb-5 mt-3" />
        <div className="text-dark py-4">
          <div className="fw-semibold py-1 pt-3 lh-100 ls-0 fs-21">Verify Code</div>
          <div className="fw-normal py-1 pb-3 fs-16 lh-100 ls-0 verify-sub-heding">OTP sent to +91-9560364888</div>

          {/* OTP Fields */}
          <div className="d-flex gap-2 justify-content-start py-2">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                inputMode="numeric"
                maxLength={1}
                className="otp-box"
                value={digit}
                onChange={(e) => handleOtpChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
              />
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            <div className="my-4 d-flex align-items-center justify-content-between">
              <Button label="Verify" type="submit" />
              <div className="fw-normal fs-14 lh-120 ls-0 text-center py-3 ">
                <span className="text-decoration-underline verify-label">Resend</span> <span className="text-decoration-none">00:{time}s</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyPage;
