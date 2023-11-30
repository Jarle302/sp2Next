"use client";
import Input from "./Input";
import fetchFunction from "@/app/utils/fetchFunction";
import useForm from "@/app/utils/customHooks/useForm";
import updateCredit from "@/app/utils/updateCredit";
import { useContext } from "react";
import { UserAccount } from "./ContextContainer";

const BidNow = ({ id }: { id: string }) => {
  const { userAccount, setUserAccount } = useContext(UserAccount);
  const [values, handleChange, reset, setValues] = useForm({ amount: "" });
  async function handleBid() {
    const data = await fetchFunction(
      `https://api.noroff.dev/api/v1/auction/listings/${id}/bids`,
      "POST",
      { amount: parseFloat(values.amount) }
    );
    reset();
    const cred = await updateCredit(
      userAccount.name,
      setUserAccount,
      userAccount
    );
  }
  return (
    <div className="flex flex-col">
      <Input
        type="number"
        name="amount"
        label="Bid Amount"
        id="amount"
        placeholder="Bid Amount"
        value={values.amount}
        handleChange={handleChange}
      />
      <button
        className="bg-red-200 p-5 text-gray-600 font-bold text-2xl"
        onClick={(e) => {
          e.preventDefault();
          handleBid();
        }}>
        Bid Now!
      </button>
    </div>
  );
};
export default BidNow;
