"use client"
type buttongrp = {
    children: React.ReactNode;
}

const ButtonBidGrp = ({children }: buttongrp) => {
    return (
        <div className="flex w-full text-orange-100 p-8 w-[250px]">
            <input className='py-[10px] w-1/2  border-solid border-2  border-gray-600' type="number" name='bidAmount' id='bidAmount' />
            <button onClick={()=>console.log("test")} className="py-[10px] w-1/2  bg-gray-600 border-solid border-2  border-red-200 rounded-2xl">{children}</button>
        </div>)
}

export default ButtonBidGrp