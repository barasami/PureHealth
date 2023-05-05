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

  // let myData=about?.map((abj)=>{
  //   const{bodypart,equipment,id,name,target,gifurl}=abj
  //   return(
  //     <div key={id}>
  //       <div>
  //         <div>{name}</div>
  //         <div>{target}</div>
  //         <div>{bodypart}</div>
  //         <div>{equipment}</div>
  //         <div>
  //           <img src={gifurl} alt={name}/>
  //         </div>
  //       </div>

  //     </div>
  //   )
  // })

  return (
    <div>
      {/* {myData} */}
    </div>
  )
}

export default Homeabout