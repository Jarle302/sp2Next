import { Suspense } from "react"
import Carusel from "../../ui/components/Carusell"
import ImageComponent from "@/app/ui/components/ImageComponent";
type paramType = {
    params: { listingId: string }, title: string;
    _count: { bids: number };
    media: string[];
    endsAt: string;
    description: string;
    id: string;
}
type ProductProps = {
    title: string;
    _count: { bids: number };
    media: string[];
    endsAt: string;
    description: string;
    id: string;
};

const Listing = async ({ params }: paramType) => {

    const response = await fetch(`https://api.noroff.dev/api/v1/auction/listings/${params.listingId}`)
    const product: ProductProps = await response.json()
    const { title, _count, media, endsAt, description, id } = product
    return (
        <Suspense fallback={<div>LOADING....</div>}>
            <div>
                <h1>{title}</h1>
                <div>
                    {media && media.length > 0 && media.map(image => <img src={image} alt="" />)}
                </div>
                <div><img src="media[0]" alt="" /></div>
                <p>{description}</p>
            </div>
        </Suspense>
    )
}

export default Listing