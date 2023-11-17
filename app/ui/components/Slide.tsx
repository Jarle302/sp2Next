import { lato } from '../fonts/fonts';
import getTimeRemaining from "../../utils/getTimeRemaining";
import { type } from 'os';
import React from 'react';

type SlideProps = {
    children?: React.ReactNode;
    title: string;
    _count: number;
    media: string[];
    endsAt: Date;
    description: string;
};
const Slide = ({ children, title, _count, media, endsAt }: SlideProps) => {

    const timeRemaining = getTimeRemaining(endsAt);

    return (
        <div className="flex flex-col max-w-[800px]">

            <h3 className='transform -translate-x-1 translate-y-12 bg-gray-700 text-orange-200 text-2xl p-2 m-auto'>{title}</h3>
            <img className='w-[350px] h-[350px] object-cover rounded-2xl' src={media[0]} alt="Carousel Item" />
            <div className="px-2 transform -translate-x-[1px] -translate-y-[48px] rounded-2xl bg-gray-700 bg-opacity-90">
                <p className='text-orange-200'>Bids {_count.bids ? _count.bids : 0}</p>
                <p>
                    {timeRemaining.days >= 0
                        ? (
                            <>
                                <span className={`text-red-200 text-bold ${lato.className}`}>Ends in </span>
                                {timeRemaining.days} days {timeRemaining.hours} hours {timeRemaining.minutes} minutes
                            </>
                        )
                        : "Auction has ended"
                    }
                </p>
            </div>

        </div>
    )
}



export default Slide