import { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

type SelectInputProps = {

}

const SelectInput = ({ }: SelectInputProps) => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div>
      <Select
        defaultValue={selectedOption}
        onChange={() => setSelectedOption}
        options={options}
      />
    </div>
  );
}

export default SelectInput