import Card from "./Card";

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

type CardProps = {
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
