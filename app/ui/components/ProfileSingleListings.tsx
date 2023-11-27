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
            <div className="flex p-[10px] justify-between">
        <div className="max-w-[300px]">
            <h3 className="text-2xl font-bold">{title}</h3>
            <p>{description}</p>
            <p>{endsAt}</p>
            </div>
            <img className="w-[215px] h-[215px] object-cover" src={media[0]} alt="listing image" />
        </div>
    )
}

export default ProfileSingleListing