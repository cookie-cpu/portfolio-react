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

  const stackList = stack.map((tech) => {
    return (
      <li key={tech[0]}>{tech}</li>
    )
  })

  return (
    
    <div className='project-card'>

    
    <Card sx={{
       maxWidth: 350,
       minWidth: 250,
       m: 1.5,
       boxShadow: 5,
       '&:hover': {
        boxShadow: 20,
      },

       
      }} 
      variant="elevated"
    
      >

        <CardContent >
          
            {demo ? <a href={demo} target="blank">
              <CardMedia
                title={title}
                component="img"
                height="150"
                src={img}
                image={img}
                alt="image"
              /></a> : <CardMedia
              title={title}
              component="img"
              height="150"
              src={img}
              image={img}
              alt="image"
            />}
            
          
            
            <h1 className='project-title'>{title}</h1>
              <p className='project-description'>{description}</p>
                <div className='project-stack'>
                  <ul>
                      {stackList}
                  </ul>
            </div>

        </CardContent>


        <CardActions sx={{bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,}}>
          {demo ? <Button variant="contained" href={demo} target="blank" size="small"  endIcon={<FontAwesomeIcon icon={faExternalLink}/>}>Live Demo</Button> : false}
          {repo ? <Button variant="contained" href={repo} target="blank" size="small"  endIcon={<FontAwesomeIcon icon={faCode}/>}>Code Repo</Button> : false}
        </CardActions>

    </Card>
    </div>
    
  );
}
