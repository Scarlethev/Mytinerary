import "../style/Cities.css"
import "../style/Search.css"
import { useEffect, useState } from "react"
import axios from "axios"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link as LinkRouter } from 'react-router-dom';
import { BsGeoAltFill, BsCashStack, BsTranslate } from "react-icons/bs";
import { FaSearch} from "react-icons/fa";
import * as React from 'react'

function Cities() {
  const [search, setSearch] =useState ("")
  const [citiesToFilter, setCitiesToFilter] = useState([])
  const [cities, setCities] = useState([])
 
  let citiesDb
  async function getData() {
    citiesDb= await axios.get("https://scarleth-api-cities-crud.onrender.com/Api/cities")
    setCities(citiesDb.data.response.cities)
    setCitiesToFilter(citiesDb.data.response.cities)
  }
  useEffect(() => {
     getData()
  }, [])

 
  const searcher = (e) => {
    setSearch(e.target.value)
    filter(e.target.value)
  }

 
const filter=(searched) => {
  var resultadoSearch= citiesToFilter.filter((city)=>{
    if(city.name.toLowerCase().includes(searched.toLowerCase()))
  {
    return city;
  }
  });

  setCities(resultadoSearch);
}


  return (
    <>
      <div className="containerSearch">
     <input  className="search" value ={search} onChange={searcher} type="search" name="input" id="input" placeholder="Find your city..." />   
     <FaSearch className="iconSearch"/>
     </div>
      {cities.length > 0 ?
        <div className="cards">
          {cities.map((city,index) =>
            <div  key={index} className="cardCities">
              <Card sx={{ maxWidth: 400, minWidth: 150 }}>
                <CardMedia
                  component="img"
                  alt={city.name}
                  height="240"
                  width="150"
                  image={city.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {city.name}
                  </Typography>
                  <Typography variant="16px" component="div" ClassName="itemsbodycard">
                    <BsGeoAltFill/>: {city.country}
                  </Typography>
                    <Typography variant="14px" component="div" ClassName="itemsbodycard">
                    <BsCashStack/>:  {city.currency}
                     </Typography>
                    <Typography variant="14px" component="div" ClassName="itemsbodycard">
                    <BsTranslate/> : {city.language}
                    </Typography>
                </CardContent>
                <CardActions className="readMore">
                <LinkRouter to={"/Details/" + city._id}>
                  <Button size="18">Read More</Button>
                  </LinkRouter>
                </CardActions>
              </Card>
            </div>
          )}
        </div> :
        <Box sx={{ display: 'flex' }}>
          <div className="progress"><CircularProgress /></div>
      </Box>
      }
    </>
  )

}


export default Cities