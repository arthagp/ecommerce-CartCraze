import React, { useState } from "react";

type InputValue = string | number;

type InputHandler = (e: React.ChangeEvent<HTMLInputElement>) => void;

type UseInputHooks = (
  initialValue: InputValue
) => [InputValue, InputHandler, () => void];
// karena useInput return array maka pada type di atas return array juga harus di deklarasi

const useInput: UseInputHooks = (initialValue) => {
  const [value, setValue] = useState<InputValue>(initialValue);
  const handleChange: InputHandler = (event) => {
    setValue(event.target.value);
  };

  const resetValue = () => {
    setValue(initialValue);
  };
  return [value, handleChange, resetValue];
};

export default useInput;
