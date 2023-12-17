import RegisterForm from "@/app/ui/components/RegisterForm";
import type { Metadata } from "next";
export const metadata: Metadata = {


  title: " Register | Collection Chest",
  description: "Collection Chest - Register to start discovering and bidding on unique collectibles from around the world. Join our community today.",};
const Register = () => {
    

  
  return (
    <RegisterForm />
  );

}
export default Register