import ThumbnailGallery from "./ThumbnailGallery";
import BidCountdown from "./BidCountdown";
import SellerCard from "./SellerCard";
import BidHistory from "./BidHistory";
import BidNow from "./BidNow";
import { useContext } from "react";
import { UserAccount } from "./ContextContainer";
import Link from "next/link";

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
  const { userAccount } = useContext(UserAccount);

  const lastBid = bids.length>0? Math.max(...(bids?.map((bid) => bid.amount))) : 0

  return (
    <div className="flex-wrap  height-[100vh] my-[74px] gap-[40px] flex flex-col p-[20px] md:p-[40px] md:flex-row bg-gray-600 text-orange-100">
      <h1 className="mb-[20px] text-3xl text-start md:text-4xl font-bold w-full">
        {title.slice(0, 60)}
      </h1>
      <div>
        {media?.[0] ? (
          <ThumbnailGallery media={media} />
        ) : (
          <img
            className="md:w-[360px] md:h-[360px] w-[300px] h-[300px]"
            src="/ListingPlaceholder.png"
          />
        )}
      </div>
      <div className="flex p-[20px] flex-col justify-evenly bg-[#3d4550] relative">
        <h2 className="text-2xl max-w-[300px] md:max-w-[700px]">{description}</h2>

        <BidCountdown endsAt={endsAt} />
        <div className="relative h-full">
          {!userAccount.name && (
            <div className="text-orange-100 absolute w-full h-full flex flex-col justify-center items-center z-20 backdrop-blur-sm">
              <div className="p-4 bg-gray-600">
                <p>
                  {" "}
                  <Link
                    className="underline decoration-solid font-bold decoration-red-200 hover:text-red-200 decoration-2"
                    href="/profile/auth/register">
                    Register
                  </Link>{" "}
                  to make a bid, or view bid history
                </p>{" "}
                <p className="mb-4">
                  Allready a user?{" "}
                  <Link
                    className="inline underline decoration-solid font-bold decoration-red-200 hover:text-red-200 decoration-2"
                    href="/profile/auth/login">
                    Login
                  </Link>{" "}
                </p>
              </div>
            </div>
          )}
          <SellerCard {...seller} />
          <h3 className="text-xl text-orange-100">Last bid</h3>
          <p className=" font-bold text-green-200 text-4xl py-[5px]">
            {lastBid}
          </p>
          <BidNow id={id} lastBid={lastBid} />
          <BidHistory bids={bids} />
        </div>
      </div>
    </div>
  );
};

export default Listing;
