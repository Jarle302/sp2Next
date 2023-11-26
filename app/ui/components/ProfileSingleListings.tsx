type listing = {
    id: string;
    title: string;
    description: string;
    media: string[];
    created: string;
    updated: string;
    endsAt: string;
  };


const ProfileSingleListing = ({ id,title,description,media,created,updated,endsAt }:listing) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <img src={media[0]} alt="listing image" />
            <p>{created}</p>
            <p>{updated}</p>
            <p>{endsAt}</p>
        </div>
    )
}

export default ProfileSingleListing