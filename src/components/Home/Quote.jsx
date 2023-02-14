import { useTheme } from '@emotion/react'
import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Quote = () => {
    const theme = useTheme()
  return (
    <Box className="main-box" >
     <Box className="children-box" >
        <Grid item sm={6}  >
            <Typography variant='h4' className='main-font'>
            We help you craft and launch the identity and experiences your business needs to win in today’s digital-first economy.
            </Typography>
            <Button variant='contained' className="quote-btn" >
                Get Quote
            </Button>
        </Grid>
     </Box>
    </Box>
  )
}

export default Quote