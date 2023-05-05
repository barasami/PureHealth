import React, { useEffect, useState } from 'react'
import { myExercise } from './exercise'

function Homeexercise() {
    const[exercise,setExercise]=useState([])

    useEffect(()=>{
        myExercise()
        .then(({data})=>{
            setExercise(data)
            console.log(data);
        })
    },[])

    
  return (
    <div>
      
    </div>
  )
}

export default Homeexercise