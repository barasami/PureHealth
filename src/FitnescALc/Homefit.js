import React, { useEffect, useState } from 'react'
import { fitnesCalc } from './fitness'
import './Fitness.css'
import { CircularProgress, Paper, Typography } from '@mui/material'
import Fitnessform from '../Forms/Fitnessform'

function Homefit() {
    const[fitcalc,setFitcalc]=useState([])
    const[load,setLoad]=useState(false)
    const[type,setType]=useState('biceps')

    const allMetrics=(coolData)=>{
      setType(coolData);
    }
    useEffect(()=>{
        setLoad(true)
        fitnesCalc(type)
        .then(({data})=>{
            setFitcalc(data)
            console.log(data);
            setLoad(false)
        })
        
    },[type])

    

    const tarMuscle=fitcalc?.map((data)=>{
      const{difficulty,equipment,instructions,muscle,name,type}=data
      return(
        <Paper key={name} className='getfit'>
          <Typography color='seagreen' p={1}>
            {difficulty}
          </Typography>
          <Typography color='seagreen' p={1}>
            {equipment}
          </Typography>
          <Typography color='seagreen' p={1}>
            {instructions}
          </Typography>
          <Typography color='seagreen' p={1}>
            {muscle}
          </Typography>
          <Typography color='seagreen' p={1}>
            {name}
          </Typography>
          <Typography color='seagreen' p={1}>
            {type}
          </Typography>
        </Paper>
      )

    })
   
    
    


  
  return (
    <div  className='Rdata'>
      <div className='data'>
        <div className='myinputs'>
          <Fitnessform mymetrics={allMetrics}/>
        </div>
        <div>
          {load ? <CircularProgress color='inherit' className='circular'/> : 
          <div> 
            {tarMuscle}
          </div>}
        </div>
      </div>
    </div>
  )
}

export default Homefit