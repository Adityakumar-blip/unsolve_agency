import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const WhatWeDo = () => {
  return (
    <>
    <Box className="wedo-main">
        <Box className="wedo-main-heading">
            <Typography variant='h2' className='wedo' color="#47127b" >
                What we Do
            </Typography>
        </Box>
        <Box className="wedo-list">
            <Box>
                <Typography variant='h2' className='wedo-list-heading' color="black">
                    Web & Mobile Development 
                </Typography>
            </Box>
            <Box>
                <Typography variant='h2' className='wedo-list-heading' color="black">
                    Digital Marketing
                </Typography>
            </Box>
            <Box>
                <Typography variant='h2' className='wedo-list-heading' color="black">
                    Branding
                </Typography>
            </Box>
        </Box>
    </Box>
    </>
  )
}

export default WhatWeDo