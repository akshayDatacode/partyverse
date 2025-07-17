'use client';
import Link from "next/link";
import SelectDropdown from "@/components/SelectDropdown";
import Button from "@/ui/Button";
import PARTYVERSE from "@/assets/images/partyverse.png";
import Image from 'next/image';
import "./style.scss";

const Header = () => {
  return (
    <>
    <header className="row mx-0 align-items-center justify-content-center position-fixed w-100 header-highest bg-white">
      <div className="col-12 header-border py-lg-1 py-3 px-4 d-flex align-items-center justify-content-between">
        <div className="">
          <Link href={"/"}><Image src={PARTYVERSE} alt="logo" /></Link>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <div className="header-select me-2"> 
            <SelectDropdown label="City" place_holder="Indore" />
          </div>
          <div className="my-3 login">
            <Button label="Login/Sign up"/>
          </div>
          <div className="hambarger">
            <i className="bi bi-list fs-2"></i>
          </div>
        </div>
      </div>
    </header>
    <div className="header-margin-bottom"></div>
    </>
  );
};

export default Header;
