import React, {FC} from 'react'

type profileInforProps = {category:string,value:string|number,className?:string}

const ProfileInfo:FC<profileInforProps> = ({category,value,className}) => {
   
    return(
    <div className={`flex ${className}`}>
        <h3 className=" font-bold tracking-wide">{category}</h3>
       {value? <p  className="text-4xl font-bold ">{value}</p>:<p className="text-4xl font-bold">0</p>}
    </div>
)}

export default ProfileInfo