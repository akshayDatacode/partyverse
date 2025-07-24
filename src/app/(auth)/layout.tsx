import { ReactNode } from "react";
import Image from "next/image";
import joyImage from "../../assets/images/happy man blows up a clapper 1.png"
import "./style.scss";

const AuthLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="row mx-0 auth">
            <div className="col-md-5 col-12 d-flex align-items-center justify-content-center h-100">
                {children}
            </div>
            <div className="col-7 d-flex align-items-end justify-content-center position-relative">
                <div className="mb-5 pb-5 ms-5 position-absolute start-0 d-md-inline d-none">
                    <div className="text-highlight text-nowrap text-center fw-bold lh-100 ls-0 auth-text">Your universe</div>
                    <div className="text-white text-nowrap text-center fw-bold lh-100 ls-0 auth-subText">of stress-free celebrations!</div>
                </div>
                <div className="text-start">
                <Image src={joyImage} alt="joyImage" className="d-md-inline d-none"/>
                </div>
            </div>
        </div>
    );
}
export default AuthLayout;