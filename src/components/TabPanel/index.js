import React from 'react'
import './index.scss'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProjectCard from '../projectcard'
import jsonData from '../../assets/projectData.json';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
          {/* <Typography>{children}</Typography> */}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const webProjects = jsonData.projects.map((project) => {
    return (
        <ProjectCard 
            key={project.id}
            title={project.title}
            description={project.description}
            stack={project.stack}
            img={project.img}
            demo={project.demo}
            repo={project.repo}
        />
    )
  })

  const gameProjects = jsonData.games.map((project) => {
    return (
        <ProjectCard 
            key={project.id}
            title={project.title}
            description={project.description}
            stack={project.stack}
            img={project.img}
            demo={project.demo}
            repo={project.repo}
        />
    )
  })

  const miscProjects = jsonData.other.map((project) => {
    return (
        <ProjectCard 
            key={project.id}
            title={project.title}
            description={project.description}
            stack={project.stack}
            img={project.img}
            demo={project.demo}
            repo={project.repo}
        />
    )
  })

  

  return (
    <Box className='tab-bar' sx={{ width: '100%' }}>


        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} centered scrollButtons="auto">
            <Tab label={"Web Development"} {...a11yProps(0)} />
            <Tab label="Games" {...a11yProps(1)} />
            <Tab label="Other" {...a11yProps(2)} />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0} className='projects'>
          {webProjects}
        </TabPanel>

        <TabPanel value={value} index={1}  className='projects'>
          {gameProjects}
        </TabPanel>

        <TabPanel value={value} index={2}  className='projects'>
          {miscProjects}
        </TabPanel>

    </Box>
  );
}
