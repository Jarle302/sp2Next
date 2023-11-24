import { useState } from "react";

type initialState = Record<string, string | number | boolean | string[]>;

const useForm = (
  initialState: initialState
): [{}, (e: any) => void, () => void, (prev: any) => void] => {
  const [formSate, setFormState] = useState({ ...initialState });

  const handleChange: (e: any) => void = (e) => {
    const { name, type, value, checked } = e.target;

    setFormState((prev) => {
      return { ...prev, [name]: type === checked ? checked : value };
    });
  };

  const reset = () => setFormState(initialState);

  return [formSate, handleChange, reset, setFormState];
};

export default useForm;
