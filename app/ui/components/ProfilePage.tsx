import ProfileInfo from "./ProfileInfo";
import ProfileListings from "./ProfileListings";

type ProfileType = {
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

  

const ProfilePage= ({name,email,avatar,credits,wins,listings,_count}:ProfileType)=>{
    return (
        <div>
        <section>
            <div>
    <h1>{name}</h1>
    <h2>{email}</h2>
    <img src={avatar} alt="profile picture" />
<div><ProfileInfo category="Credits" value={credits} />
<ProfileInfo category="Auctions" value={_count?.listings} />
<ProfileInfo category="Wins" value={wins?.length} />
</div>
            </div>
    
    </section>
<ProfileListings listings={listings} />
</div>
    )
}


export default ProfilePage