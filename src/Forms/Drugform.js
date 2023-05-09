import React from 'react'
import './Forms.css'
import { useState } from 'react'

function Drugform({allDrugs}) {
  const[drugname,setDrugname]=useState('')
  const submitMe=(e)=>{
    e.preventDefault()
    if(!drugname || drugname ==='')
    return
    else{
      allDrugs(drugname)
      setDrugname(' ')
    }
  }
  return (
    <div>
        <form onSubmit={submitMe}>
          <div className='mytext'>
            <input type='text' required placeholder='Drugname' className='inputs'
              value={drugname}
             onChange={(e)=>setDrugname(e.target.value)} 
            />
          </div>
          <div className='mybtn'>
            <button className='btn' >Submit</button>
          </div>
        </form>
    </div>
  )
}

export default Drugform