import React, { useEffect, useState } from 'react'
import {Grid, TextField, Box, Button, Modal, Typography} from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import '../CSS/topbar.css';
import { Image } from '@mui/icons-material';

const TopBar = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const [borderOn, setBorderOn] = useState(0);
  const [heading, setHeading] = useState('');
  const [desc, setDesc] = useState('');

//   useEffect(()=>{
//     console.log(props.addNewNote);
//   }, [])

  const addNote = () => {
    if(heading === '' || borderOn === 0) return;
    const finalColor = borderOn === 1 ? '#30fd56' 
                        : borderOn === 2 ? '#30abfd'
                            : borderOn === 3 ? '#cf5bfd'
                                : '#fdf85b';
    
    var date = new Date();
    date = date.toString().split(' ');

    const finalObj = {
        'heading': heading,
        'description': desc,
        'color': finalColor,
        'date': date[2] + ' ' + date[1],
        'time': date[4].substr(0,5)
    }
    setHeading('');
    setDesc('');
    setBorderOn(0);
    // console.log(finalObj);
    props.addNewNote(finalObj);
    setOpenModal(!openModal);
  }

  return (
    <Grid className='topbar-container'>
        <Grid className='topbar-left' sx={{
            fontSize: '26px',
            fontFamily: 'sans-serif',
            fontWeight: 'bold'
        }}>
        <Image src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngegg.com%2Fen%2Fpng-wlnjk&psig=AOvVaw0TTe0cAvHKcUBYOx_aDAY8&ust=1671968226436000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMi3qpSVkvwCFQAAAAAdAAAAABAR" />Keep Notes</Grid>
        <Box
            className='topbar-middle'
            sx={{
                width: 500,
                maxWidth: '100%',
            }}
        >
            <TextField className='topbar-input' onChange={(e)=>{props.searchNote(e)}} fullWidth label="search" id="fullWidth" />
        </Box>
        <Button onClick={()=>{
            setOpenModal(!openModal);
        }} className='topbar-right' variant='contained'><AddOutlinedIcon /> New</Button>

        <Grid>
            <Modal
                open={openModal}
                onClose={(e, reason)=>{
                    if (reason && reason === "backdropClick") return;
                    setOpenModal(!openModal);
                }}
                
            >
            <Box className='topbar-modal-main'>
                <TextField value={heading} onChange={(e) => setHeading(e.target.value)} sx={{marginTop: '10px', width: '85%'}} label="Heading" variant="standard" />
                <TextField value={desc} onChange={(e) => setDesc(e.target.value)} sx={{marginTop: '20px', width: '85%'}} label="Description" rows={6} multiline variant="standard" />
                <Grid className='topbar-modal-lower'>
                    <Grid className='topbar-modal-radios-main'>
                        <Grid onClick={()=>{setBorderOn(1);}} boxShadow={borderOn===1?'0 0 3px 1px black':null} sx={{backgroundColor: '#30fd56'} } className='topbar-modal-radios'></Grid>
                        <Grid onClick={()=>{setBorderOn(2);}} boxShadow={borderOn===2?'0 0 3px 1px black':null} sx={{backgroundColor: '#30abfd'} } className='topbar-modal-radios'></Grid>
                        <Grid onClick={()=>{setBorderOn(3);}} boxShadow={borderOn===3?'0 0 3px 1px black':null} sx={{backgroundColor: '#cf5bfd'} } className='topbar-modal-radios'></Grid>
                        <Grid onClick={()=>{setBorderOn(4);}} boxShadow={borderOn===4?'0 0 3px 1px black':null} sx={{backgroundColor: '#fdf85b'} } className='topbar-modal-radios'></Grid>
                    </Grid>
                    <Grid className='topbar-modal-buttons'>
                        <Button size='small' variant='outlined' onClick={()=>{setOpenModal(!openModal)}}>Cancel</Button>
                        <Button size='small' variant='contained' onClick={addNote}>Add</Button>
                    </Grid>
                </Grid>
            </Box>
            </Modal>
        </Grid>
    </Grid>
  )
}

export default TopBar
