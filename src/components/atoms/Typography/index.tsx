import Skeleton from "react-loading-skeleton";
import {TypographyType} from "../../../interfaces/typography"
interface Props{
    type?:TypographyType,
    text?:string | number;
    lineCount?:number;
}

const Typography = (props:Props)=>{
    const {text,lineCount}=props;
return <p>{text|| <Skeleton count={lineCount}/>}</p>
}

export {Typography};