import React from 'react'
import './Forms.css'
import { useState } from 'react'


function Calorieform({allCalory}) {
    const[calory,setCalory]=useState('')
    const submitMe=(e)=>{
        e.preventDefault()
        if(calory === null || calory === '')
        return
        else{
            allCalory(calory)
            setCalory('')
        }
    }
  return (
    <div>
        <form onSubmit={submitMe}>
            <div className='mytext'>
                <input type='text' required placeholder='activity' className='inputs' value={calory}
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