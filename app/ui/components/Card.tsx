"use client"
import { useState } from 'react';
import Button from './Button'
import getTimeRemaining from "../../utils/getTimeRemaining";
import Image from 'next/image'
import { lato } from '../fonts/fonts';


const Card = ({ children, title, _count, media, endsAt }) => {

    const timeRemaining = getTimeRemaining(endsAt);
    return (
        <div className=" w-[250px] h-[380px] rounded-2xl bg-gray-400 p-2 flex flex-col items-center">
            <h3 className="my-2">{title}</h3>
            <div className='flex flex-col border border-solid border-gray-600 w-full h-[337px] rounded-xl'>
                {media && <img className='w-[250px] h-[180px] object-cover rounded-t-xl' src={media[0]} alt="Carousel Item" />}
                <div className='flex flex-col items-center gap-3'>
                    <div className='flex w-full justify-between'>
                        <p className='text-orange-200 border border-solid border-gray-600 '>Bids {_count?.bids ? _count.bids : 0}</p>
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
                    <p className="pl-1 max-w-[223px] max-h-[43px] self-start overflow-hidden">testtesttesttestt esttesttesttest testtesttesttestte sttesttesttes ttesttesttesttesttesttesttesttesttesttesttesttest</p>
                    <div className="flex w-full mh-auto mt-[22px]">
                        <button className='py-[4px] w-1/2 rounded-tl-xl rounded-bl-xl bg-red-200' onClick={() => { console.log("hello") }}>Bid</button>
                        <button className="py-[4px] w-1/2 rounded-br-xl rounded-tr-xl border-solid border-2  border-red-200" onClick={() => { console.log("hello") }} isSecondary={true}>Read more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card