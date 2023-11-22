type CreateListFormProps = {
    title: string;
    description?: string;
    tags?: string[];
    media?: string[];
    endsAt: string;
  }
const ListingPreview = ({ title,description,tags,media,endsAt }: ListingPreviewProps) => {

return(
    <section>
        <h2 className="font-bold text-gray-600">Preview</h2>
        <h3>{title? title}</h3>
    </section>
)
}