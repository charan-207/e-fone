import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, TextareaAutosize, TextField } from '@mui/material';
import './style.css'

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

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Personal Details" {...a11yProps(0)} />
          <Tab label="PhoneNumber" {...a11yProps(1)} />
          <Tab label="Address" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Grid container spacing={2}>
          <Grid item md={1}></Grid>
          <Grid item md={4}>
            <div>
              <TextField
                style={{ marginLeft: '-100px' }}
                className='name'
                name='name'
                placeholder='name'
                fullWidth
                size='small'
              />
              <TextField
                style={{ marginTop: '20px', marginLeft: '-100px' }}
                name='email'
                placeholder='email'
                fullWidth
                size='small'
              />


            </div>
            
          </Grid>
          <Grid item md={7}></Grid>
        </Grid>

        
        <Button variant='contained' style={{ marginLeft: '46px', marginTop: '30px' }}>Next</Button>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TextField
          name='number'
          placeholder='number' />
        <Button variant='contained' style={{ marginLeft: '-150px', marginTop: '80px' }}>Next</Button>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <TextareaAutosize
          name='Address'
          placeholder='Address' />
        <Button variant='contained' style={{ marginLeft: '-150px', marginTop: '80px' }}>Submit</Button>
      </TabPanel>
    </Box>
  );
}
