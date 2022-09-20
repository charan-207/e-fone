import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Card, Divider, Grid, IconButton, InputAdornment, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import { Add, AddAlert, CallMade, CallToActionTwoTone, CheckBox, Clear, ContactMailRounded, ContactPage, ContactPageOutlined, ContactPhone, ContentPasteSearchOutlined, GraphicEq, ImportContactsRounded, MoreHoriz, Search } from '@mui/icons-material';

export default function About() {

  return (
    <div style={{ margin: 30 }}>

      <Grid container spacing={8}>
        <Grid item md={2} ></Grid>
        <Grid item md={8}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Users</Typography>
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Users</TableCell>
                      <TableCell>Primary Number</TableCell>
                      <TableCell>Directory</TableCell>
                      <TableCell>Permisssions</TableCell>
                      <TableCell>Action</TableCell>

                    </TableRow>
                  </TableHead>

                  <TableBody>

                    <TableCell>Charan</TableCell>
                    <TableCell>9494774792</TableCell>
                    <TableCell>
                      < CheckBox style={{ color: 'blue' }} />
                    </TableCell>

                    <TableCell style={{ display: 'flex', gap: 10 }}>
                      <IconButton style={{ width: 40, height: 40, background: 'blue', border: '1px solid white' }}>
                        {<ContentPasteSearchOutlined style={{ color: 'white' }} />}
                      </IconButton>
                      <IconButton style={{ width: 40, height: 40, background: 'blue', border: '1px solid white' }}>
                        {<ContactPhone style={{ color: 'white' }} />}
                      </IconButton>
                      <IconButton style={{ width: 40, height: 40, background: 'blue', border: '1px solid white' }}>
                        {<CallMade style={{ color: 'white' }} />}
                      </IconButton>
                      <IconButton style={{ width: 40, height: 40, background: 'blue', border: '1px solid white' }}>
                        {<GraphicEq style={{ color: 'white' }} />}
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      <MoreHoriz
                        Onclo />

                    </TableCell>


                  </TableBody>
                  <TableBody>

                    <TableCell>Sales</TableCell>
                    <TableCell>9494774792</TableCell>
                    <TableCell>
                      < CheckBox style={{ color: 'blue' }} />
                    </TableCell>

                    <TableCell style={{ display: 'flex', gap: 10 }}>
                      <IconButton style={{ width: 40, height: 40, background: 'blue', border: '1px solid white' }}>
                        {<ContentPasteSearchOutlined style={{ color: 'white' }} />}
                      </IconButton>
                      <IconButton style={{ width: 40, height: 40, background: 'blue', border: '1px solid white' }}>
                        {<ContactPhone style={{ color: 'white' }} />}
                      </IconButton>
                      <IconButton style={{ width: 40, height: 40, background: 'blue', border: '1px solid white' }}>
                        {<CallMade style={{ color: 'white' }} />}
                      </IconButton>
                      <IconButton style={{ width: 40, height: 40, background: 'blue', border: '1px solid white' }}>
                        {<GraphicEq style={{ color: 'white' }} />}
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      <MoreHoriz />
                    </TableCell>


                  </TableBody>

                  <TableBody>

                    <TableCell>Support</TableCell>
                    <TableCell>9494774792</TableCell>
                    <TableCell>

                    </TableCell>

                    <TableCell style={{ display: 'flex', gap: 10 }}>
                      <IconButton style={{ width: 40, height: 40, background: 'blue', border: '1px solid white' }}>
                        {<ContentPasteSearchOutlined style={{ color: 'white' }} />}
                      </IconButton>
                      <IconButton style={{ width: 40, height: 40, background: 'blue', border: '1px solid white' }}>
                        {<ContactPhone style={{ color: 'white' }} />}
                      </IconButton>
                      <IconButton style={{ width: 40, height: 40, background: 'blue', border: '1px solid white' }}>
                        {<CallMade style={{ color: 'white' }} />}
                      </IconButton>
                      <IconButton style={{ width: 40, height: 40, background: 'blue', border: '1px solid white' }}>
                        {<GraphicEq style={{ color: 'white' }} />}
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      <MoreHoriz />
                    </TableCell>


                  </TableBody>
                  <TableBody>

                    <TableCell>Text Support</TableCell>
                    <TableCell>9494774792</TableCell>
                    <TableCell>

                    </TableCell>

                    <TableCell style={{ display: 'flex', gap: 10 }}>
                      <IconButton style={{ width: 40, height: 40, background: 'blue', border: '1px solid white' }}>
                        {<ContentPasteSearchOutlined style={{ color: 'white' }} />}
                      </IconButton>
                      <IconButton style={{ width: 40, height: 40, background: 'blue', border: '1px solid white' }}>
                        {<ContactPhone style={{ color: 'white' }} />}
                      </IconButton>
                      <IconButton style={{ width: 40, height: 40, background: 'blue', border: '1px solid white' }}>
                        {<CallMade style={{ color: 'white' }} />}
                      </IconButton>
                      <IconButton style={{ width: 40, height: 40, background: 'blue', border: '1px solid white' }}>
                        {<GraphicEq style={{ color: 'white' }} />}
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      <MoreHoriz />
                    </TableCell>


                  </TableBody>
                  <TableBody>

                    <TableCell>Billing Support</TableCell>
                    <TableCell>9494774792</TableCell>
                    <TableCell>
                      < CheckBox style={{ color: 'blue' }} />
                    </TableCell>

                    <TableCell style={{ display: 'flex', gap: 10 }}>
                      <IconButton style={{ width: 40, height: 40, background: 'blue', border: '1px solid white' }}>
                        {<ContentPasteSearchOutlined style={{ color: 'white' }} />}
                      </IconButton>
                      <IconButton style={{ width: 40, height: 40, background: 'blue', border: '1px solid white' }}>
                        {<ContactPhone style={{ color: 'white' }} />}
                      </IconButton>
                      <IconButton style={{ width: 40, height: 40, background: 'blue', border: '1px solid white' }}>
                        {<CallMade style={{ color: 'white' }} />}
                      </IconButton>
                      <IconButton style={{ width: 40, height: 40, background: 'blue', border: '1px solid white' }}>
                        {<GraphicEq style={{ color: 'white' }} />}
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      <MoreHoriz />
                    </TableCell>


                  </TableBody>

                </Table>
              </TableContainer>


            </AccordionDetails>

          </Accordion>

          <div style={{ marginTop: 20 }}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >

                <Typography style={{ color: 'blue' }}>Desk Phones</Typography>
              </AccordionSummary>
              <Divider />
              <AccordionDetails>
                <Card
                  style={{
                    padding: 10,
                    display: 'flex',
                    gap: 20,
                    borderRadius: 10

                  }}
                >
                  {<CallToActionTwoTone style={{ height: 80, width: 50, color: 'blue' }} />}
                  <Typography>
                    Two decades of evolution of mobile phones, from a 1992 Motorola 8900X-2 to the 2014 iPhone 6 Plus
                    A mobile phone, cellular phone, cell phone, cellphone, handphone, hand phone or pocket phone,
                    sometimes shortened to simply mobile, cell, or just phone,
                    is a portable telephone that can make and receive calls
                    over a radio frequency link while the user is moving within a telephone service area.
                  </Typography>

                </Card>
                <Card
                  style={{
                    padding: 15,
                    display: 'flex',
                    gap: 20,
                    marginTop: '20px',
                    borderRadius: 10
                  }}
                >
                  {<ContactPage style={{ height: 70, width: 50, color: "orange" }} />}
                  <Typography>
                    Two decades of evolution of mobile phones, from a 1992 Motorola 8900X-2 to the 2014 iPhone 6 Plus
                    A mobile phone, cellular phone, cell phone, cellphone, handphone, hand phone or pocket phone,
                    sometimes shortened to simply mobile, cell, or just phone,
                    is a portable telephone that can make and receive calls
                    over a radio frequency link while the user is moving within a telephone service area.
                  </Typography>

                </Card>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px' }}>
                  <TextField
                    placeholder='Search Deskphone'
                    size='small'
                    variant='outlined'
                    InputProps={{
                      endAdornment: (
                        <InputAdornment>
                          <IconButton>
                            <SearchIcon />
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />
                  <Button variant='outlined' size='small' style={{ marginLeft: 10 }}>
                    {<AddAlert />}
                    Add a Room Phone
                  </Button>
                </div>
                <Typography>Room Phone</Typography>
                <Grid container spacing={2} style={{ display: 'block', display: 'flex', alignItems: 'center' }}>
                  <Grid item md={9}>
                    <TextField
                      placeholder='Search Deskphone'
                      size='small'
                      variant='outlined'
                      InputProps={{
                        endAdornment: (
                          <InputAdornment>
                            <IconButton>
                              <SearchIcon />
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                    />
                  </Grid>
                  <Grid item md={3} >
                    <Button variant='outlined' size='small' style={{ marginLeft: 10 }}>
                      {<AddAlert />}
                      Add a Room Phone
                    </Button>
                  </Grid>
                </Grid>

                <Typography>Total  Deskphones: 0</Typography>
                <Card style={{
                  border: '1px solid black',
                  marginTop: 30
                }}>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>DeviceName</TableCell>
                          <TableCell>MacAddress</TableCell>
                          <TableCell>Numbers</TableCell>
                          <TableCell>Status</TableCell>
                          <TableCell>Fax Enabled</TableCell>
                        </TableRow>
                      </TableHead>
                    </Table>
                  </TableContainer>
                </Card>
                <Typography style={{
                  display: 'flex',
                  justifyContent: 'center'
                  , marginTop: 10, borderRadius: 10
                }}>No DeskPhone Found</Typography>

              </AccordionDetails>
            </Accordion>
          </div>
          <div style={{ marginTop: 20 }}>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >


                <Typography style={{ color: 'blue' }}>Call History</Typography>
              </AccordionSummary>
              <Divider />
              <AccordionDetails>

                

                <div style={{marginTop:20}}>
                <Grid container spacing={3}>
                  <Grid item md={3}>
                  <Typography>Select From Date</Typography>
                    <TextField
                      placeholder='From date'
                      size='small'
                      type='date'
                      variant='outlined'

                    />
                  </Grid>
                  
                  <Grid item md={3}>
                    <Typography>Select To Date</Typography>
                    <TextField
                      placeholder='To Date'
                      size='small'
                      type='date'
                      variant='outlined'

                    />
                    
                  </Grid>
                
                  <Grid item md={3} style={{marginTop:22}}>
                    <TextField
                      placeholder='Search'
                      size='small'
                      variant='outlined'
                      InputProps={{
                        endAdornment: (
                          <InputAdornment>
                            <IconButton>
                              <SearchIcon  style={{backgroundColor:'blue'}}/>
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                    />
                  </Grid>
                  <Grid item md={3} style={{marginTop:22}}>
                    <TextField
                      placeholder='Clear'
                      size='small'
                      variant='outlined'
                      InputProps={{
                        endAdornment: (
                          <InputAdornment>
                            <IconButton>
                              <Clear  style={{backgroundColor:'blue'}}/>
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                    />
                  </Grid>
                  
                </Grid>
                </div>

                <Typography style={{marginTop:20}}>Total  Calls: 0</Typography>
                <Card style={{
                  border: '1px solid black',
                  marginTop: 30
                }}>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Agent</TableCell>
                          <TableCell>From Number</TableCell>
                          <TableCell>To Number</TableCell>
                          <TableCell>Time</TableCell>
                          <TableCell>Duration(sec)</TableCell>
                          <TableCell>Recording</TableCell>
                        </TableRow>
                      </TableHead>
                    </Table>
                  </TableContainer>
                </Card>
                <Typography style={{
                  display: 'flex',
                  justifyContent: 'center'
                  , marginTop: 10, borderRadius: 10
                }}>No Number Found</Typography>

              </AccordionDetails>
            </Accordion>
          </div>

        </Grid>
        <Grid item md={2}></Grid>

      </Grid>
    </div >
  );
}
