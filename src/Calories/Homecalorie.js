import React, { useEffect, useState } from 'react'
import { calorieBurn } from './calorie'
import CircularProgress from '@mui/material/CircularProgress';

function Homecalorie() {
    const[calory,setCalory]=useState([])
    const[load,setLoad]=useState(false)

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
    <div>
      {load ? <CircularProgress color='inherit' className='circular'/> : 
      <div> 
        {myCalory}
      </div>}
    </div>
  )
}

export default Homecalorie