import { useState, useEffect, useRef } from "react";

type initialState = Record<string, string | number | boolean | string[]>;

const useForm = <T>(
  initialState: T,
  validateForm?: Function
): [T, (e: any) => void, () => void, (prev: any) => void, T] => {
  const [formErorrs, setFormErrors] = useState<T>({ ...initialState });
  const [formSate, setFormState] = useState<T>({ ...initialState });
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      setFormErrors(validateForm && validateForm(formSate));
    }
  }, [formSate]);
  const handleChange: (e: any) => void = (e) => {
    const { name, type, value, checked } = e.target;

    setFormState((prev) => {
      return { ...prev, [name]: type === checked ? checked : value };
    });
  };

  const reset = () => setFormState(initialState);

  return [formSate, handleChange, reset, setFormState, formErorrs];
};

export default useForm;
