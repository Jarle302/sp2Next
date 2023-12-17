import deleteListing from "@/app/utils/api/deleteListing";
import ListingReducerContext from "./ListingReducerContext";
import { ReducerContext } from "./ListingReducerContext";
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { state } from "@/app/utils/types/types";  


export default function DeleteButton({
  id,
  className,
  setState,
}: {
  id: string;
  className: string;
  setState?: React.Dispatch<React.SetStateAction<state>>;
}) {
  const { state, dispatch } = useContext(ReducerContext);
  return (
    <>
    <button
      className={className}
      onClick={async () => {
        deleteListing(id);
        toast.success("Listing successfully deleted!")
        dispatch({ type: "DELETE", payload: { id } });
        if (setState)
          setState((prev) => ({
            ...prev,
            listings: prev.listings.filter((listing) => listing.id !== id),
            _count: { listings: prev._count.listings - 1 },
          }));
     }}>
      <MdDelete />
    </button>
    <ToastContainer />
    </>
  );
}
