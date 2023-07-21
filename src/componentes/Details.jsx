import EnConstruction from "../images/EnConstruccion.jpg"
import { useEffect, useState } from "react"
import { Link as LinkRouter } from 'react-router-dom';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import axios from "axios"
import "../style/Cities.css"
import "../style/Details.css"
import "../style/Search.css"
import "../style/Itinerary.css"
import {BsFillReplyAllFill} from "react-icons/bs";
import { useParams } from "react-router-dom"
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBBtn } from 'mdb-react-ui-kit';
import Itinerary from "./Itinerary";

function Details() {

  const [itinerary, setItinerary]= useState(false)
  const [classButton, setClassButton]= useState(false);

  const onClick=()=>{
    setItinerary(!itinerary)
    setClassButton(!classButton);
  }


  const { id } = useParams()
  const [city, setCity] = useState()
  let citiesDb
  async function getData() {
    citiesDb = await axios.get("https://scarleth-api-cities-crud.onrender.com/Api/cities/" + id)
    setCity(citiesDb.data.response.city)
    console.log(city)
    
  }
  useEffect(() => {
    getData()
  }, )

  return (
    <>
    <div>
    <LinkRouter to={"/Cities"} className="backButton">
       <BsFillReplyAllFill className="backButton"/>
      </LinkRouter>
       {city ?
        <div className="countainerDetails">
          <h3 className="titleDetails">{city.name.toUpperCase()}</h3>
          <div className="countainerImgAndText">
          <div className="countainerImage">
          <img src={city.image}></img>
          </div>
          <div className="countainerText">
          <p>{city.description}</p>
          <h5>Activities</h5>
          <div className="countainerButtons"> 
          <button className="itinerariesButtons" onClick={onClick}>Itinerary One</button>
          <button className="itinerariesButtons" onClick={onClick}>Itinerary Two</button>
          </div>
          </div>
          </div>
      </div> :
      <div>
        <Box sx={{ display: 'flex' }}>
          <div className="progress"><CircularProgress /></div>
      </Box>
      </div>
}
    </div >
     
    <div className={itinerary ? "display" : "none"}>
    <Itinerary/>
    </div>
    </>
   
  )
}

export default Details;