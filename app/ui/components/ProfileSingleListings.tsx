import EditDelete from "./EditDelete";
import Link from "next/link";

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
  console.log(isCurrentUser);
  return (
    <div className="flex p-[10px] justify-between">
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
        className="w-[215px] h-[215px] object-cover"
        src={media[0]}
        alt="listing image"
      />
    </div>
  );
};

export default ProfileSingleListing;
