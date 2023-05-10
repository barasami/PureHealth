import React, { useEffect, useState } from 'react'
import { fitnesCalc } from './fitness'
import './Fitness.css'
import { CircularProgress } from '@mui/material'
import Fitnessform from '../Forms/Fitnessform'

function Homefit() {
    const[fitcalc,setFitcalc]=useState([])
    const[load,setLoad]=useState(false)

    const allMetrics=(coolData)=>{
      console.log(coolData);
    }
    useEffect(()=>{
        setLoad(true)
        fitnesCalc()
        .then(({data})=>{
            setFitcalc(data)
            console.log(data);
            setLoad(false)
        })
        
    },[])

    

    const tarMuscle=fitcalc?.map((data)=>{
      const{difficulty,equipment,instructions,muscle,name,type,id}=data
      return(
        <div key={id}>
          <div>
            <div>{difficulty}</div>
            <div>{equipment}</div>
            <div>{instructions}</div>
            <div>{muscle}</div>
            <div>{name}</div>
            <div>{type}</div>
          </div>
        </div>
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