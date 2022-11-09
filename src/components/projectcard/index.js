import * as React from 'react';
import './index.scss'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown, faArrowDown, faArrowDown19, faArrowDownLong, faArrowPointer, faCircleInfo, faCode, faCodeBranch, faCommentDots, faCubes, faEnvelope, faExternalLink, faFileCode, faFolder, faHome, faIndent, faLayerGroup, faSitemap, faUser, } from '@fortawesome/free-solid-svg-icons'
import { faCodepen, faCodiepie, faStackExchange, faStackOverflow, faStackpath } from '@fortawesome/free-brands-svg-icons';
import { minHeight } from '@mui/system';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';




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
            minWidth: 650,
            minHeight: 250,
           
            m: 1.5,
            boxShadow: 3,
            borderRadius: 2,
            bgcolor: 'white',
            '&:hover': {
              boxShadow: 20,
              // bgcolor: '#bbdefb',
            }
            ,}}
        variant="elevated">


        <CardContent sx={{p: 1, m:1, bgcolor: ''}}>

          {demo ? <a href={demo} target="blank">
            <CardMedia
              title={title}
              component="img"
              height="250"
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
          
      <Accordion>
        <AccordionSummary
          expandIcon={<FontAwesomeIcon icon={faArrowDown}/>}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <h3><FontAwesomeIcon icon={faCircleInfo}/> Project Details <FontAwesomeIcon icon={faCommentDots}/></h3>
        </AccordionSummary>

        <AccordionDetails>
          <p className='project-description'>{description}</p>
        </AccordionDetails>

      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<FontAwesomeIcon icon={faArrowDown}/>}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <h3><FontAwesomeIcon icon={faLayerGroup}/> Stacklist and Technologies <FontAwesomeIcon icon={faCubes}/></h3>
        </AccordionSummary>
        <AccordionDetails>
              <ul className='project-stack'>
                {stackList}
              </ul>
        </AccordionDetails>
      </Accordion>
    

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
