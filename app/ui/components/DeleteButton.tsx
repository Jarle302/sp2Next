import deleteListing from "@/app/utils/api/deleteListing";
import ListingReducerContext from "./ListingReducerContext";
import { ReducerContext } from "./ListingReducerContext";
import { useContext } from "react";

export default function DeleteButton({
  id,
  className,
}: {
  id: string;
  className: string;
}) {
  const { state, dispatch } = useContext(ReducerContext);

  return (
    <button
      className={className}
      onClick={async () => {
        const status = await deleteListing(id);
        console.log(status);
      }}>
      Delete
    </button>
  );
}
