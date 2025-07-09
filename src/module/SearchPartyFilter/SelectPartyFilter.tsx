import SelectDropdown from "@/components/SelectDropdown";

const SelectPartyFilter = () => {
  return (
    <div className="row mx-0">
      <div className="col-3 px-0 text-center">
        <SelectDropdown />
      </div>
      <div className="col-3 px-0 text-center">
        <SelectDropdown />
      </div>
      <div className="col-3 px-0 text-center">
        <SelectDropdown />
      </div>
      <div className="col-3 px-0 text-center">
        <SelectDropdown />
      </div>
    </div>
  );
}

export default SelectPartyFilter;