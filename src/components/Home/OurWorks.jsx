import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'black',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: "30rem"
}));

export default function OurWorks() {
  return (
    <div className='work-section'>
      <Typography variant='h2' className='wedo' color="#47127b">
        What we have done
      </Typography>
      <Box sx={{ flexGrow: 1, marginTop: 10 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={7}>
            <Item className='work1' />
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <Item className='main-div'>
              <div className="work2" />
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <Item className='explore-more'>
              <Typography className='explore-head' variant='h2'>
                Explore more projects
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={7}>
            <Item className='work4' />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
