import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
// import "./WhatWeDo.css";

const WhatWeDo = () => {
  return (
    <>
    <Box className="wedo-main">
        <Box className="wedo-main-heading">
            <Typography variant='h2' className='wedo'  color="#47127b" >
                What can we do for you? 
            </Typography>
            {/* <Typography className='wedo-para'  >
            Our team will prepare a complete digital solution for your project to suit your needs. Subsequently, it will take care of the further operation and development of your project. You will be in the whole process, and thanks to that you will be sure that the whole project is proceeding according to the set plan.
            </Typography> */}
        </Box>
        <Box className="wedo-list">
            <Box className="wedo-card">
                <Typography variant='h4' className='wedo-list-heading' >
                    Mobile Development 
                </Typography>
            </Box>
            <Box className="wedo-card">
                <Typography variant='h4' className='wedo-list-heading' >
                    Web Development 
                </Typography>
            </Box>
            <Box className="wedo-card">
                <Typography variant='h4' className='wedo-list-heading' >
                    Digital Marketing
                </Typography>
            </Box>
            <Box className="wedo-card">
                <Typography variant='h4' className='wedo-list-heading' >
                    Branding
                </Typography>
            </Box>
        </Box>
    </Box>
    </>
  )
}

export default WhatWeDo;
