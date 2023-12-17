"use client";

import Input from "./Input";
import useForm from "@/app/utils/customHooks/useForm";
import fetchFunction from "@/app/utils/fetchFunction";
import validateRegister from "@/app/utils/formValidation/login";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const RegisterForm = () => {
  const [values, handleChange, reset, setFormState, formErrors] = useForm(
    {
      name: "",
      email: "",
      password: "",
      avatar: "",
    },
    validateRegister
  );

  async function handleSubmit(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    if(formErrors.name || formErrors.email || formErrors.password){
      toast.error("Please fill out all the required fields")
      return
    }
    const item = await fetchFunction(
      "https://api.noroff.dev/api/v1/auction/auth/register",
      "POST",
      values
    );
    if(item.name){
      toast.success(`Registered successfully!`)
    }

    reset();
  }

  return (
    <div className="max-w-[400px] m-auto">
      <h1 className="md:text-3xl text-2xl font-bold">Register</h1>
      <form className="flex flex-col shadow-md p-8">
        <Input
          handleChange={handleChange}
          value={values.name}
          type="name"
          name="name"
          id="name"
          label="Name"
          placeholder="John Doe"
          formErrors={formErrors.name}
        />

        <Input
          handleChange={handleChange}
          value={values.email}
          type="email"
          name="email"
          id="email"
          label="Email"
          placeholder="yourEmail@domain.com"
          formErrors={formErrors.email}
        />

        <Input
          handleChange={handleChange}
          value={values.password}
          type="password"
          id="passwor"
          name="password"
          label="Password"
          placeholder="*******"
          formErrors={formErrors.password}
        />

        <Input
          handleChange={handleChange}
          value={values.avatar}
          type="url"
          py-4
          id="avatar"
          name="avatar"
          label="Avatar"
          placeholder="https://www.example.com/"
          formErrors={formErrors.avatar}
        />
        <button onClick={handleSubmit} className="bg-red-200 py-3">
          Register
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default RegisterForm;
