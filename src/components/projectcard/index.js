import * as React from 'react';
import './index.scss'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCode, faEnvelope, faFileCode, faFolder, faHome, faSitemap, faUser, } from '@fortawesome/free-solid-svg-icons'



export default function ProjectCard({title, description, stack, img, demo, repo}) {
  return (

    <Card sx={{ maxWidth: 500 }}>

        <CardContent>

          <a href={demo} target="blank">
            <CardMedia
              component="img"
              height="200"
              image={img}
              alt="img"
            /></a>
            
            <h1 className='project-title'>{title}</h1>
            {/* <a href={demo} target="blank"><img className='thumbnail' src={img} ></img></a> */}
            <p className='project-description'>{description}</p>
            <p className='project-stack'>{stack}</p>

        </CardContent>


        <CardActions>
          <Button href={demo} target="blank" size="large">View Live Demo <span className='spacer'></span> <FontAwesomeIcon icon={faSitemap}/></Button>
          <Button href={repo} target="blank" size="large">View Code Repo <span className='spacer'></span><FontAwesomeIcon icon={faCode}/></Button>
        </CardActions>
    </Card>
  );
}
