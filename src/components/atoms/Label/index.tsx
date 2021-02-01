import React from "react";
import Skeleton from "react-loading-skeleton";

export interface Props{
    label?:any
}

const Label = (props:Props)=>{

    return <span>
        <label>{props.label||<Skeleton/>}</label>
    </span>
}

export {Label};