import "../style/Cities.css"
import "../style/Search.css"
import { useEffect, useState } from "react"
import axios from "axios"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link as LinkRouter } from 'react-router-dom';
import * as React from 'react'


function Cities() {
  const [cities, setCities] = useState([])
  let citiesDb
  async function getData() {
    citiesDb = await axios.get("https://scarleth-api-cities-crud.onrender.com/Api/cities")
    setCities(citiesDb.data.response.cities)
    console.log(cities)
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div className="search">
        <h1>CITIES</h1>
        <input className="input" type="text" placeholder="Search..." name="myInput" />
      </div>
      {cities.length > 0 ?
        <div className="cards">
          {cities.map(city =>
            <div className="card">
              <Card sx={{ maxWidth: 450 }}>
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
                  <Typography variant="body" component="div">
                    {city.country}
                  </Typography>
                  <div className="iconosCard">
                    <Typography variant="body" component="div">
                      {city.currency}
                    </Typography>
                    <Typography variant="body" component="div">
                      {city.language}
                    </Typography>
                  </div>
                  <Typography variant="body2" color="text.secondary">
                    {city.description}
                  </Typography>
                </CardContent>
                <CardActions>
                <LinkRouter to={"/Home"}>
                  <Button size="small">Learn More</Button>
                  </LinkRouter>
                </CardActions>
              </Card>
            </div>
          )}
        </div> :
        <h1>"Loading"</h1>
      }
    </>
  )

}



export default Cities