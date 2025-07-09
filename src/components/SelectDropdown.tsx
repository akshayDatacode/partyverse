import SelectInput from "@/ui/SelectInput";

type SelectDropdownProps = {
  label?: string;
}

const SelectDropdown = ({ label = "Select Option" }: SelectDropdownProps) => {
  return (
    <div>
      <label className="text-highlight" htmlFor="select">{label}</label>
      <div className="">
        <SelectInput />
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