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
    .then((data)=>{
      setAbout(data)
      setLoading(false)
    })
    
  },[term])


  let myDrugs=about?.medicines
  
  let myDrugdata=myDrugs?.map(({name,price,rank,id,content,companyName})=>{
    return(
      <div key={id}>
        <div >
          <div>{name}</div>
          <div>{companyName}</div>
          <div>{price}</div>
          <div>{rank}</div>
          <div>{content}</div>
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
          {myDrugdata}
        </div>}
      </div>
    </div>
  )
}

export default Homeabout