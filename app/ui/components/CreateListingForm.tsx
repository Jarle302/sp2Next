"use client";
import Input from "./Input";
import Button from "./Button";
import ListingPreview from "./ListingPreview";
import CardPreview from "./CardPreview";
import useForm from "@/app/utils/customHooks/useForm";
import fetchFunction from "@/app/utils/fetchFunction";
import { useState, useContext } from "react";
import Descriptify from "@/app/utils/Descriptify";
import Loader from "./Loader";
import validateCreateListing from "@/app/utils/formValidation/createListing";
import { UserAccount } from "./ContextContainer";
import Link from "next/link";

type CreateListFormProps = {
  [key: string]: string | string[] | undefined;
  title: string;
  description: string;
  tags?: string[];
  media?: string[];
  endsAt: string;
};
const CreateListingForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cardOrDetails, setCardOrDetails] = useState<"card" | "details">(
    "card"
  );

  const { userAccount, setUserAccount } = useContext(UserAccount);

  const [values, handleChange, reset, setValues, formErrors] =
    useForm<CreateListFormProps>(
      {
        title: "",
        description: "",
        tags: [],
        media: [],
        endsAt: "",
      },
      validateCreateListing
    );

  function pushToArray(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    event.stopPropagation();
    const input = event.currentTarget.previousSibling
      ?.lastChild as HTMLInputElement;
    let { name, value } = input;
    setValues((prev: CreateListFormProps) => {
      const isThisAnArray = prev[name];
      let newElement;
      if (Array.isArray(isThisAnArray)) {
        newElement = [...isThisAnArray, value];
      } else newElement = [value];
      return { ...prev, [name]: newElement };
    });
    input.value = "";
  }
  console.log(values);

  return (
    <>
      {!userAccount.name && (
        <div className="text-orange-100 fixed w-full h-full flex flex-col justify-center items-center text-2xl z-20 backdrop-blur-sm">
          <div className="p-4 bg-gray-600">
            <p>
              {" "}
              <Link
                className="underline decoration-solid font-bold decoration-red-200 hover:text-red-200 decoration-2"
                href="/profile/auth/register">
                Register
              </Link>{" "}
              to create a listing
            </p>{" "}
            <p className="mb-4">
              Allready a user?{" "}
              <Link
                className="inline underline decoration-solid font-bold decoration-red-200 hover:text-red-200 decoration-2"
                href="/profile/auth/login">
                Login
              </Link>{" "}
            </p>
          </div>
        </div>
      )}
      <div className="flex justify-evenly flex-col md:flex-row mt-[74px]">
        <form
          action=""
          className="shadow-md flex flex-col justify-evenly p-[20px] min-w-[300px]">
          <Input
            handleChange={handleChange}
            type="text"
            name="title"
            label="title"
            id="title"
            value={values.title}
            placeholder="title"
            formErrors={formErrors.title}
          />
          <div className="flex relative">
            <Input
              handleChange={handleChange}
              type="textarea"
              name="description"
              label="description"
              id="description"
              value={values.description}
              placeholder="description"
              formErrors={formErrors.description}
              required={false}
            />

            {isLoading && <Loader className="bg-orange-100" />}
          </div>
          <button
            className="py-[10px] bg-red-200 mt-[20px]"
            onClick={async (e) => {
              e.preventDefault();
              setIsLoading((prev) => !prev);
              try {
                const data = await Descriptify(values);
                setValues((prev: CreateListFormProps) => ({
                  ...prev,
                  description: data.message,
                }));
              } catch (error) {
                console.log(error);
              } finally {
                setIsLoading((prev) => !prev);
              }
            }}>
            Get help from AI
          </button>
          <Input
            handleChange={handleChange}
            type="date"
            name="endsAt"
            label="endsAt"
            id="endsAt"
            value={values.endsAt}
            placeholder=""
            formErrors={formErrors.endsAt}
          />
          <div className="flex flex-col">
            <Input
              type="text"
              name="media"
              label="media"
              id="media"
              placeholder="media"
              formErrors={formErrors.media?.[0]}
              required={false}
            />
            <button
              className="bg-red-200"
              onClick={(event) => pushToArray(event)}>
              Add Media
            </button>
          </div>
          <div className="flex flex-col">
            <Input
              type="text"
              name="tags"
              label="tags"
              id="tags"
              placeholder="tags"
              formErrors={formErrors.tags?.[0]}
              required={false}
            />
            <button
              className="bg-red-200"
              onClick={(event) => pushToArray(event)}>
              Add Tag
            </button>
          </div>
          <button
            className="py-[10px] bg-red-200 mt-[20px]"
            onClick={(e) => {
              e.preventDefault();
              if (!formErrors.title && !formErrors.endsAt) {
                fetchFunction(
                  "https://api.noroff.dev/api/v1/auction/listings",
                  "POST",
                  values
                );
              }
            }}>
            Create Listing
          </button>
        </form>
        <section className="relative w-full md:w-[50%] p-[20px] md:p-[0px] h-[833px] md:h-auto">
          <h2 className="text-4xl">Preview</h2>
          {cardOrDetails === "card" && (
            <div>
              {" "}
              <Button
                className={"my-6"}
                click={() => setCardOrDetails(() => "details")}>
                {" "}
                Show as listing
              </Button>{" "}
              <CardPreview
                id="0002"
                bids={[
                  {
                    id: "0001",
                    amount: 0,
                    bidderName: "placeholder",
                    created: "placeholder",
                  },
                ]}
                _count={{ bids: 0 }}
                seller={{
                  name: "placeholder",
                  email: "placeholder",
                  avatar: "#",
                }}
                {...values}
              />{" "}
            </div>
          )}
          {cardOrDetails === "details" && (
            <div>
              {" "}
              <Button
                className={"my-6"}
                click={() => setCardOrDetails(() => "card")}>
                Show as Card
              </Button>{" "}
              <ListingPreview {...values} />{" "}
            </div>
          )}
        </section>
      </div>
      )
    </>
  );
};

export default CreateListingForm;
