import * as React from 'react';
import './index.scss'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faEnvelope, faExternalLink, faFileCode, faFolder, faHome, faSitemap, faUser, } from '@fortawesome/free-solid-svg-icons'
import { faCodepen, faCodiepie, faStackExchange, faStackOverflow, faStackpath } from '@fortawesome/free-brands-svg-icons';
import { minHeight } from '@mui/system';



export default function ProjectCard({ title, description, stack, img, demo, repo,}) {

  // const testData = ['html', 'css', 'javascript'];

  const stackList = stack.map((tech) => {
    return (
      <li key={tech[0]}><FontAwesomeIcon icon={faCode} /> {tech}</li>
    )
  })

  return (

    <div className='project-card'>

      <Card
          sx={{
            maxWidth: 500,
            minWidth: 550,
            minHeight: 550,
            maxHeight: 700,
            m: 1.5,
            boxShadow: 3,
            borderRadius: 2,
            bgcolor: 'white',
            '&:hover': {
              boxShadow: 20,
              bgcolor: '#bbdefb',
            }
            ,}}
        variant="elevated">


        <CardContent sx={{p: 1, m:1, bgcolor: ''}}>

          {demo ? <a href={demo} target="blank">
            <CardMedia
              title={title}
              component="img"
              height="175"
              src={img}
              image={img}
              alt="image"
            /></a> : <CardMedia
            title={title}
            component="img"
            height="175"
            src={img}
            image={img}
            alt="image"
          />}



          <h1 className='project-title'>{title}</h1>
          <p className='project-description'>{description}</p>
          <div>
            <ul className='project-stack'>
              {stackList}
            </ul>
          </div>

        </CardContent>
        
        
          {demo || repo ? <CardActions className='project-actions'
          sx={{
            
            // minWidth: 100,
            // maxHeight: 550,
            // maxWidth: 300,
            bgcolor: 'white',
            boxShadow: 10,
            border: 0,
            borderRadius: 5,
            p: 2,
            m: 1, 
            
            '&:hover': {
              boxShadow: 20,
              // bgcolor: 'gray',
            }
              }}>
                
            {demo ? <Button variant="contained" href={demo} target="blank" size="medium" endIcon={<FontAwesomeIcon icon={faExternalLink} />}>Live Demo</Button> : false}
            {repo ? <Button variant="contained" href={repo} target="blank" size="medium" endIcon={<FontAwesomeIcon icon={faCode} />}>Code Repo</Button> : false}
        </CardActions>: false }
        


      </Card>
    </div>

  );
}
