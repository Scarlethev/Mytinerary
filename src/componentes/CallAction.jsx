import "../style/Home.css"
import 'animate.css';
import { Link as LinkRouter } from "react-router-dom"
import imagenprincipal from "../images/Imagenprincipal.jpeg"
export default function CallAction(){
    return(
    <LinkRouter to={"/Cities"}>
    <h1 className="callAction animate__animated animate__flash animate__infinite infinite">FIND IT HERE</h1>
    </LinkRouter>
    )
}