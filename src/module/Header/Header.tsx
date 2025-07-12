import SelectDropdown from "@/components/SelectDropdown";
import "./style.scss";
import Button from "@/ui/Button";
import PARTYVERSE from "@/assets/images/partyverse.png";
import Image from 'next/image';

const Header = () => {
  return (
    <header className="header px-lg-5 px-md-3 px-2 py-3">
      <div className="header-inner px-2">
      <div className="">
        <Image src={PARTYVERSE} alt="logo" />
      </div>
      <div className="d-flex align-items-center ">
        <div className="header-select me-3">
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
  );
};

export default Header;
