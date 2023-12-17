"use client";
import { useContext, useRef } from "react";
import { UserAccount } from "./ContextContainer";
import changeAvatar from "@/app/utils/changeAvatar";
import useForm from "@/app/utils/customHooks/useForm";
import Input from "./Input";
import { FaWindowClose } from "react-icons/fa";
import changeAvatarFormEval from "@/app/utils/formValidation/changeAvatar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isValidUrl } from "@/app/utils/formValidation/changeAvatar";
const AvatarChanger = ({ buttonClasses }: { buttonClasses?: string }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { userAccount, setUserAccount } = useContext(UserAccount);
  const [values, handleChange, reset, setValues] = useForm(
    {
      avatar: userAccount.avatar,
    },
    changeAvatarFormEval
  );

  return (
    <>
      {" "}
      <dialog
        className="w-[280px] p-[20px] bg-orange-100 rounded-lg"
        ref={dialogRef}>
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
            className="bg-red-200"
            onClick={async (e) => {
              e.preventDefault();
              if(!isValidUrl(values?.avatar)){
                toast.error("Please fill out all the required fields")
                return
              }
              const response = await changeAvatar(
                userAccount.name,
                values.avatar
              );
                toast.success(`Avatar changed successfully!`)
                setUserAccount({ ...userAccount, avatar: values.avatar });
              reset();
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
      <ToastContainer />
    </>
  );
};

export default AvatarChanger;
