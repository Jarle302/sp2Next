"use client"
import Input from "./Input"
import fetchFunction from "@/app/utils/fetchFunction"
import useForm from "@/app/utils/customHooks/useForm"



const BidNow = ({id}:{id:string}) => {
    const [values,handleChange,reset,setValues] = useForm({amount:""})
    function handleBid(event:React.MouseEvent<HTMLButtonElement, MouseEvent>){
    fetchFunction(`https://api.noroff.dev/api/v1/auction/listings/${id}/bids`,"POST",{amount:parseFloat(values.amount)})
    }
    return(
        <div className="flex flex-col">
            <Input type="number" name="amount" label="Bid Amount" id="amount" placeholder="Bid Amount" value={values.amount} handleChange={handleChange} />
<button className="bg-red-200 p-5 text-gray-600 font-bold text-2xl" onClick={handleBid}>Bid Now!</button>
        </div>
    )
}
export default BidNow