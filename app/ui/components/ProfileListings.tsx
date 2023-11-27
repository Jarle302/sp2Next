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
       <section className="lg:border lg:border-3 lg:rounded-2xl min-h-[50vh] bg-gray-600 lg:bg-orange-100 lg:text-gray-600 py-[300px] lg:py-[0px] text-orange-100">
        <h2 className="text-4xl text-center" >Listings</h2>
        <div className="overflow-y-auto h-[600px]">
          { listings?.length >1? listings.map(listing => <ProfileSingleListing key={listing.id} {...listing} />): <p>No listings</p>}
        </div>
       </section>
    );
}
export default ProfileListings;