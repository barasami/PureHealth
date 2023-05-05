import React, { useEffect, useState } from 'react'
import { fitnesCalc } from './fitness'

function Homefit() {
    const[fitcalc,setFitcalc]=useState([])
    useEffect(()=>{
        fitnesCalc()
        .then(({data})=>{
            setFitcalc(data)
            console.log(data);
        })
    },[])

  
  return (
    <div>Homefit</div>
  )
}

export default Homefit