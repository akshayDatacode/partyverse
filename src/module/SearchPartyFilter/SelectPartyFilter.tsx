import SelectDropdown from "@/components/SelectDropdown";
import "./style.scss";

const SelectPartyFilter = () => {
  return (
    <div className="row m-0 ">
      <div className="col-3 px-0 text-center select-party py-3 select-start">
        <SelectDropdown label="Location Type" place_holder="Fine Dine"/>
      </div>
      <div className="col-3 px-0 text-center select-party py-3 ">
        <SelectDropdown label="Celebration Date" place_holder="23/03/2025"/>
      </div>
      <div className="col-3 px-0 text-center select-party py-3 ">
        <SelectDropdown label="Celebration Date" place_holder="Get Together"/>
      </div>
      <div className="col-3 px-0 text-center select-party py-3 select-end ">
        <SelectDropdown label="Number of Guests" place_holder="100"/>
      </div>
    </div>
  );
}

export default SelectPartyFilter;