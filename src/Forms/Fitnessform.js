import React from 'react'
import './Forms.css'
import { useState } from 'react'

function Fitnessform() {

    const[gender,setGender]=useState('')
    const[height,setHeight]=useState('')
    const[weight,setWeight]=useState('')
    const[age,setAge]=useState()
    const submitMe=(e)=>{
        e.preventDefault()
    }
  return (
    <div>
        <form onSubmit={submitMe}>
            <div className='gender'>
                <input type='text' required placeholder='Gender' className='inputs' 
                value={gender}
                onChange={(e)=>setGender(e.target.value)} />
            </div>
            <div className='number'>
                <input type='number' required className='inputs' placeholder='height'
                value={height}
                onChange={(e)=>setHeight(e.target.value)}/>
            </div>
            <div className='number'>
                <input type='number' required className='inputs' placeholder='weight'
                value={weight}
                onChange={(e)=>setWeight(e.target.value)}/>
            </div>
            <div className='number'>
                <input type='number' required  className='inputs' placeholder='age'
                value={age}
                onChange={(e)=>setAge(e.target.value)}/>
            </div>
            <div className='mybtn'>
                <button className='btn'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Fitnessform