import Card from "./Card";
type CardPreviewProps = {
    title: string;
    media: string[];
    endsAt: string;
    description: string;
  
};

const CardPreview = ({ title, media, endsAt, description }:CardPreviewProps) => {
    const placeholdeCount = {bids:0}

return(
    <Card  id="0002" title={title} media={media} endsAt={endsAt} description={description}  _count={placeholdeCount} />
)


}


export default CardPreview