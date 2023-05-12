import React, { useEffect, useState } from 'react'
import { calorieBurn } from './calorie'
import CircularProgress from '@mui/material/CircularProgress';
import './Calorie.css'
import Calorieform from '../Forms/Calorieform';

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
        <div key={name}>
          <div>
            <div>
              Activity {name}</div>
            <div>
              Total Calories {total_calories}</div>
            <div>
              Duration {duration_minutes}Minutes</div>
            <div>
              Calory in an Hour{calories_per_hour}</div>
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