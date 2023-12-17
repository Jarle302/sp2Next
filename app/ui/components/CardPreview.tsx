import Card from "./Card";
import { ListingProps as CardProps } from "@/app/utils/types/types";




const CardPreview = ({
  title,
  media = [],
  endsAt,
  description = "Your description",
}: CardProps) => {
  const placeholderCount = { bids: 0 };

  return (
    <Card
      id="0002"
      title={title}
      media={media}
      endsAt={endsAt}
      description={description}
      _count={placeholderCount}
      seller={{
        name: "placeholder",
        email: "placeholder",
        avatar: "placeholder",
      }}
      bids={[
        {
          id: "0001",
          amount: 0,
          bidderName: "placeholder",
          created: "placeholder",
        },
      ]}
    />
  );
};

export default CardPreview;
