import React, { useEffect, useState } from 'react'
import { calorieBurn } from './calorie'

function Homecalorie() {
    const[calory,setCalory]=useState([])

    useEffect(()=>{
        calorieBurn()
        .then(({data})=>{
            setCalory(data)
            console.log(data);
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
      {myCalory}
    </div>
  )
}

export default Homecalorie