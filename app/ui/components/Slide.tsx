import { lato } from '../fonts/fonts';
import getTimeRemaining from "../../utils/getTimeRemaining";

const Slide = ({ children, title, _count, media, endsAt }) => {

    const timeRemaining = getTimeRemaining(endsAt);

    return (
        <div className="flex flex-col max-w-[800px] bg-gray-600">

            <h3 className='bg-gray-600 text-orange-200 text-2xl p-2 m-auto'>{title}</h3>
            <img className='w-[350px] h-[350px] object-cover rounded-2xl' src={media[0]} alt="Carousel Item" />
            <div className="bg-gray-600 p-2 text-white">
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