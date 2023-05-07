import React, { useEffect, useState } from 'react'
import { fitnesCalc } from './fitness'
import './Fitness.css'

function Homefit() {
    const[fitcalc,setFitcalc]=useState([])
    useEffect(()=>{
        fitnesCalc()
        .then(({data})=>{
            setFitcalc(data)
            console.log(data);
        })
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
      <div>{rData}</div>
      
    </div>
  )
}

export default Homefit