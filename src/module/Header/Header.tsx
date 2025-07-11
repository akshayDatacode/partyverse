import SelectDropdown from "@/components/SelectDropdown";
import "./style.scss";
import Button from "@/ui/Button";
import PARTYVERSE from "@/assets/images/partyverse.png";
import Image from 'next/image';

const Header = () => {
  return (
    <header className="header ">
      <div className="header-inner">
      <div className="">
        <Image src={PARTYVERSE} alt="logo" />
      </div>
      <div className="d-flex align-items-center">
        <div className="header-select">
          <SelectDropdown label="City" place_holder="Indore" />
        </div>
        <div className="m-3">
          <Button label="Login/Sign up"/>
        </div>
      </div>
      </div>
    </header>
  );
};

export default Header;
