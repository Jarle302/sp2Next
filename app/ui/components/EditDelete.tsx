import DeleteButton from "./DeleteButton";
import ListingEditer from "./ListingEditer";
import { state } from "@/app/utils/types/types";

type Listing = {
  title: string;
  description: string;
  tags: string[] | string;
  media: string[] | string;
  id: string;
};



type ListingEditerProps = Listing & {
  setState: React.Dispatch<React.SetStateAction<state>>;
};

export default function EditDelete({
  id,
  title,
  description,
  media,
  tags,
  setState,
}: ListingEditerProps) {
  return (
    <div className="text-2xl">
      <DeleteButton
        className="bg-red-200 text-gray-600"
        id={id}
        setState={setState}
      />
      <ListingEditer {...{ title, description, id, media, tags, setState }} />
    </div>
  );
}
