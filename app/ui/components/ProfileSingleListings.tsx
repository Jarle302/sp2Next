import DeleteButton from "./DeleteButton";

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
  setState,
}: listingProps) => {
  console.log(isCurrentUser);
  return (
    <div className="flex p-[10px] justify-between">
      {isCurrentUser && (
        <DeleteButton
          className="bg-red-200 text-gray-600"
          id={id}
          setState={setState}
        />
      )}
      <div className="max-w-[300px]">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p>{description}</p>
        <p>{endsAt}</p>
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
