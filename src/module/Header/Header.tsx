'use client';
import Link from "next/link";
import Image from 'next/image';

import SelectDropdown from "@/components/SelectDropdown";
import Button from "@/ui/Button";
import PARTYVERSE from "@/assets/images/partyverse.png";
import "./style.scss";

const Header = () => {
  return (
    <>
    <header className="row mx-0 align-items-center justify-content-center position-fixed w-100 bg-white header-highest header-border">
      <div className="col-12 py-lg-1 py-3 px-4 d-flex align-items-center justify-content-between">
        <div className="">
          <Link href={"/"}><Image src={PARTYVERSE} alt="logo" /></Link>
        </div>
        <div className="d-flex align-items-center justify-content-center py-1">
          <div className="me-2 d-md-flex d-none align-items-center justify-content-center header-select"> 
            <SelectDropdown label="City" place_holder="Indore" />
          </div>
          <div className="my-3 mx-2 d-md-block d-none">
            <Link href="/login" className="text-decoration-none">
            <Button label="Login/Sign up"/>
            </Link>
          </div>
          <div className="d-md-none d-inline">
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
