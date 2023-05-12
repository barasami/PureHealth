import React from 'react'
import './Forms.css'
import { useState } from 'react'


function Calorieform({allCalory}) {
    const[calory,setCalory]=useState('')
    const submitMe=(e)=>{
        e.preventDefault()
        if(!calory|| calory === '')
        return
        allCalory(calory)
        setCalory('')
    }
  return (
    <div className='formwrap'>
        <form onSubmit={submitMe} className='form'>
            <div className='mytext'>
                <input type='text' required placeholder='Activity...' className='inputs' value={calory}
                onChange={(e)=>setCalory(e.target.value)} />
            </div>
            <div className='mybtn'>
                <button className='btn'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Calorieform