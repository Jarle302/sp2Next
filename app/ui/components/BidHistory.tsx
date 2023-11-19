type Bid = {
    id: string;
    amount: number;
    bidderName: string;
    created: string;
};


const BidHistory = ({ bids }: { bids: Bid[] }) => {
    return (<>
        <h2 className="text-xl font-bold ">Bid history</h2>
        <div className="overflow-y-auto h-[200px]">
            <div>{bids.map(bid => <div> <p>{bid.bidderName}</p> <p className="font-bold">{bid.amount}</p></div>)}</div>
        </div>
    </>
    )
}

export default BidHistory