import React, { useEffect, useState } from 'react'
import { fitnesCalc } from './fitness'
import './Fitness.css'
import { CircularProgress } from '@mui/material'
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
        <div key={name}>
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