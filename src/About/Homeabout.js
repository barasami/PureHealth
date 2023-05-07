import React, { useEffect, useState } from 'react'
import { myAbout } from './about'
import { CircularProgress } from '@mui/material'

function Homeabout() {
  const[about,setAbout]=useState([])
  const[load,setLoading]=useState(false)
  useEffect(()=>{
    setLoading(true)
    myAbout()
    .then((data)=>{
      setAbout(data)
    })
    setLoading(false)
  },[])


  let myDrugs=about?.medicines
  
  let myDrugdata=myDrugs?.map(({name,price,rank,id,content,companyName})=>{
    return(
      <div key={id}>
          <div>{name}</div>
          <div>{companyName}</div>
          <div>{price}</div>
          <div>{rank}</div>
          <div>{content}</div>
      </div>
    )
  })
  

  

  return (
    <div>
      {load ? <CircularProgress color='inherit' className='circular'/> : 
      <div> 
        {myDrugdata}
      </div>}
    </div>
  )
}

export default Homeabout