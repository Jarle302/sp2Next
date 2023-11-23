"use client"
import Input from "./Input";
import ListingPreview from "./ListingPreview";
import useForm from "@/app/utils/customHooks/useForm";
type CreateListFormProps = {
    title: string;
    description?: string;
    tags?: string[];
    media?: string[];
    endsAt: string;
  }

  
  const CreateListingForm = ({title,description,tags,media,endsAt}:CreateListFormProps) => {
    const [values,handleChange,reset,setValues] = useForm({
      title: "",
      description: "",
      tags: [],
      media: [],
      endsAt: "",
    }) 
    
    function pushToArray(event:React.ChangeEvent<HTMLInputElement>,id:string){
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
      <div>
      <form action="">
<Input handleChange={handleChange} type="text" name="title" label="title" id="title" value={values.title} placeholder="title"  />
<Input  handleChange={handleChange} type="text" name="description" label="description" id="description" value={values.description} placeholder="description"  />
<Input  handleChange={handleChange} type="date" name="endsAt" label="endsAt" id="endsAt" value={values.endsAt} placeholder=""  />
<div>
<Input  type="text" name="media" label="media" id="media"  placeholder="media"  /><button onClick={(event)=>pushToArray(event)}>Add Media</button>
</div>
<div>
<Input  type="text" name="tags" label="tags" id="tags"  placeholder="tags"  /><button className="bg-red-200" onClick={(event)=>pushToArray(event)}>Add Tag</button>

</div>
</form>

<ListingPreview {...values} />
</div>
    )
    }



export default CreateListingForm