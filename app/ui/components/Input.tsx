import { error } from "console";
import { ChangeEvent } from "react";

type InputProps = {
  label: string;
  type: string;
  id: string;
  name: string;
  placeholder?: string;
  value?: any;
  handleChange?: (e: ChangeEvent) => void;
  formErrors?: string;
};

const Input = ({
  label,
  type,
  id,
  name,
  placeholder,
  value,
  handleChange,
  formErrors,
}: InputProps) => {
  return (
    <div className="flex flex-col my-3 ">
      <label className="font-bold text-2xl mb-3" htmlFor={id}>
        {label}
      </label>
      {formErrors && (
        <p className="font-bold text-[1rem] text-red-600">{formErrors}</p>
      )}
      {type === "textarea" ? (
        <textarea
          onChange={handleChange}
          className="bg-transparent border-b-solid border-b border-b-gray-600 h-[200px] "
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
        />
      ) : (
        <input
          onChange={handleChange}
          className="bg-transparent border-b-solid border-b border-b-gray-600 "
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
        />
      )}
    </div>
  );
};

export default Input;
