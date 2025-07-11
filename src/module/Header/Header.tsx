import SelectDropdown from "@/components/SelectDropdown";
import "./style.scss";
import Button from "@/ui/Button";
import PARTYVERSE from "@/assets/images/partyverse.png";
import Image from 'next/image';

const Header = () => {
  return (
    <header className="header ">
      <div className="header-inner m-0 p-0 ">
      <div className="">
        <Image src={PARTYVERSE} alt="logo" />
      </div>
      <div className="d-flex align-items-center ">
        <div className="header-select me-3 ">
          <SelectDropdown label="City" place_holder="Indore" />
        </div>
        <div className="my-3">
          <Button label="Login/Sign up"/>
        </div>
      </div>
      </div>
    </header>
  );
};

export default Header;
