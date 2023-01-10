import React, { useEffect, useState } from 'react';
import {Grid, IconButton} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import '../CSS/card.css';

const Card = (props) => {
    const [showDelete, setShowDelete] = useState(0);
    // useEffect(()=>{
    //   console.log(props);
    // }, []);
    
  return (
    <Grid className='card-container' bgcolor={props.color} onMouseEnter={()=>{
        setShowDelete(true);
    }}
      onMouseLeave={()=>{
          setShowDelete(false);
      }}
    >
      <Grid className='card-heading'>{props.heading}</Grid>
      <Grid className='card-desc'>{props.description}</Grid>
      <Grid className='card-lower' container>
        <Grid className='card-lower-left'>{props.time}</Grid>
        <Grid className='card-lower-middle'>{props.date}</Grid>
        <Grid className='card-lower-right'>
        {
            showDelete ? 
                <IconButton onClick={()=>{console.log(props.id); props.deleteNote(props.id)}}>
                    <DeleteIcon />
                </IconButton>
            : null
        }
        </Grid>         
      </Grid>
    </Grid>
  )
}

export default Card
