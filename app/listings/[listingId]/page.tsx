import { Suspense } from "react"
import ThumbnailGallery from "@/app/ui/components/ThumbnailGallery";
import SellerCard from "@/app/ui/components/SellerCard";
import BidHistory from "@/app/ui/components/BidHistory";
import ButtonBidGrp from "@/app/ui/components/ButtonBidGroup";

type paramType = {
    params: { listingId: string }

}
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

type ProductProps = {
    title: string;
    _count: { bids: number };
    media: string[];
    endsAt: string;
    description: string;
    id: string;
    bids: Bid[];
    seller: Seller;
};
const Listing = async ({ params }: paramType) => {

    const response = await fetch(`https://api.noroff.dev/api/v1/auction/listings/${params.listingId}?_bids=true&_seller=true`)
    const product: ProductProps = await response.json()
    const { title, _count, media, endsAt, description, id, bids, seller } = product
    console.log(product)
    return (
        <Suspense fallback={<div>LOADING....</div>}>
            <main className="pt-[74px]">
                <h1 className="text-gray-600 text-2xl align-center">{title}</h1>
                <div className="flex flex-col md:flex-row">
                    <ThumbnailGallery media={media} />
                    <div>
                        <h2 className="text-xl font-bold ">Product description</h2>
                        <p>{description}</p>
                        <div>
                            <SellerCard {...seller} />
                            <div className="bg-gray-600 flex flex flex-col md:flex-row"><h3 className="text-xl text-orange-100">Last bid</h3>
                                <div>
                                    <p className="font-bold text-green-200 text-2xl max-w-[max-content]">{bids[bids.length - 1].amount}</p>
                                    <p>By: {bids[bids.length - 1].bidderName}</p>
                                </div>
                                <ButtonBidGrp >Bid now!</ButtonBidGrp>
                            </div>
                        </div>
                        <BidHistory bids={bids} />
                    </div>
                </div>
            </main>
        </Suspense>
    )
}

export default Listing