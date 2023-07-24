import "../style/Itinerary.css"
import { useEffect, useState } from "react"
import { Link as LinkRouter } from 'react-router-dom';
import axios from "axios"
import onConstruction from "../images/EnConstruccion.jpg"
import { useParams } from "react-router-dom"
import * as React from 'react';
import { styled } from '@mui/material/styles';
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
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


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



function Itinerary() {
   const {id} =useParams()
   const [itineraries, setItineraries] = useState([])

   let ItinerariesDb

   async function getData() {
      ItinerariesDb = await axios.get("https://vastyaint-api-itinerary-crud.onrender.com/api/itinerary")
      console.log("CRUD ITINERARY" + ItinerariesDb)

      setItineraries(ItinerariesDb.data.response.itineraries)

      console.log(itineraries)

   }
   useEffect(() => {
      getData()
   }, [])

   const [expanded, setExpanded] = useState(false);
   

   const handleExpandClick = () => {
      setExpanded(!expanded);
   };

   return (
      <>
         <div className="countainerItinerary">
            {itineraries.length > 0 ?
               <div className="cardItinerary">
               <Card sx={{ maxWidth: 500 }}>
                  {itineraries.map((itinerary, index) =>
                  <div>
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
                           name={itinerary.nameUser}
                           title={itinerary.nameItinerary}
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
                                 Schedule: {}
                              </div>
                              <div className="descriptionItinerary">
                                 Duration: {itinerary.duration}
                              </div>
                              <div className="descriptionItinerary">
                                 Price:{itinerary.price}
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
                           <CardContent>
                              <Typography paragraph text="justify"><strong>{itinerary.nameItinerary}</strong></Typography>
                              <Typography paragraph>
                                 <div className="paragraphs">
                                   {itinerary.description}
                                 </div>
                              </Typography>
                           </CardContent>
                        </Collapse>

                     </div>
                  )}

               </Card>
                   </div>
               : <Box sx={{ display: 'flex' }}>
                  <div className="progress"><CircularProgress /></div>
               </Box>
                 }
               </div>
      </>
   );
}

export default Itinerary;
