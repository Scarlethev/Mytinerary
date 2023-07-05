import enConstruction from "../images/EnConstruccion.jpg"
import { useEffect, useState } from "react"
import axios from "axios"
import "../style/Cities.css"
import { useParams } from "react-router-dom"

function Details() {
    const {id}=useParams()
    const [city, setCity] = useState()
    let citiesDb
    async function getData() {
      citiesDb = await axios.get("https://scarleth-api-cities-crud.onrender.com/Api/cities/" + id)
      setCity(citiesDb.data.response.city)
    console.log(citiesDb)
    }
    useEffect(() => {
      getData()
    }, []) 

    return(
        <div className="containerItinerary">
            {city ?
            <div>
            <h1>
            {city.name}
            </h1>
            </div>:
            <h1 className="nameCountry">
                "Error"
            </h1>}
            </div>
        // <div className="textoEnConstruccion">
        // <img src={enConstruction} alt="Imagen de un obrero" />
        // </div>
    )
}

export default Details