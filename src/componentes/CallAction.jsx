import "../style/Home.css"
import 'animate.css';
import { Link as LinkRouter } from "react-router-dom"


export default function CallAction(){
    return(
    <LinkRouter to={"/Cities"} className="noneDecoration">
    <h1 className="animate__animated animate__flash">FIND IT HERE</h1>
    </LinkRouter>
    )
}