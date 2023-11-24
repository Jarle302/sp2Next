import Card from "./Card";



type props ={ [key:string]:string|string[]|undefined
    title: string;
    description?: string;
    tags?: string[];
    media?: string[];
    endsAt: string;
   }

const CardPreview = ({ title, media = [], endsAt, description="Your description" }:props) => {
    const placeholderCount = {bids:0}

return(
    <Card  id="0002" title={title} media={media} endsAt={endsAt} description={description}  _count={placeholderCount} />
)


}


export default CardPreview