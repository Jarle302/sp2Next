import ProfileSingleListing from "./ProfileSingleListings";
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

type listings = listing[];

type listingsObject = {
  listings: listings;
  isCurrentUser: boolean;
  setState: React.Dispatch<React.SetStateAction<state>>;
};

const ProfileListings = ({
  listings,
  isCurrentUser,
  setState,
}: listingsObject) => {
  console.log(isCurrentUser, "from profile listings");
  return (
    <section className=" lg:h-[100%] bg-gray-600 lg:bg-orange-100 lg:text-gray-600 py-[300px] lg:py-[0px] text-orange-100">
      <h2 className="text-4xl text-center my-[22px]">Listings</h2>
      <div className="lg:h-[100%] lg:border lg:border-gray-600 lg:border-4 lg:rounded-2xl overflow-y-auto h-[600px]">
        {listings?.length >= 1 ? (
          listings.map((listing) => (
            <ProfileSingleListing
              key={listing.id}
              {...listing}
              isCurrentUser={isCurrentUser}
              setState={setState}
            />
          ))
        ) : (
          <p>No listings</p>
        )}
      </div>
    </section>
  );
};
export default ProfileListings;
