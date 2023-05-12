import React from 'react'
import './Forms.css'
import { useState } from 'react'

function Drugform({checkWeight,checkHeight}) {
  const[myheight,setMyheight]=useState('')
  const[myweight,setMyweight]=useState('')
  const submitMe=(e)=>{
    e.preventDefault()
    if(!myheight || myheight ==='')
    return
    checkHeight(myheight)
    setMyheight(' ')

    if(!myweight || myweight ==='')
    return
    checkWeight(myheight)
    setMyweight(' ')
  }
  return (
    <div className='formwrap'>
        <form onSubmit={submitMe} className='form'>
          <div className='mytext'>
            <input type='number' required placeholder='Height...' className='inputs'
              value={myheight}
             onChange={(e)=>setMyheight(e.target.value)} 
            />
          </div>
          <div className='myweight'>
            <input type='number' required placeholder='Weight...' className='inputs'
              value={myweight}
             onChange={(e)=>setMyweight(e.target.value)} 
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