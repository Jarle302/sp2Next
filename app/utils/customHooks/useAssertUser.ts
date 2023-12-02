import { usePathname } from "next/navigation";
import { useContext } from "react";
import { UserAccount } from "@/app/ui/components/ContextContainer";

function UseAssertUser() {
  const pathName = usePathname();
  const { userAccount, setUserAccount } = useContext(UserAccount);
  let isCurrentUser = false;

  if (pathName === `/profile/${userAccount.name}`) {
    isCurrentUser = true;
  }
  return isCurrentUser;
}

export default UseAssertUser;
