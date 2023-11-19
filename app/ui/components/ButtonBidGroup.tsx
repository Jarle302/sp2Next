type buttongrp = {
    children: React.ReactNode;
    handler: () => void;
}

const ButtonBidGrp = ({ handler, children }: buttongrp) => {
    return (
        <div className="flex w-full">
            <input className='py-[10px] w-1/2 rounded-tl-xl rounded-bl-xl border-solid border-2  border-red-200' type="number" name='bidAmount' id='bidAmount' />
            <button className="py-[10px] w-1/2 rounded-br-xl rounded-tr-xl bg-red-200" onClick={handler}>{children}</button>
        </div>)
}

export default ButtonBidGrp