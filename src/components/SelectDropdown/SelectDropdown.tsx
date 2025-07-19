import SelectInput from "@/ui/SelectInput";
import "./style.scss"

type SelectDropdownProps = {
  label?: string;
  place_holder?: string;
}

const SelectDropdown = ({ label,place_holder }: SelectDropdownProps) => {
  return (
    <div className="">
      <label className="w-100 text-start px-2 fw-medium lh-100 ls-0 fs-14 text-highlight" htmlFor="select">{label}</label>
      <div className="">
        <SelectInput place_holder={place_holder} />
      </div>
    </div>
  );
}

export default SelectDropdown;

/**
 * ui
 * components
 * module
 * section
 * pages
 * app

 * 
 */