'use client';
import SelectDropdown from "@/components/SelectDropdown";
import Button from "@/ui/Button";
import PARTYVERSE from "@/assets/images/partyverse.png";
import Image from 'next/image';
import "./style.scss";

const Header = () => {
  return (
    <header className="row px-md-4 px-2 mx-0 d-flex position-fixed align-items-center justify-content-center w-100 z-3 bg-white">
      <div className="col-12 header-border py-lg-1 py-3 d-flex align-items-center justify-content-between">
        <div className="">
          <Image src={PARTYVERSE} alt="logo" />
        </div>
        <div className="d-flex align-items-center ">
          <div className="header-select me-2">
            <SelectDropdown label="City" place_holder="Indore" />
          </div>
          <div className="my-3 login">
            <Button label="Login/Sign up" />
          </div>
          <div className="hambarger">
            <i className="bi bi-list fs-2"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
