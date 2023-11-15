"use client"
import { useState, useEffect } from 'react';
import allListings from "../../endpoints/urls"
import { MdArrowForwardIos } from "react-icons/md";
import Slide from './Slide';


const slideIntervalTime: number = 5000

const Carousell = () => {
    const [slider, setSlider] = useState([{ title: "Loading...", media: "Loading...", _count: { bids: 0 }, endsAt: "Loading..." }]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch("https://api.noroff.dev/api/v1/auction/listings")
            .then(res => res.json())
            .then(data => { console.log(data); setSlider(data.filter(listing => listing.media.length > 0)) })
    }, [])

    console.log(slider)
    function handleClick(decrement: boolean = true) {
        if (!decrement) {
            if (count === slider.length - 1) {
                setCount(0)
                console.log(count)
            } else {
                setCount((prev) => prev + 1)
                console.log(count)

            }
            return
        }

        else {
            if (count === 0) {
                setCount(slider.length - 1)
                console.log(count)

            } else {
                setCount((prev) => prev - 1)
                console.log(count)

            }
        }

    }

    useEffect(() => {
        const interval = setInterval(() => { setCount(prev => (prev + 1) % slider.length) }, slideIntervalTime);

        return () => clearInterval(interval)
    }, [slider, slideIntervalTime])

    return (
        <div className="flex">
            <button className='bg-gray-600 rounded-l-[12px] px-2' onClick={() => { handleClick() }}><MdArrowForwardIos className="rotate-180" />
            </button>
            {slider[count] && <Slide {...slider[count]} />}
            <button className='bg-gray-600 rounded-r-[12px]  px-2' onClick={() => { handleClick(false) }}><MdArrowForwardIos />
            </button>
        </div>
    )
}


export default Carousell