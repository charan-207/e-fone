import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Card, TextareaAutosize, TextField, IconButton } from '@mui/material';
import './style.css'
import { CheckBox, CheckBoxOutlineBlank, CurrencyRupee } from '@mui/icons-material';
import { display } from '@mui/system';

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
          <Tab label="Current Plans" {...a11yProps(0)} />
          <Tab label="Addons" {...a11yProps(1)} />

        </Tabs>

      </Box>

      <TabPanel value={value} index={0}>
        <Typography size='large'>Explore Add-icons</Typography>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <Card style={{
              padding: 5,
              display: 'flex',
              // margin: '40px',
              marginTop:20,
              background: "#FFFFFF",
              border: '1px solid black'
            }}>
              <div style={{ display: 'flex' }}>
                <Typography style={{ display: 'flex' }}> <CheckBoxOutlineBlank />Viocemail Transcription</Typography>
                <Typography style={{ marginTop: '40px', marginLeft: '-190px' }} >Allow users to see viocemail Transcription</Typography>
                <Typography style={{ marginRight: '20px', marginTop: '20px' }}>{<CurrencyRupee />}1.5 Per user</Typography>
              </div>
            </Card>
            <Grid item md={6}></Grid>
          </Grid>
          <Grid item md={6}>
            <Card style={{
              padding: 5,
              display: 'flex',
              gap: 30, 
              // margin: '40px',
              marginTop:20,
              background: "#FFFFFF",
              border: '1px solid black'
            }}>
              <div style={{ display: 'flex' }}>
                <Typography > <CheckBoxOutlineBlank />Call Scripe</Typography>
                <Typography style={{ marginTop: '40px', marginLeft: '-100px' }} >Allow users to see call scripe</Typography>
                <Typography style={{ marginRight: '20px', marginTop: '20px' }}>{<CurrencyRupee />}10 Per user</Typography>
              </div>
            </Card>
          </Grid>
          <Grid item md={6}>
            <Card style={{
              padding: 5,
              display: 'flex',
              marginTop:20,
              background: "#FFFFFF",
              border: '1px solid black'
            }}>
              <div style={{ display: 'flex' }}>
                <Typography > <CheckBoxOutlineBlank />Customer Caller ID</Typography>
                <Typography style={{ marginTop: '40px', marginLeft: '-150px' }} >It allows you to display any number you want</Typography>
                <Typography style={{ marginRight: '10px', marginTop: '14px' }}>{<CurrencyRupee />}12 Per user</Typography>
              </div>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>




    </Box >
  );
}
