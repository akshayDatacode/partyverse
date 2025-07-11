import { useState } from 'react';
import Select from 'react-select';
import "./style.scss";

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

type SelectInputProps = {
  place_holder?: string;
}

const SelectInput = ({place_holder}: SelectInputProps) => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className='select-div'>
      <Select
        defaultValue={selectedOption}
        onChange={()=>setSelectedOption}
        placeholder={place_holder}
        options={options}
        className="custom-select"
        classNamePrefix="custom"
      />
    </div>
  );
}

export default SelectInput;
