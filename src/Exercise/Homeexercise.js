import React, { useEffect, useState } from 'react'
import { myExercise } from './exercise'
import { Box, CircularProgress, Container, Grid, Paper, Typography } from '@mui/material'
import './Exercise.css'

function Homeexercise() {
    const[exercise,setExercise]=useState([])
    const[load,setLoad]=useState(false)

    useEffect(()=>{
      setLoad(true)
        myExercise()
        .then(({data})=>{
            setExercise(data)
            setLoad(false)
        })
        
    },[])

    let myData=exercise?.map((abj)=>{
      const{bodypart,equipment,id,name,target,gifUrl}=abj
      return(
        <Grid key={id} item lg={4} sm={8} xs={12}>
          <Grid elevation={10}>
            <Typography variant='h6' color='seagreen'>
              {name}
            </Typography>
            <Typography variant='h8' color='green'>
              Target {target}
            </Typography>
            <Typography variant='h8' color='green'>
              Body part{bodypart}
            </Typography>
            <Typography color='green'>
              Equipment {equipment}
            </Typography>
            <Box>
              <img src={gifUrl} alt={name}/>
            </Box>
          </Grid >
  
        </Grid>
      )
    })

    
  return (
    <div className='coolexercise'>
      <div className='exercisedata'>
        {load ? <CircularProgress color='inherit' className='circular'/> : 
        <Container className='exercisefinal'> 
          <Grid container spacing={3}>
            {myData}
          </Grid>
        </Container>}
      </div>
    </div>
  )
}

export default Homeexercise