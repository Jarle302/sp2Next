"use client"
type buttongrp = {
    children: React.ReactNode;
}

const ButtonBidGrp = ({children }: buttongrp) => {
    return (
        <div className="flex w-full">
            <input className='py-[10px] w-1/2 rounded-tl-xl rounded-bl-xl border-solid border-2  border-red-200' type="number" name='bidAmount' id='bidAmount' />
            <button onClick={()=>console.log("test")} className="py-[10px] w-1/2 rounded-br-xl rounded-tr-xl bg-red-200"></button>
        </div>)
}

export default ButtonBidGrp