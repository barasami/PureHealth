import React, { useEffect, useState } from 'react'
import { myExercise } from './exercise'
import { CircularProgress } from '@mui/material'

function Homeexercise() {
    const[exercise,setExercise]=useState([])
    const[load,setLoad]=useState(false)

    useEffect(()=>{
      setLoad(true)
        myExercise()
        .then(({data})=>{
            setExercise(data)
        })
        setLoad(false)
    },[])

    let myData=exercise?.map((abj)=>{
      const{bodypart,equipment,id,name,target,gifUrl}=abj
      return(
        <div key={id}>
          <div>
            <div>{name}</div>
            <div>{target}</div>
            <div>{bodypart}</div>
            <div>{equipment}</div>
            <div>
              <img src={gifUrl} alt={name}/>
            </div>
          </div>
  
        </div>
      )
    })

    
  return (
    <div>
      {load ? <CircularProgress color='inherit' className='circular'/> : 
      <div> 
        {myData}
      </div>}
    </div>
  )
}

export default Homeexercise