import React, {FC} from 'react'

type profileInforProps = {category:string,value:string|number}

const ProfileInfo:FC<profileInforProps> = ({category,value}) => {
   
    return(
    <div>
        <h3>{category}</h3>
       {value? <p>{value}</p>:<p>0</p>}
    </div>
)}

export default ProfileInfo