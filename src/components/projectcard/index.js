import * as React from 'react';
import './index.scss'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCode, faEnvelope, faExternalLink, faFileCode, faFolder, faHome, faSitemap, faUser, } from '@fortawesome/free-solid-svg-icons'



export default function ProjectCard({title, description, stack, img, demo, repo}) {
  
  // const testData = ['html', 'css', 'javascript'];

  const stackList = stack.map((technology) => {
    return (
      <li key={technology[0]}>{technology}</li>
    )
  })

  return (
    <Card sx={{ maxWidth: 550 }}>

        <CardContent>
          
          {demo ? <a href={demo} target="blank">
            <CardMedia
              component="img"
              height="200"
              src={img}
              image={img}
              alt="img"
            /></a> : <CardMedia
            component="img"
            height="200"
            image={img}
            alt="img"
          />}
          
            
            <h1 className='project-title'>{title}</h1>
            <p className='project-description'>{description}</p>
            <div className='project-stack'>
              <ul>
                  {stackList}
              </ul>
            </div>

        </CardContent>


        <CardActions>
          {demo ? <Button href={demo} target="blank" size="large">View Live Demo <span className='spacer'></span> <FontAwesomeIcon icon={faExternalLink}/></Button> : false}
          {repo ? <Button href={repo} target="blank" size="large">View Code Repo <span className='spacer'></span><FontAwesomeIcon icon={faCode}/></Button> : false}
        </CardActions>

    </Card>
  );
}
