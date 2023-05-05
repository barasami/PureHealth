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
    <div>
      {/* {myData} */}
    </div>
  )
}

export default Homeabout