import * as React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, Grid, IconButton, Stack } from '@mui/material';
import { AddIcCall, PermContactCalendarSharp, RemoveRedEye, SignalCellularAlt, SignalCellularConnectedNoInternet3BarOutlined, SignalWifiStatusbarNull } from '@mui/icons-material';




export default function Skills() {
  return (




    <div style={{
      margin: '40px', background: "#FFFFFF",
      boxShadow: "0px 12.5214px 16.9039px rgb(0 0 0 / 5%)",
    }}>
      <Card style={{ orderRadius: 15 }}>
        <Grid container spacing={8}>
          <Grid item md={3}>
            <Card
              style={{
                padding: 15,
                display: 'flex',
                gap: 30, margin: '40px',
                background: "#FFFFFF",
                border: '1px solid red'
                //boxShadow: "0px 12.5214px 16.9039px rgb(0 0 0 / 5%)",
                // border: '2px solid black'
              }}>
              <div style={{ marginTop: '20px' }} >
                <Avatar>
                  <IconButton aria-label='contact' style={{ color: 'lightblue' }}>
                    <PermContactCalendarSharp />
                  </IconButton>
                </Avatar>
              </div>
              <div>
                <Typography >TotalUsers</Typography>
                <Typography style={{ color: 'blue', marginTop: 10 }}>418</Typography>
                <Button variant='outlined' size='small' style={{ marginTop: 10 }} startIcon={<AddIcCall />}>AddUsers</Button>
              </div>
            </Card>
          </Grid>

          <Grid item md={3}>
            <Card
              style={{
                padding: 10,
                display: 'flex',
                gap: 30, margin: '40px',
                background: "#FFFFFF",
                border: '1px solid black'
              }}
            >
              <div style={{ marginTop: '20px' }}>
                <IconButton style={{ width: 40, height: 40, background: 'lightgray', border: '1px solid orange' }}>
                  <SignalCellularAlt style={{ color: 'blue' }} />
                </IconButton>
              </div>
              <div>
                <Typography>Total Numbers</Typography>
                <Typography style={{ color: 'blue', marginTop: 10 }}> 599</Typography>
                <Button
                  size='small'
                  variant='outlined'
                  style={{ marginTop: 10 }}
                  startIcon={<RemoveRedEye />}
                >
                  View
                </Button>
              </div>
            </Card>

          </Grid >

          <Grid item md={3}>

            <Card
              style={{
                padding: 15,
                display: 'flex',
                gap: 30, margin: '40px',
                background: "#FFFFFF",
                border: '1px solid blue'
              }}
            >
              <div style={{ marginTop: '20px' }}>
                <IconButton style={{ width: 40, height: 40, background: 'lightgray', border: '1px solid pink' }}>
                  <SignalCellularAlt style={{ color: 'blue' }} />
                </IconButton>
              </div>
              <div>
                <Typography>Live Calls</Typography>
                <Typography style={{ color: 'blue', marginTop: 10 }}> 99</Typography>
                <Button
                  size='small'
                  variant='outlined'
                  style={{ marginTop: 10 }}
                  startIcon={<RemoveRedEye />}
                >
                  View
                </Button>
              </div>
            </Card>


          </Grid>
          <Grid item md={3}>
            <Card
              style={{
                padding: 10,
                display: 'flex',
                gap: 30,
                margin: '40px',
                background: "#FFFFFF",
                border: '1px solid green'
              }}
            >
              <div style={{ marginTop: '20px' }}>
                <IconButton style={{ width: 40, height: 40, background: 'lightgray', border: '1px solid yellow' }}>
                  <SignalCellularAlt style={{ color: 'red' }} />
                </IconButton>
              </div>
              <div>
                <Typography>Calls in Queue</Typography>
                <Typography style={{ color: 'blue', marginTop: 10 }}> 99</Typography>
                <Button
                  size='small'
                  variant='outlined'
                  style={{ marginTop: 10 }}
                  startIcon={<RemoveRedEye />}
                >
                  View
                </Button>
              </div>
            </Card>
          </Grid>
        </Grid >
      </Card>
    </div >
  )
}
