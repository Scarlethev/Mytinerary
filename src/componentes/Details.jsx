 import enConstruction from "../images/EnConstruccion.jpg"
import { useEffect, useState } from "react"
import { Link as LinkRouter } from 'react-router-dom';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import axios from "axios"
import "../style/Cities.css"
import "../style/Details.css"
import "../style/Search.css"
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

function Details() {
  const { id } = useParams()
  const [city, setCity] = useState()
  let citiesDb
  async function getData() {
    citiesDb = await axios.get("https://scarleth-api-cities-crud.onrender.com/Api/cities/" + id)
    setCity(citiesDb.data.response.city)
    console.log(citiesDb)
  }
  useEffect(() => {
    getData()
  }, )

  return (
    <div>
      {city ?
        <div className="containerDetails">
          <MDBCard style={{ width: '1000px' }}>
            <MDBRow className='g-0 containerDetails'>
              <MDBCol md='8' sm="12">
                <MDBCardImage className="imagenDetails" src={city.image} alt='...' />
              </MDBCol>
              <MDBCol md='4' sm="12">
                <MDBCardBody className="textDetails">
                  <MDBCardTitle><strong>{city.name}</strong></MDBCardTitle>
                  <MDBCardText className="textDetails">
                    {city.description}
                  </MDBCardText>
                  <MDBCardText>

                  <LinkRouter to={"/Itinerary/"}>
                      <MDBBtn>
                       Itinerary One
                      </MDBBtn>
                      </LinkRouter>
                      <LinkRouter to={"/Itinerary"}>
                      <MDBBtn>
                      Itinerary Two
                      </MDBBtn>
                      </LinkRouter>
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>

    </div> :
      <div>
        <Box sx={{ display: 'flex' }}>
          <div className="progress"><CircularProgress /></div>
      </Box>
      </div>
}
    </div >
   
  )
}

export default Details;