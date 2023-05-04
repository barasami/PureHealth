import React, { useEffect, useState } from 'react'
import { calorieBurn } from './calorie'

function Homecalorie() {
    const[calory,setCalory]=useState([])

    useEffect(()=>{
        calorieBurn()
        .then(({data})=>{
            setCalory(data)
            console.log(data);
        })
    },[])
  return (
    <div>Homecalorie</div>
  )
}

export default Homecalorie