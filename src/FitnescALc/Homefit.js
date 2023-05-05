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

    // let calcHealth=fitcalc?.map(({info})=>{
     
    //   console.log(info);
    //   return(
    //     <div>
    //       {/* <div>{bmi}</div>
    //       <div>{health}</div> */}
    //     </div>
    //   )
    // })

  
  return (
    <div>
      {/* {calcHealth} */}
    </div>
  )
}

export default Homefit