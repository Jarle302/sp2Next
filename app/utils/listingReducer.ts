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

type ListingProps = {
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

type Action =
  | { type: "ADD"; payload: ListingProps }
  | { type: "DELETE"; payload: { id: string } }
  | {
      type: "UPDATE";
      payload: {
        title: string;
        description?: string;
        tags?: string[];
        media?: string[];
        endsAt?: string;
        id?: string;
        bids?: Bid[];
        seller?: Seller;
        _count?: { bids: number };
      };
    };

export default function listingReducer(
  state: ListingProps[],
  action: Action
): ListingProps[] {
  switch (action.type) {
    case "ADD": {
      return [...state, action.payload];
    }
    case "DELETE": {
      return state.filter((item) => item.id !== action.payload.id);
    }
    case "UPDATE": {
      return state.map((item) =>
        item.id === action.payload.id ? { ...item, ...action.payload } : item
      );
    }
    default:
      return state;
  }
}
