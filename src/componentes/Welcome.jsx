import "../style/Home.css"
import CallAction from "../componentes/CallAction"

export default function Welcome() {
    return (
        <>
         <div className="home">
            <div className="backgroundImg">
            <div className="slogan">
            <h1 className="tituloUno">FIND YOU PERFECT TRIP</h1>
            <h2 className="tituloDos">Designed by insiders who know and love their cities! </h2>
            </div>
            <div className="callAction">
            <CallAction/>
            </div>
            </div>
            </div>
        </>
    )
}