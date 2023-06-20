import "../style/Home.css"
import welcome from "../images/welcome.jpeg"
import  CallAction  from "./componentes/CallAction"

export default function Welcome() {
    return (
        <>
        <div className="backgrown">
            <h1 className="slogan">Find you perfect trip, designed by insiders who know and love their cities!</h1>
            <CallAction/>
            </div> 
        </>
    )
}