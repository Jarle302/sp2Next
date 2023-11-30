"use client";

import Input from "./Input";
import useForm from "@/app/utils/customHooks/useForm";
import login from "@/app/utils/api/login";
import { useContext } from "react";
import { UserAccount } from "./ContextContainer";

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

  async function handleSubmit(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    login(values,setUserAccount);
    reset();
  }

  const [values, handleChange, reset] = useForm({
    email: "",
    password: "",
  });
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
        />
        <Input
          handleChange={handleChange}
          type="password"
          id="password"
          value={values.password}
          name="password"
          label="Password"
          placeholder="*******"
        />
        <button onClick={handleSubmit} className="bg-red-200 py-3">
          Register
        </button>
      </form>
    </div>
  );
};
export default LoginForm;
