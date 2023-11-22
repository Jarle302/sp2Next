"use client"

import Input from "./Input"
import useForm from "@/app/utils/customHooks/useForm"
import fetchFunction from "@/app/utils/fetchFunction"


const  RegisterForm = () => {

  const [values, handleChange, reset] = useForm({name:"", email: "",
  password: "",
  avatar: "",})

 async function handleSubmit(e){
  e.preventDefault(); 
  const item = await fetchFunction("https://api.noroff.dev/api/v1/auction/auth/register","POST",values)
  reset()  
}
  
  
  return (<div className="max-w-[400px] m-auto">
    <h1 className="md:text-3xl text-2xl font-bold">Register</h1>
      <form className="flex flex-col shadow-md p-8">
        <Input handleChange={handleChange} value={values.name} type="name" name="name" id="name" label="Name" placeholder="John Doe"/>
        <Input handleChange={handleChange} value={values.email} type="email" name="email" id="email" label="Email" placeholder="yourEmail@domain.com"/>
        <Input handleChange={handleChange} value={values.password} type="password" id="passwor" name="password" label="Password" placeholder="*******" />
        <Input handleChange={handleChange} value={values.avatar} type="url" py-4 id="avatar" name="avatar" label="Avatar" placeholder="https://www.example.com/" />
      <button onClick={handleSubmit} className="bg-red-200 py-3">Register</button>
      </form>
      </div>
)}

export default RegisterForm