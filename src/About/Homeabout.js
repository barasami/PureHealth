import React, { useEffect, useState } from 'react'
import { myAbout } from './about'

function Homeabout() {
    const[about,setAbout]=useState([])
    useEffect(()=>{
        myAbout()
        .then((data)=>{
            setAbout(data)
            console.log(data);
        })
    },[])
  return (
    <div>Homeabout</div>
  )
}

export default Homeabout