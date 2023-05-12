import React from 'react'
import './Forms.css'
import { useState } from 'react'

function Fitnessform({mymetrics}) {

    const[muscle,targetMuscle]=useState('')
    const submitMe=(e)=>{
        e.preventDefault()

        if(!muscle || muscle === '')return
        mymetrics(muscle)
        targetMuscle(' ')
    }
  return (
    <div className='formwrap'>
        <form onSubmit={submitMe} className='form'>
            <div className='gender'>
                <input type='text' required placeholder='Targeted Muscle...' className='inputs' 
                value={muscle}
                onChange={(e)=>targetMuscle(e.target.value)} />
            </div>
            <div className='mybtn'>
                <button className='btn'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Fitnessform