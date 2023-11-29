import ThumbnailGallery from "./ThumbnailGallery";
import BidCountdown from "./BidCountdown";
import SellerCard from "./SellerCard";
import BidHistory from "./BidHistory";
import BidNow from "./BidNow";

type Bid = {
  id: string;
  amount: number;
  bidderName: string;
  created: string;
};

type Seller = {
  name: string;
  email: string;
  avatar: string;
};

type ListingProps = {
  title: string;
  description?: string;
  tags?: string[];
  media?: string[];
  endsAt: string;
  id: string;
  bids: Bid[];
  seller: Seller;
  _count: { bids: number };
};
const Listing = ({
  title,
  _count,
  media,
  endsAt,
  description,
  id,
  bids,
  seller,
}: ListingProps) => {
  return (
    <div className="flex-wrap rounded-2xl height-[100vh] my-[74px] gap-[40px] flex flex-col p-[20px] md:p-[40px] md:flex-row bg-gray-600 text-orange-100">
      <div>
        <h1 className="mb-[20px] text-3xl text-center md:text-7xl font-bold">
          {title}
        </h1>
        <ThumbnailGallery media={media} />
      </div>
      <div className="flex p-[20px] flex-col justify-evenly bg-[#3d4550]">
        <h2 className="text-2xl max-w-[700px]">{description}</h2>

        <SellerCard {...seller} />
        <BidCountdown endsAt={endsAt} />
        <div>
          <h3 className="text-xl text-orange-100">Last bid</h3>
          <p className=" font-bold text-green-200 text-4xl py-[5px]">
            {bids && bids[bids.length - 1]?.amount}
          </p>
          <BidNow id={id} />
        </div>
        <BidHistory bids={bids} />
      </div>
    </div>
  );
};

export default Listing;
