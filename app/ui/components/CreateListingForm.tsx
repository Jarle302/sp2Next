import Input from "./Input";
import useForm from "@/app/utils/customHooks/useForm";
type CreateListFormProps = {
    title: string;
    description?: string;
    tags?: string[];
    media?: string[];
    endsAt: string;
  }
const CreateListingForm = ({title,description,tags,media,endsAt}:CreateListFormProps) => {
  const [values,handleChange,reset] = useForm({
    title: "",
    description: "",
    tags: [],
    media: [],
    endsAt: "",
  }) 
    
    return (
      <form action="">
<Input type="text" name="title" label="title" id="title" value={values.title} placeholder="title"  />
<Input type="text" name="description" label="description" id="description" value={values.description} placeholder="description"  />
<Input type="text" name="tags" label="tags" id="tags" value={values.title.join(",")} placeholder="tags"  />
<Input type="date" name="endsAt" label="endsAt" id="endsAt" value={values.endsAt} placeholder=""  />
<Input type="text" name="media" label="media" id="media" value={values.media} placeholder="media"  />
</form>
    )
    }



