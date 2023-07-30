import "../style/Home.css"
import 'animate.css';
import { Link as LinkRouter } from "react-router-dom"


export default function CallAction(){
    return(
    <LinkRouter to={"/Cities"} className="noneDecoration callAction">
    <h2 className="animate__animated animate__flash">FIND IT HERE</h2>
    </LinkRouter>
    )
}