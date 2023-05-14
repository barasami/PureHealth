import React, { useEffect, useState } from 'react'
import { calorieBurn } from './calorie'
import CircularProgress from '@mui/material/CircularProgress';
import './Calorie.css'
import Calorieform from '../Forms/Calorieform';
import { Paper, Typography } from '@mui/material';

function Homecalorie() {
    const[calory,setCalory]=useState([])
    const[load,setLoad]=useState(false)
    const[activity,setActivity]=useState('skiing')

    const allInput=(input)=>{
      setActivity(input);
    }

    useEffect(()=>{
      setLoad(true)
      calorieBurn(activity)
      .then(({data})=>{
        setCalory(data)
        setLoad(false)
      })
      
    },[activity])


    let myCalory=calory?.map((cal)=>{
      const{name,total_calories,duration_minutes,calories_per_hour}=cal
      return(
        <Paper elevation={3} key={name} className='calorydata'>
            <Typography color='seagreen' variant='h6' p={1}>
              Activity {name}
            </Typography>
            <Typography color='seagreen'p={1} variant='h8'>
              Total Calories {total_calories}
            </Typography>
            <Typography color='seagreen' p={1} variant='h8'>
              Duration {duration_minutes}Minutes
            </Typography>
            <Typography color='seagreen' p={1} variant='h8'>
              Calory in an Hour{calories_per_hour}
            </Typography>
        </Paper>
      )
    })
  return (
    <div className='calorie'>
      <div className='caloriedata'>
        <div className='myinputs'>
          <Calorieform allCalory={allInput}/>
        </div>
        <div className='mycalorie'>
          {load ? <CircularProgress color='inherit' className='circular'/> : 
          <div> 
            {myCalory}
          </div>}
        </div>
      </div>
    </div>
  )
}

export default Homecalorie