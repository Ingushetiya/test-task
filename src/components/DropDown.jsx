import React, { useState } from 'react';
import Select from 'react-select';
import './styles/dropDown.module.scss';

const options = [
  { value: 'оператор №1', label: 'Оператор №1' },
  { value: 'оператор №2', label: 'Оператор №2' },
  { value: 'оператор №3', label: 'Оператор №3' },
];
const DropBox = () => {
  const [currentOperator, setCurrentOperator] = useState('оператор №1');

  const getValue = () => {
    return currentOperator ? options.find((c) => c.value === currentOperator) : '';
  };

  const onChange = (newValue) => {
    setCurrentOperator(newValue.value);
  };
  return (
    <div>
      <label className="dropLabel">Dropdown Title</label>
      <Select
        menuIsOpen
        classNamePrefix="custom-select"
        onChange={onChange}
        value={getValue()}
        options={options}
      />
    </div>
  );
};

export default DropBox;
