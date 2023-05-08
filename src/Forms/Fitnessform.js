import React from 'react'

function Fitnessform() {
  return (
    <div>
        <div>
            <div>
                <input type='text' required placeholder='gender' />
            </div>
            <div>
                <input type='number' required/>
            </div>
            <div>
                <input type='number' required/>
            </div>
            <div>
                <input type='number' required />
            </div>
            <div>
                <button>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Fitnessform