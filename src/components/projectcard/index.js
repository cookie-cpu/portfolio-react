import * as React from 'react';
import './index.scss'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown, faArrowDown, faArrowDown19, faArrowDownLong, faArrowPointer, faCircleInfo, faCode, faCodeBranch, faCommentDots, faCubes, faEnvelope, faExternalLink, faFileCode, faFolder, faHome, faIndent, faLayerGroup, faSitemap, faUser, faWrench, } from '@fortawesome/free-solid-svg-icons'
import { faCodepen, faCodiepie, faStackExchange, faStackOverflow, faStackpath } from '@fortawesome/free-brands-svg-icons';
import { minHeight } from '@mui/system';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';





export default function ProjectCard({id, title, description, details, stack, img, demo, repo,}) {

  const [clicked, setClicked] = React.useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const stackList = stack.map((tech) => {
    return (
      <li key={tech[0]}><FontAwesomeIcon icon={faCode} /> {tech}</li>
    )
  })
  
  const styleObj = {
      // maxWidth: clicked ? 900 : 650,
      maxWidth: 600,
      minWidth: 550,
      // maxHeight: clicked ? 800 : NaN,
      m: 1,
      boxShadow: 3,
      borderRadius: 2,
      bgcolor: 'white',
      '&:hover': {
        boxShadow: 20,
      } 
  }

  return (

    <>
      <Card sx={styleObj} variant="elevated" className='project-card'  onClick={handleClick}>
        <CardContent sx={{p: 1, m:1, bgcolor: ''}}>

          {demo ? 
          <a  href={demo} target="blank">
            <CardMedia
              title={title}
              component="img"
              height="250"
              src={img}
              image={img}
              alt="image"/></a> 
            : <CardMedia
            title={title}
            component="img"
            height="250"
            src={img}
            image={img}
            alt="image"
          />}

          <h1 className='project-title'>&#60; {title} &#47;&#62;</h1>
          
      <Accordion>
        <AccordionSummary 
          expandIcon={<FontAwesomeIcon icon={faArrowDown}/>}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <h2>About <FontAwesomeIcon icon={faCommentDots}/></h2>
        </AccordionSummary>
        <AccordionDetails>
          <p className='project-description'>{description}</p>
        </AccordionDetails>
      </Accordion>

      { details ? <Accordion>
        <AccordionSummary
          expandIcon={<FontAwesomeIcon icon={faArrowDown}/>}
          aria-controls={`panel1a-content${id}`}
          id={`panel1a-header${id}`}>
          <h2>Tech Stuff <FontAwesomeIcon icon={faWrench}/></h2>
        </AccordionSummary>
        <AccordionDetails>
              <p className='project-description'>{details}</p>
        </AccordionDetails>
      </Accordion> : false
      }
          
      <Accordion>
        <AccordionSummary
          expandIcon={<FontAwesomeIcon icon={faArrowDown}/>}
          aria-controls={`panel1a-content${id}`}
          id={`panel1a-header${id}`}>
          <h2>Stacklist <FontAwesomeIcon icon={faLayerGroup}/></h2>
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
            bgcolor: 'white',
            boxShadow: 10,
            border: 0,
            borderRadius: 5,
            p: 2,
            m: 1, 
            '&:hover': {
              boxShadow: 20,
            }
              }}> 
            {demo ? <Button variant="contained" href={demo} target="blank" size="medium" endIcon={<FontAwesomeIcon icon={faExternalLink} />}>Live Demo</Button> : false}
            {repo ? <Button variant="contained" href={repo} target="blank" size="medium" endIcon={<FontAwesomeIcon icon={faCode} />}>Code Repo</Button> : false}
        </CardActions>:
         false }

      </Card>
    </>

  );
}
