"use client"
import getTimeRemaining from "../../utils/getTimeRemaining";
import { lato } from '../fonts/fonts';
import Carusel from "./Carusell";
import ImageComponent from "./ImageComponent";

type CardProps = {
    title: string;
    _count: { bids: number };
    media: string[];
    endsAt: string;
    description: string;
};

const Card = ({ title, _count, media, endsAt, description }: CardProps) => {
    type ImageComponentProps = { src: string, width?: string, height?: string }[]
    let imageProps = [{ src: media[0] }]
    if (media.length > 1) {
        imageProps = media.map((image) => ({ src: image, width: "183px", height: "180px" }))
    }
    console.log(imageProps)
    const timeRemaining = getTimeRemaining(endsAt);
    return (
        <div className=" w-[250px] h-[380px] border border-solid border-gray-600 border-3 rounded-2xl bg-orange-100 flex flex-col items-center shadow-lg">
            <div className='flex flex-col justify-between  w-full h-full rounded-xl  border-2 border-solid border-gray-600 border-t-none'>
                <div>
                    <h3 className="w-full font-bold bg-gray-700 rounded-t-xl mb-3.25 self-center text-center text-white">{title}</h3>
                    {media && media.length > 1 ? <Carusel Component={ImageComponent} items={imageProps} /> : <img className='w-[250px] h-[180px] object-cover' src={media[0]} alt="Carousel Item" />}
                    <div className='flex flex-col items-center gap-3 '>
                        <div className='flex w-full justify-between border border-solid border-gray-600 bg-gray-600 text-white p-1'>
                            <p className='text-orange-200 '>Bids {_count?.bids ? _count.bids : 0}</p>
                            <p>
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
                <div className="flex w-full">
                    <input className='py-[10px] w-1/2 rounded-tl-xl rounded-bl-xl border-solid border-2  border-red-200' type="number" name='bidAmount' id='bidAmount' />
                    <button className="py-[10px] w-1/2 rounded-br-xl rounded-tr-xl bg-red-200" onClick={() => { console.log("hello") }}>Bid now</button>
                </div>
            </div>
        </div>
    )
}

export default Card