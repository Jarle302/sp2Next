"use client";

import Input from "./Input";
import useForm from "@/app/utils/customHooks/useForm";
import login from "@/app/utils/api/login";
import { useContext } from "react";
import { UserAccount } from "./ContextContainer";
import { useRouter } from "next/navigation";
import validateLogin from "@/app/utils/formValidation/login";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

type UserType = {
  name: string;
  email: string;
  avatar: string;
  credits: number;
  wins: string[];
  _count: {
    listings: number;
  };
};

const LoginForm = () => {
  const { userAccount, setUserAccount } = useContext(UserAccount);
  const router = useRouter();
  async function handleSubmit(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    const data = await login(values, setUserAccount);
    reset();
    if(data.name){
      toast.success(`Logged in successfully!`)
     router.push("/")}
  }

  const [values, handleChange, reset, setFormState, formErrors] = useForm(
    {
      email: "",
      password: "",
    },
    validateLogin
  );
  return (
    <div className="max-w-[400px] m-auto">
      <h1 className="md:text-3xl text-2xl font-bold">Login</h1>
      <form className="flex flex-col shadow-md p-8">
        <Input
          handleChange={handleChange}
          type="email"
          name="email"
          value={values.email}
          id="email"
          label="Email"
          placeholder="yourEmail@domain.com"
          formErrors={formErrors.email}
        />

        <Input
          handleChange={handleChange}
          type="password"
          id="password"
          value={values.password}
          name="password"
          label="Password"
          placeholder="*******"
          formErrors={formErrors.password}
        />
        <button onClick={handleSubmit} className="bg-red-200 py-3">
          Login
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};
export default LoginForm;
