import React, { useEffect, useState } from 'react'
import { myAbout } from './about'
import { CircularProgress } from '@mui/material'
import './About.css'
import Drugform from '../Forms/Drugform'

function Homeabout() {
  const[about,setAbout]=useState([])
  const[load,setLoading]=useState(false)
  const[term,setTerm]=useState('para')

  const checkDrugs=(drugs)=>{
    setTerm(drugs);
  }
  useEffect(()=>{
    setLoading(true)
    myAbout(term)
    .then(({data})=>{
      setAbout(data)
      console.log(data);
      setLoading(false)
    })
    
  },[term])

  let dat=about?.info
  let myresults=Object.entries(dat || {})
  let fReslt=myresults.map(([key,value])=>{
    return(
      <div>
        <div>
          {key} : {value}
        </div>
      </div>
    )
  })


  

  

  return (
    <div className='drugs'>
      <div className='drugspage'>
        <div className='myinputs'>
          <Drugform allDrugs={checkDrugs}/>
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