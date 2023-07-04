import { useEffect, useState } from "react"
import "../style/Cities.css"
import axios from "axios"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as React from 'react'
import Search from "../componentes/Search"

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
      <Search />
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
                  <Typography variant="body2" color="text.secondary">
                    {city.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
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