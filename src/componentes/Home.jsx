import Welcome from "./Welcome"
import Carrousel from "./Carrousel"
import Complement from "./Complement"
import "../style/Home.css"


export default function Home(){
    return(
        <>
        <Welcome/>
        <Complement/>
        <Carrousel/>
        </>
    )
}