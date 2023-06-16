import "../style/User.css"
import Inconstruction from "../images/EnConstruccion.jpg"


export default function User(){
    return(
        <>
        <div className="textoEnConstruccion">
        <h1>This website User is in construction</h1>
        <img src={Inconstruction}/>
        </div>
        </>
    )
}