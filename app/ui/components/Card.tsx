"use client"
import getTimeRemaining from "../../utils/getTimeRemaining";
import { lato } from '../fonts/fonts';
import Carusel from "./Carusell";
import ImageComponent from "./ImageComponent";
import Link from "next/link";
import Input from "./Input";



type CardProps = {
    title: string;
    _count: { bids: number };
    media: string[];
    endsAt: string;
    description: string;
    id: string;
};

const Card = ({ title, _count, media, endsAt, description, id }: CardProps) => {
    let imageProps = media && media.length > 0 ? [{ src: media[0] }] : []
    if (media && media.length > 1) {
        imageProps = media.map((image) => ({ src: image, width: "183px", height: "180px" }))
    }
    const timeRemaining = getTimeRemaining(endsAt);
    return (
        <div className=" w-[285px] h-[352px] border border-solid border-gray-600 border-3 rounded-2xl bg-orange-100 flex flex-col items-center shadow-lg">
            <div className='flex flex-col justify-between  w-full h-full rounded-xl  border-2 border-solid border-gray-600 border-t-none'>
                <div>
                    <h3 className="w-full font-bold bg-gray-700 rounded-t-xl mb-3.25 self-center text-center text-white">{title}</h3>
                    {media && media.length > 1 ? < Link href={`./listings/${id}`}> <Carusel Component={ImageComponent} items={imageProps} /></Link> : <Link href={`./listings/${id}`}><img className='w-[283px] h-[180px] object-cover' src={media[0]} alt="Carousel Item" /></Link>}
                    <div className='flex flex-col items-center gap-3 '>
                        <div className='flex w-full justify-between border border-solid border-gray-600 bg-gray-600 text-white p-1'>
                            <p className='text-orange-200 '>Bids {_count?.bids ? _count.bids : 0}</p>
                            <p suppressHydrationWarning>
                                {timeRemaining.days >= 0
                                    ? (
                                        <>
                                            <span className={`text-red-200 text-bold ${lato.className}`}>Ends in </span>
                                            {timeRemaining.days} d {timeRemaining.hours} h {timeRemaining.minutes} m
                                        </>
                                    )
                                    : "Ended"
                                }
                            </p>
                        </div>
                        <p className="pl-1 max-w-[223px] max-h-[43px] self-start overflow-hidden">{description}</p>
                    </div>
                </div>
               <div className="w-full font-bold text-center p-[10px] flex gap-2">
<button className="w-2/4 border border-2 border-gray-600 block m-auto text-orange-100 bg-gray-600">Bid now</button>
<Link className="w-2/4 border border-2 border-gray-600 block m-auto" href={`./listings/${id}`}>Read more</Link> 
  </div>
                </div>
            </div>
       
    )
}

export default Card