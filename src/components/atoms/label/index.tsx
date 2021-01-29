import React from "react";
import Skeleton from "react-loading-skeleton";

export interface Props{
    label?:any
}

const Label = (props:Props)=>{

    return <div>
        <label>{props.label||<Skeleton/>}</label>
    </div>
}

export {Label};