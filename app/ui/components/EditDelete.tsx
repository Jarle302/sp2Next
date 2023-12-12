import DeleteButton from "./DeleteButton";
import ListingEditer from "./ListingEditer";

type Listing = {
  title: string;
  description: string;
  tags: string[] | string;
  media: string[] | string;
  id: string;
};

type state = {
  name: string;
  email: string;
  avatar: string;
  credits: number;
  wins: string[];
  listings: {
    id: string;
    title: string;
    description: string;
    media: string[];
    tags: string[];
    created: string;
    updated: string;
    endsAt: string;
  }[];
  _count: {
    listings: number;
  };
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
    <div>
      <DeleteButton
        className="bg-red-200 text-gray-600"
        id={id}
        setState={setState}
      />
      <ListingEditer {...{ title, description, id, media, tags, setState }} />
    </div>
  );
}
