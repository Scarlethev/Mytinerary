import "../style/Home.css"
import {BiWorld} from "react-icons/bi"
import {BiSolidChat} from "react-icons/bi"
import {BiSolidPlaneAlt} from "react-icons/bi"

function Complement(){

    return(
        <>
        <div className="backgroundColorComplement">
                <span className="logoComplement animate__animated animate__rubberBand animate__delay-2s"><BiWorld size="150" color="darkcyan" />
                    <p className="titleComplement">DISCOVERY</p></span>
                <span className="logoComplement animate__animated animate__rubberBand animate__delay-3s"><BiSolidChat className="logos "size="150" color="darkcyan"/>
                    <p className="titleComplement">CONNECT</p></span>
                <span className="logoComplement animate__animated animate__rubberBand animate__delay-4s"><BiSolidPlaneAlt className="logos" size="150" color="darkcyan"/>
                <p className="titleComplement">TRAVEL</p></span>
        </div>
        </>
    )
}

export default Complement;