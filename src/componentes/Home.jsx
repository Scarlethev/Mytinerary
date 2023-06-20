import Welcome from "./Welcome"
import Carrousel from "./Carrousel"
import { Routes, Route } from "react-router-dom"
import "../style/Home.css"


export default function Home(){
    return(
        <>
        <Welcome/>
        <Carrousel/>
        </>
    )
}