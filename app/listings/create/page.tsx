import CreateListingForm from "@/app/ui/components/CreateListingForm";


const CreateListingPage = () => {
    return(
        <div className="md:min-h-[100vh]">
            <h1 className="text-6xl text-center ">Create Listing</h1>
            <CreateListingForm />
        </div>
    )
}

export default CreateListingPage