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
          <Typography>{children}</Typography>
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

  const projectList = jsonData.projects.map((project) => {
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
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} centered variant="scrollable" scrollButtons="auto">
          <Tab label={jsonData.projects[0].title} {...a11yProps(0)} />
          <Tab label="Backend" {...a11yProps(1)} />
          <Tab label="Other" {...a11yProps(3)} />
          <Tab label="Other" {...a11yProps(4)} />
          <Tab label="Other" {...a11yProps(5)} />
          <Tab label="Other" {...a11yProps(6)} />
          <Tab label="Other" {...a11yProps(7)} />
          <Tab label="Other" {...a11yProps(8)} />
          <Tab label="Other" {...a11yProps(9)} />
          <Tab label="Other" {...a11yProps(10)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} className='projects'>
        <ProjectCard 
              key={jsonData.projects[0].id}
              title={jsonData.projects[0].title}
              description={jsonData.projects[0].description}
              stack={jsonData.projects[0].stack}
              img={jsonData.projects[0].img}
              demo={jsonData.projects[0].demo}
              repo={jsonData.projects[0].repo}
          />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProjectCard 
                key={jsonData.projects[1].id}
                title={jsonData.projects[1].title}
                description={jsonData.projects[1].description}
                stack={jsonData.projects[1].stack}
                img={jsonData.projects[1].img}
                demo={jsonData.projects[1].demo}
                repo={jsonData.projects[1].repo}
            />
      </TabPanel>
      <TabPanel value={value} index={2}>
        1
      </TabPanel>
      <TabPanel value={value} index={3}>
        2
      </TabPanel>
      <TabPanel value={value} index={4}>
        3
      </TabPanel>
      <TabPanel value={value} index={5}>
        4
      </TabPanel>
      <TabPanel value={value} index={6}>
        5
      </TabPanel>
      <TabPanel value={value} index={7}>
        6
      </TabPanel>
      <TabPanel value={value} index={8}>
        7
      </TabPanel>
      <TabPanel value={value} index={9}>
        8
      </TabPanel>
      <TabPanel value={value} index={10}>
        9
      </TabPanel>
    </Box>
  );
}
