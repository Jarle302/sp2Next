import CreateListingForm from "@/app/ui/components/CreateListingForm";

import type { Metadata } from "next";
export const metadata: Metadata = {


    title: "New listing | Collection Chest",
    description: "Collection Chest - Create a new listing and give others the opportunity to discover and bid on your unique collectibles. Share your treasures with the world today.",};

const CreateListingPage = () => {
    return(
        <div className="md:min-h-[100vh]">
            <CreateListingForm />
        </div>
    )
}

export default CreateListingPage