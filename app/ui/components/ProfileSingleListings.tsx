import EditDelete from "./EditDelete";
import Link from "next/link";
import { state } from "@/app/utils/types/types";
type listing = {
  id: string;
  title: string;
  description: string;
  media: string[];
  created: string;
  updated: string;
  endsAt: string;
  tags: string[];
};

type listingProps = listing & {
  isCurrentUser: boolean;
  setState: React.Dispatch<React.SetStateAction<state>>;
};

const ProfileSingleListing = ({
  id,
  title,
  description,
  media,
  created,
  updated,
  endsAt,
  isCurrentUser,
  tags,
  setState,
}: listingProps) => {
  return (
    <div className="flex p-[5px] justify-between">
      {isCurrentUser && (
        <EditDelete {...{ title, description, id, media, tags, setState }} />
      )}
      <div className="max-w-[300px]">
        <Link href={`/listings/${id}`}>
          <h3 className="text-2xl font-bold break-words	">{title}</h3>
        </Link>
        <p>{description}</p>
        <p>{`Ends ${endsAt.split("T")[0]}`}</p>
      </div>
      <img
        className="w-[200px] h-[200px] object-cover"
        src={media[0] ? media[0] : "/ListingPlaceholder.png"}
        alt="listing image"
      />
    </div>
  );
};

export default ProfileSingleListing;
