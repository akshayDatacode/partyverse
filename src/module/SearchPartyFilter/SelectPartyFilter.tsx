import SelectDropdown from "@/components/SelectDropdown";
import "./style.scss";
import Button from "@/ui/Button";

type SelectProps={
  venuList?: boolean;
};

const SelectPartyFilter = ({ venuList = false }: SelectProps) => {
  return (
    <div className="row m-0 ">
      <div className={`${venuList? "col-2" : " col-3"} px-0 text-center select-party py-3 select-start `}>
        <SelectDropdown label="Location Type" place_holder="Fine Dine"/>
      </div>
      <div className={`${venuList? "col-2" : " col-3"} px-0 text-center select-party py-3 `}>
        <SelectDropdown label="Celebration Date" place_holder="23/03/2025"/>
      </div>
      <div className={`${venuList? "col-2" : " col-3"} px-0 text-center select-party py-3 `}>
        <SelectDropdown label="Celebration Date" place_holder="Get Together"/>
      </div>
      <div className={` px-0 text-center select-party py-3 ${venuList? "col-2" : "select-end col-3"}  `}>
        <SelectDropdown label="Number of Guests" place_holder="100"/>
      </div>
      { venuList?
       <div className="col-2 px-0 text-center select-party d-flex align-items-center justify-content-center py-3 select-end ">
        <Button label="Edit Search"/>
      </div>:""
      }
    </div>
  );
}

export default SelectPartyFilter;