import CallAction from "./CallAction"
import Welcome from "./Welcome"
import Carrousel from "./Carrousel"

import { Routes, Route } from "react-router-dom"


import "../style/Home.css"
import Cities from "./Cities"


export default function Home(){
    return(
        <>
        <Welcome/>
        <CallAction/>
        <Carrousel/>
        </>
    )
}