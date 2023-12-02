"use client";
import { useContext, useRef } from "react";
import { UserAccount } from "./ContextContainer";
import changeAvatar from "@/app/utils/changeAvatar";
import useForm from "@/app/utils/customHooks/useForm";
import Input from "./Input";
import { FaWindowClose } from "react-icons/fa";

const AvatarChanger = ({ buttonClasses }: { buttonClasses?: string }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { userAccount, setUserAccount } = useContext(UserAccount);
  const [values, handleChange, reset, setValues] = useForm({
    avatar: userAccount.avatar,
  });

  return (
    <>
      {" "}
      <dialog ref={dialogRef}>
        <button onClick={() => dialogRef.current?.close()}>
          <FaWindowClose />
        </button>
        <form className="flex flex-col">
          <Input
            type="text"
            handleChange={handleChange}
            label="change Avatar"
            placeholder="must be a valid url"
            name="avatar"
            id="avatar"
            value={values.avatar}
          />
          <button
            onClick={async (e) => {
              e.preventDefault();
              console.log("values.avatar", values.avatar);
              const response = await changeAvatar(
                userAccount.name,
                values.avatar
              );
              setUserAccount({ ...userAccount, avatar: values.avatar });
              console.log(response);
            }}>
            Change Avatar
          </button>
        </form>
      </dialog>
      <button
        className={buttonClasses}
        onClick={() => dialogRef.current?.showModal()}>
        Change Avatar
      </button>
    </>
  );
};

export default AvatarChanger;
