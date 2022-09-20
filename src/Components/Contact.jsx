import { AddBusiness, AddTask, ContactPage, ContactSupport, ExpandLess, PermContactCalendarTwoTone, PlusOne } from '@mui/icons-material'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { Accordion, AccordionDetails, AccordionSummary, Button, IconButton, Paper, TextField, Typography } from '@mui/material'
import React from 'react'

function Contact() {
  return (
    <div style={{margin:20}}>
      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandLess />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{color:'blue'}}>Numbers Porting</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Paper variant='outlined' style={{ margin: 20, padding: 20, borderRadius: 10 }}>
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ marginTop: '10px' }}>You  Don't Have Any Requests To Number Portting</h2>
              <Typography style={{ color: 'blue' }}>Learn More About Porting</Typography>
            </div>
            <div style={{ display: 'flex', gap: 40, justifyContent: 'center' }}>
              <Button variant='outlined' style={{ marginTop: '350px', marginLeft: '100px' }}>{<AddBusiness />}Start a new port</Button>
              <Button variant='contained' style={{ marginTop: '350px' }}>{<ContactSupport />}Contact support</Button>
            </div>
          </Paper>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default Contact