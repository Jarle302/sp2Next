import ProfileSingleListing from "./ProfileSingleListings";

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
    listings: listings

}

  

const ProfileListings = ({listings}:listingsObject) => {
    return (
       <section>
        <h2>Listings</h2>
        <div className="overflow-y-auto">
          { listings?.length >1? listings.map(listing => <ProfileSingleListing key={listing.id} {...listing} />): <p>No listings</p>}
        </div>
       </section>
    );
}
export default ProfileListings;