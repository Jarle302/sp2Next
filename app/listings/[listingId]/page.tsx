import { Suspense } from "react"
import ThumbnailGallery from "@/app/ui/components/ThumbnailGallery";
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
            <main className="pt-[74px]">
                <div>
                    <h1 className="text-gray-600 text-2xl align-center">{title}</h1>
                    <ThumbnailGallery media={media} />
                    <p>{description}</p>
                </div>
            </main>
        </Suspense>
    )
}

export default Listing