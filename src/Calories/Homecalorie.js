import React, { useEffect, useState } from 'react'
import { calorieBurn } from './calorie'
import CircularProgress from '@mui/material/CircularProgress';
import './Calorie.css'
import Calorieform from '../Forms/Calorieform';

function Homecalorie() {
    const[calory,setCalory]=useState([])
    const[load,setLoad]=useState(false)

    const allInput=(input)=>{
      console.log(input);
    }

    useEffect(()=>{
      setLoad(true)
      calorieBurn()
      .then(({data})=>{
        setCalory(data)
        setLoad(false)
      })
      
    },[])


    let myCalory=calory?.map((cal)=>{
      const{name,total_calories,duration_minutes,calories_per_hour}=cal
      return(
        <div key={name}>
          <div>
            <div>{name}</div>
            <div>{total_calories}</div>
            <div>{duration_minutes}</div>
            <div>{calories_per_hour}</div>
          </div>
        </div>
      )
    })
  return (
    <div className='calorie'>
      <div className='caloriedata'>
        <div className='myinputs'>
          <Calorieform allCalory={allInput}/>
        </div>
        <div>
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