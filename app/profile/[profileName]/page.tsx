"use client"
import ProfilePage from "@/app/ui/components/ProfilePage"
import fetchFunction from "@/app/utils/fetchFunction"
import { useEffect ,useState} from "react"
type ParamType = {params:{profileName: string}}
const ProfileId = ({params}:ParamType)=>{
    const [data,setData] = useState({})

    useEffect(()=>{
    (async()=>{const data = await fetchFunction(`https://api.noroff.dev/api/v1/auction/profiles/${params.profileName}?_listings=true`,"GET")
    console.log(data)
setData(data)})()},[])
    return(
<ProfilePage {...data}/>
    )


}

export default ProfileId