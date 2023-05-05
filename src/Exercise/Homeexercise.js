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

    let myData=exercise?.map((abj)=>{
      const{bodypart,equipment,id,name,target,gifurl}=abj
      return(
        <div key={id}>
          <div>
            <div>{name}</div>
            <div>{target}</div>
            <div>{bodypart}</div>
            <div>{equipment}</div>
            <div>
              <img src={gifurl} alt={name}/>
            </div>
          </div>
  
        </div>
      )
    })

    
  return (
    <div>
      {myData}
    </div>
  )
}

export default Homeexercise