import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height : 200,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  display : 'flex',
  flexDirection : "column",
  justifyContent : "center",
  alignItems:"center"
};

export default function Confirmation({open , handleClose}) {


  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h3" className='confirmation-heaading' component="h2">
            Thank You
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            We will get back to you within 2 hours 🤝
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}