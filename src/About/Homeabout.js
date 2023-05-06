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

  

  // let myData=about?.map(({dat})=>{
  //   const[id,name,price,rank,content,companyName]=dat

  //   return(
  //     <div key={id}>
  //       <div>
  //         <div>{name}</div>
  //         <div>{companyName}</div>
  //         <div>{rank}</div>
  //         <div>{content}</div>
  //         <div>{price}</div>
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