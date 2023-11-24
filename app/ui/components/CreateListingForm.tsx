"use client"
import Input from "./Input";
import Button from "./Button";
import ListingPreview from "./ListingPreview";
import CardPreview from "./CardPreview";
import useForm from "@/app/utils/customHooks/useForm";
import fetchFunction from "@/app/utils/fetchFunction";
import { useState } from "react";
type CreateListFormProps = {
    title: string;
    description?: string;
    tags?: string[];
    media?: string[];
    endsAt: string;
  }

  
  const CreateListingForm = () => {
    const [cardOrDetails,setCardOrDetails] = useState<"card"|"details">("card")
    
    const [values,handleChange,reset,setValues] = useForm({
      title: "",
      description: "",
      tags: [],
      media: [],
      endsAt: "",
    }) 
    
    function pushToArray(event:React.ChangeEvent<HTMLInputElement>){
      event.preventDefault()
      event.stopPropagation();
      const input = event.currentTarget.previousSibling?.lastChild as HTMLInputElement;
      let {name,value} = input
      console.log(input,event.currentTarget.previousSibling,event.currentTarget)
    setValues((prev) =>{return({...prev,[name]: Array.isArray(prev[name])?[...prev[name],value]:[value]})})
    input.value = ""
    }
console.log(values)

    return (
      <div className="flex justify-evenly flex-col md:flex-row mt-[74px]">
      <form action="" className="shadow-md flex flex-col justify-evenly p-[20px] min-w-[300px]">
<Input handleChange={handleChange} type="text" name="title" label="title" id="title" value={values.title} placeholder="title"  />
<Input  handleChange={handleChange} type="text" name="description" label="description" id="description" value={values.description} placeholder="description"  />
<Input  handleChange={handleChange} type="date" name="endsAt" label="endsAt" id="endsAt" value={values.endsAt} placeholder=""  />
<div className="flex flex-col">
<Input  type="text" name="media" label="media" id="media"  placeholder="media"  /><button className="bg-red-200" onClick={(event)=>pushToArray(event)}>Add Media</button>
</div>
<div className="flex flex-col">
<Input  type="text" name="tags" label="tags" id="tags"  placeholder="tags"  /><button className="bg-red-200" onClick={(event)=>pushToArray(event)}>Add Tag</button>

</div>
<button className="py-[10px] bg-red-200 mt-[20px]" onClick={(e)=>{e.preventDefault(); fetchFunction("https://api.noroff.dev/api/v1/auction/listings","POST",values)}}>Create Listing</button>
</form>
<section className="w-full md:w-[50%] p-[20px] md:p-[0px] h-[833px] md:h-auto" >
  <h2 className="text-4xl">Preview</h2>
{cardOrDetails === "card" && <div> <Button click={()=>setCardOrDetails(()=>"details")}> Show as listing</Button> <CardPreview {...values}  /> </div>}
{cardOrDetails === "details" && <div> <Button click={()=> setCardOrDetails(()=>"card")}> Show as Card</Button> <ListingPreview {...values} /> </div>}
</section>
</div>
    )
    }



export default CreateListingForm