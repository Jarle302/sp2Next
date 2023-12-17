import LoginForm from "@/app/ui/components/loginForm";
import type { Metadata } from "next";
export const metadata: Metadata = {


    title: "Login | Collection Chest",
    description: "Collection Chest -Login to start discovering and bidding on unique collectibles from around the world. Welcome!",};
const Login = () => {
    return (
 <LoginForm/>
      );
  }
  export default Login