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
import ImageParis from "../images/ItineraryParis.jpeg"
import usuarioOne from "../images/usuarioParisOne.jpeg"


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

   const [expanded, setExpanded] = useState(false);

   const handleExpandClick = () => {
      setExpanded(!expanded);
   };

   return (
      <>
         <div className="countainerItinerary">
            <Card sx={{ maxWidth: 500 }}>
               <CardHeader
                  avatar={
                     <Avatar alt="Martin Martinez" src={usuarioOne}/>
                  }
                  action={
                     <IconButton aria-label="settings">
                        <MoreVertIcon />
                     </IconButton>
                  }
                  title="Martin Martinez"
               />
               <CardMedia
                  component="img"
                  height="500"
                  image={ImageParis}
                  alt="Image Paris"
               />
               <CardContent>
                  <Typography variant="body2" color="text.secondary">
                  <div className="descriptionItinerary">
                  Schedule:
                  </div>
                  <div className="descriptionItinerary">
                  Duration:
                  </div>
                  <div className="descriptionItinerary">
                  Price:
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
               <Collapse in={expanded} timeout="auto" unmountOnExit    sx={{ maxWidth: 700 }}>
                  <CardContent>
                     <Typography paragraph text="justify"><strong>WALKING TOUR THROUGH THE CENTER OF PARIS</strong></Typography>
                     <Typography paragraph>
                        <div className="paragraphs">
                        We suggest visiting the emblematic Eiffel Tower. You can photograph yourself from below, walk through the Champ de Mars, or you can choose to climb the monument to see the views from the tower.
                        From the Champ de Mars you can stroll to Les Invalides, see the church and stroll through the gardens. Opposite Les Invalides is the Rodin Museum with the famous work of "Rodin's Thinker", a stop that you can make if you are interested in the artist's works. Walking through the park of l'Esplanade des Invalides you can reach the banks of the Seine, from where you can go to the Musée d'Orsay.
                        After visiting the museum, you can cross the river to eat a picnic in the Jardin des Tuileries, and if it is Christmas take the opportunity to see the Christmas markets. From Les Tuileries you can walk along the Seine River towards the Louvre Museum, which we will leave for later or delete the previous museum for a visit to the Louvre. Close to the museum, we find the famous Notre-Dame Cathedral. You can end the day of the tour returning to your accommodation from the metro stop located near the Cathedral.
                        After the fire that broke out on April 15 in the Notre-Dame de Paris Cathedral, its treasury and its towers are closed and reconstruction and repair work is underway. The security perimeter of the Ile de la Cité has been reduced since April 21. However, it is still impossible to access the immediate surroundings of the cathedral, as well as the Petit Pont and the Pont au Double.
                        </div>
                     </Typography>
                  </CardContent>
               </Collapse>
            </Card>
         </div>
      </>
   );
}

export default Itinerary;
