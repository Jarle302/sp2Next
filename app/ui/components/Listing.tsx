import ThumbnailGallery from "./ThumbnailGallery"
import SellerCard from "./SellerCard"
type ListingProps = {
    title: string;
    description?: string;
    tags?: string[];
    media?: string[];
    endsAt: string;
    id: string;
     bids, seller,
    _count: { bids: number },

  }
const Listing = ({ title, _count, media, endsAt, description, id, bids, seller}:ListingProps) => {
    return(

        <div className=" mt-[74px] gap-[40px] flex flex-col p-[20px] md:p-[40px] md:flex-row bg-gray-600 text-orange-100">
            <div className=" w-2/4">
                <ThumbnailGallery media={media} />
            </div>
            <div className=" w-2/4">
            <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
                <h2 className="text-2xl ">{description}</h2>
                
            <SellerCard {...seller} />
            <div>
                    <h3 className="text-xl text-orange-100">Last bid</h3>
                    <p className="font-bold text-green-200 text-2xl">{bids[bids.length - 1]?.amount}</p>
               <div className="flex flex-col w-[270px]"><input type="number" className="bg-orange-100 text-gray-600" />
        <button className="rounded-l bg-red-200 text-gray-600 px-2" onClick="" >Bid</button>         </div>
                </div>
            </div>
          
            
        </div>
    )
}

export default Listing



       