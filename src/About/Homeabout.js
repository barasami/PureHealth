import React, { useEffect, useState } from 'react'
import { myAbout } from './about'
import { CircularProgress } from '@mui/material'
import './About.css'
import Drugform from '../Forms/Drugform'

function Homeabout() {
  const[about,setAbout]=useState([])
  const[load,setLoading]=useState(false)

  //weight and height from Api
  const[weigt,setWeight]=useState('65')
  const[height,setHeight]=useState('167')

  const checkWeight=(weight)=>{
    setWeight(weight);
  }
  const checkHeight=(height)=>{
    setHeight(height);
  }
  useEffect(()=>{
    setLoading(true)
    myAbout(weigt,height)
    .then(({data})=>{
      setAbout(data)
      console.log(data);
      setLoading(false)
    })
    
  },[weigt,height])

  let dat=about?.info
  let myresults=Object.entries(dat || {})
  let fReslt=myresults.map(([key,value])=>{
    return(
      <div>
        <div className='coolresults'>
          {key} : {value}
        </div>
      </div>
    )
  })


  

  

  return (
    <div className='drugs'>
      <div className='drugspage'>
        <div className='myinputs'>
          <Drugform 
          checkWeight={checkWeight}
          checkHeight={checkHeight}/>
        </div>
        {load ? <CircularProgress color='inherit' className='circular'/> : 
        <div> 
          {fReslt}
        </div>}
      </div>
    </div>
  )
}

export default Homeabout