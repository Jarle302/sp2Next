import { useState, useEffect, useRef } from "react";
import debounce from "../debounce";
type initialState = Record<string, string | number | boolean | string[]>;

const useForm = <T>(
  initialState: T,
  validateForm: Function
): [T, (e: any) => void, () => void, (prev: any) => void, T] => {
  const [formErorrs, setFormErrors] = useState<T>({ ...initialState });
  const [formState, setFormState] = useState<T>({ ...initialState });
  const isFirstRender = useRef(true);

  const debouncedValidation = debounce(
    (name: string, value: string | number | boolean) =>
      setFormErrors((prev) => ({
        ...prev,
        [name]: validateForm(name, value)[name],
      })),
    2000
  );

  const handleChange: (e: any) => void = (e) => {
    const { name, type, value, checked } = e.target;
    if (validateForm) {
      debouncedValidation(name, value);
    }
    setFormState((prev) => {
      return { ...prev, [name]: type === "checkbox" ? checked : value };
    });
  };

  const reset = () => setFormState(initialState);

  return [formState, handleChange, reset, setFormState, formErorrs];
};

export default useForm;
