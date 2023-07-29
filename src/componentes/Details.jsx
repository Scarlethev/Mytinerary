import inConstruction from "../images/EnConstruccion.jpg"
import noFoundItineraries from "../images/no result search icon_6511543.png"
import { useEffect, useState } from "react"
import { Link as LinkRouter } from 'react-router-dom';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import dontFoundItineraries from "../images/magnifying-glass.jpg"
import axios from "axios"
import "../style/Cities.css"
import "../style/Details.css"
import "../style/Search.css"
import "../style/Itinerary.css"
import { BsFillReplyAllFill } from "react-icons/bs";
import LuggageIcon from '@mui/icons-material/Luggage';
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
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { BiArrowBack } from "react-icons/bi";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { TRUE } from "sass";
// import Box from '@mui/material/Box';

interface ExpandMoreProps extends IconButtonProps {
   expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
   const { expand, ...other } = props;
   return <IconButton {...other} />;
})(({ theme, expand }) => ({
   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
   marginLeft: 'auto',
   transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
   }),
}));


function Details() {

   const [classItinerary, setClassItinerary] = useState(false)
   const [classButton, setClassButton] = useState(false);


   const { id } = useParams()
   const [city, setCity] = useState()
   let citiesDb
   async function getData() {
      citiesDb = await axios.get("https://scarleth-api-cities-crud.onrender.com/Api/cities/" + id)
      setCity(citiesDb.data.response.city)

   }
   useEffect(() => {
      getData()
   }, [])

   console.log(city)

   const onClick = () => {
      setClassItinerary(!classItinerary)
      setClassButton(!classButton);
   }

   const [expanded, setExpanded] = useState(false);


   const handleExpandClick = () => {
      setExpanded(!expanded);
   }

   return (
      <>
         <LinkRouter to={"/Cities"}>
            <BiArrowBack className="backButton" />
         </LinkRouter>
         {city ?
            <div className="countainerDetails">
               <div className="centralDetails">
                  <img src={city.image} alt={city.name} className="centralImage" />
               </div>
               <div className="spanDetails">
                  <h1 className="spanTitle">{(city.name).toUpperCase()}</h1>
                  <p className="spanContent">{city.description}</p>
                  <div className="countainerButtons">
                     <LuggageIcon justify-content="center" align-items="center" sx={{ fontSize: 30 }} />
                     <button className="itinerariesButtons" onClick={onClick}>Itineraries</button>
                  </div>
               </div>

            </div> :
            <Box sx={{ display: 'flex' }}>
               <div className="progress"><CircularProgress /></div>
            </Box>
         }


         <div className={classItinerary ? "display" : "none"}>
            {city ?
               <div className="countainerItinerary">
                  {city.itinerary.length > 0 ?
                     <div className="cardItinerary">
                        {city.itinerary.map((itinerary, index) =>
                           <Card sx={{ maxWidth: 550 }}>
                              <CardHeader
                                 key={index}
                                 avatar={
                                    <Avatar alt="image User" src={itinerary.userImage} />
                                 }
                                 action={
                                    <IconButton aria-label="settings">
                                       <MoreVertIcon />
                                    </IconButton>
                                 }
                                 title={itinerary.nameUser}
                              />
                              <CardMedia
                                 component="img"
                                 height="500"
                                 image={itinerary.imageItinerary}
                                 alt={itinerary.nameItinerary}
                              />
                              <CardContent>
                                 <Typography variant="body2" color="text.secondary">
                                    <div className="descriptionItinerary">
                                       Duration: {itinerary.duration}
                                    </div>
                                    <div className="descriptionItinerary">
                                       Price:{itinerary.price}
                                    </div>
                                    <div className="descriptionItinerary">
                                       <strong>{itinerary.hashtag}</strong>
                                    </div>
                                 </Typography>
                              </CardContent>
                              <CardActions disableSpacing>
                                 <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                 </IconButton>
                                 <IconButton aria-label="share">
                                    <ShareIcon />
                                 </IconButton>
                                 <ExpandMore
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"

                                 >
                                    <ExpandMoreIcon />
                                 </ExpandMore>
                              </CardActions>
                              <Collapse in={expanded} timeout="auto" unmountOnExit sx={{ maxWidth: 700 }}>
                                 <CardContent >
                                    <Typography paragraph text="justify"><strong>{itinerary.nameItinerary}</strong></Typography>
                                    <Typography paragraph>
                                       <div className="paragraphs">
                                          {itinerary.description}
                                       </div>
                                    </Typography>
                                 </CardContent>
                              </Collapse>
                           </Card>
                        )}
                     </div> 
                    : <div className="noFoundItineraries">
                        <img src={noFoundItineraries} alt="Icon About Itineraries Dont Found it"  />
                        <p>No itineraries found for this city</p>
                        </div>
                  }
               </div> :
               <Box sx={{ display: 'flex' }}>
                  <div className="progress"><CircularProgress /></div>
               </Box>
            }
         </div>

      </>
   );
}

export default Details;



         {/* <div>
    <LinkRouter to={"/Cities"} className="backButton">
       <BsFillReplyAllFill className="backButton"/>
      </LinkRouter>
       {city ?
        <div className="countainerDetails">
          <h3 className="titleDetails">{city.name.toUpperCase()}</h3>
          <br></br>
          <div className="countainerImgAndText">
          <div className="countainerImage">
          <img src={city.image}></img>
          </div>
          <div className="countainerText">
          <p>{city.description}</p>
          <div className="countainerButtons"> 
          <LuggageIcon justify-content="center" align-items="center"sx={{ fontSize: 30 }}/>
          <button className="itinerariesButtons" onClick={onClick}>Itineraries</button>
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
  
    <div className={classItinerary ? "display" : "none"}>
     {city ?
          <div className="countainerItinerary">
            {city.itinerary.map((itinerary, index)=>
              <Card sx={{ maxWidth: 550 }}>
              <CardHeader 
               key={index}
                           avatar={
                              <Avatar alt="image User" src={itinerary.userImage}/>
                           }
                           action={
                              <IconButton aria-label="settings">
                                 <MoreVertIcon />
                              </IconButton>
                           }
                           title={itinerary.nameUser}
                        />
                        <CardMedia
                           component="img"
                           height="500"
                           image={itinerary.imageItinerary}
                           alt= {itinerary.nameItinerary}
                        />
                        <CardContent>
                           <Typography variant="body2" color="text.secondary">
                              <div className="descriptionItinerary">
                                 Duration: {itinerary.duration}
                              </div>
                              <div className="descriptionItinerary">
                                 Price:{itinerary.price}
                              </div>
                              <div className="descriptionItinerary">
                                 <strong>{itinerary.hashtag}</strong>
                              </div>
                           </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                           <IconButton aria-label="add to favorites">
                              <FavoriteIcon />
                           </IconButton>
                           <IconButton aria-label="share">
                              <ShareIcon />
                           </IconButton>
                           <ExpandMore
                              expand={expanded}
                              onClick={handleExpandClick}
                              aria-expanded={expanded}
                              aria-label="show more"

                           >
                              <ExpandMoreIcon />
                           </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit sx={{ maxWidth: 700 }}>
                           <CardContent >
                              <Typography paragraph text="justify"><strong>{itinerary.nameItinerary}</strong></Typography>
                              <Typography paragraph>
                                 <div className="paragraphs">
                                   {itinerary.description}
                                 </div>
                              </Typography>
                           </CardContent>
                        </Collapse>
               </Card>
                )}
                   </div>
             : <Box sx={{ display: 'flex' }}>
                  <div className="progress"><CircularProgress /></div>
               </Box>
               }
               </div> */}