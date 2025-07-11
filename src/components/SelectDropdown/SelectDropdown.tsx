import SelectInput from "@/ui/SelectInput";
import "./style.scss"

type SelectDropdownProps = {
  label?: string;
  place_holder?: string;
}

const SelectDropdown = ({ label,place_holder }: SelectDropdownProps) => {
  return (
    <div className="select-dropdown ">
      <label className="label text-highlight w-100 text-start px-2" htmlFor="select">{label}</label>
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