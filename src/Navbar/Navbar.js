import React from 'react'
import { useState } from 'react'
import DehazeIcon from '@mui/icons-material/Dehaze';
import ClearIcon from '@mui/icons-material/Clear';
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    const[menu,setMenu]=useState(false)
    const changeMe=()=>{
        setMenu(!menu)
    }
  return (
    <nav className='navbar'>
        <div className='title'>Purehealth</div>
        <div className='mymenu' onClick={changeMe}>
            {menu ? <DehazeIcon className='icon'/>: <ClearIcon className='icon'/>  }
        </div>
        <div className={menu ? 'Dontshow' : 'show'}>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/bmi'>Bmi</Link></li>
                <li><Link to='/muscles'>Muscles</Link></li>
                <li><Link to='/calorie'>Calorie</Link></li>
                
            </ul>
        </div>
    </nav>
  )
}

export default Navbar