"use client";
import { useRef, useContext } from "react";
import { ReducerContext } from "./ListingReducerContext";
import useForm from "@/app/utils/customHooks/useForm";
import Input from "./Input";
import { FaWindowClose } from "react-icons/fa";
import validateCreateListing from "@/app/utils/formValidation/createListing";
import fetchFunction from "@/app/utils/fetchFunction";
import { listingId } from "@/app/utils/api/endpoints";
import { FaEdit } from "react-icons/fa";
import { state,Listing } from "@/app/utils/types/types";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


type ListingEditerProps = Listing & {
  setState: React.Dispatch<React.SetStateAction<state>>;
};

const ListingEditer = ({
  title,
  description,
  id,
  media,
  tags,
  setState,
}: ListingEditerProps) => {
  const editRef = useRef<HTMLDialogElement>(null);
  const [values, handleChange, reset, setValues,formErrors] = useForm(
    {
      title,
      description,
      media,
      tags,
    },
    validateCreateListing
  );

  const { dispatch } = useContext(ReducerContext);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const submitObject = {
      ...values,
      tags: (typeof values.tags === "string" && values.tags?.split(",")) || [],
      media:
        (typeof values.media === "string" && values.media?.split(",")) || [],
    };
    fetchFunction(listingId(id), "PUT", submitObject);
    dispatch({ type: "UPDATE", payload: { ...submitObject, id } });
    setState((prev) => ({
      ...prev,
      listings: prev.listings.map((listing) =>
        listing.id === id ? { ...listing, ...submitObject } : listing
      ),
    }));
    toast.success(`Listing edited successfully!`)
    editRef.current?.close();
  }

  return (
    <>
      {" "}
      <dialog
        className="w-[280px] p-[20px] bg-orange-100 rounded-lg"
        ref={editRef}>
        <button onClick={() => editRef.current?.close()}>
          <FaWindowClose />
        </button>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <Input
            type="text"
            name="title"
            id="title"
            value={values.title}
            label="title"
            handleChange={handleChange}
          />
          <Input
            type="text"
            name="description"
            id="description"
            value={values.description}
            label="description"
            handleChange={handleChange}
          />

          <Input
            type="text"
            name="tags"
            id="tags"
            value={
              Array.isArray(values.tags) ? values.tags?.join(",") : values.tags
            }
            label="tags"
            handleChange={handleChange}
          />
          <Input
            type="text"
            name="media"
            id="media"
            value={
              Array.isArray(values.media)
                ? values.media?.join(",")
                : values.media
            }
            label="media"
            handleChange={handleChange}
          />
          <button type="submit">Save changes</button>
        </form>
      </dialog>
      <ToastContainer />
      <button onClick={() => editRef.current?.showModal()}>
        <FaEdit />
      </button>
    </>
  );
};

export default ListingEditer;
