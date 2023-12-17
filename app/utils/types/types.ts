export type Bid = {
    id: string;
    amount: number;
    bidderName: string;
    created: string;
};






  type UserType = {
    name: string;
    email: string;
    avatar: string;
    credits: number;
    wins: string[];
    _count: {
      listings: number;
    };
  };
  


export type  Seller = {
    name: string;
    email: string;
    avatar: string;
  };
  
 

 export type ListingProps = {
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


  
export type state = {
    name: string;
    email: string;
    avatar: string;
    credits: number;
    wins: string[];
    listings: {
      id: string;
      title: string;
      description: string;
      media: string[];
      tags: string[];
      created: string;
      updated: string;
      endsAt: string;
    }[];
    _count: {
      listings: number;
    };
  };



export  type Listing = {
    title: string;
    description: string;
    tags: string[] | string;
    media: string[] | string;
    id: string;
  };



  
