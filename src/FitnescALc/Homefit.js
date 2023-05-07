import React, { useEffect, useState } from 'react'
import { fitnesCalc } from './fitness'
import './Fitness.css'
import { CircularProgress } from '@mui/material'

function Homefit() {
    const[fitcalc,setFitcalc]=useState([])
    const[load,setLoad]=useState(false)
    useEffect(()=>{
        setLoad(true)
        fitnesCalc()
        .then(({data})=>{
            setFitcalc(data)
        })
        setLoad(false)
    },[])

    

    let fitData=Object.entries(fitcalc || {})
    let rData=fitData?.map(([key,val])=>{
      return(
        <div key={key} className='Rdata'>
          <div className='data'>
            {key}:{val}
          </div>
        </div>
      )
    })
   
    
    


  
  return (
    <div>
      {load ? <CircularProgress color='inherit' className='circular'/> : 
      <div> 
       {rData}
      </div>}
    </div>
  )
}

export default Homefit