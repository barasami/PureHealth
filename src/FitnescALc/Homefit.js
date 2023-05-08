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
            setLoad(false)
        })
        
    },[])

    

    let fitData=Object.entries(fitcalc || {})
    let rData=fitData?.map(([key,val])=>{
      return(
        <div key={key}>
          <div >
            {key}:{val}
          </div>
        </div>
      )
    })
   
    
    


  
  return (
    <div  className='Rdata'>
      <div className='data'>
        <div>hello</div>
        <div>
          {load ? <CircularProgress color='inherit' className='circular'/> : 
          <div> 
            {rData}
          </div>}
        </div>
      </div>
    </div>
  )
}

export default Homefit