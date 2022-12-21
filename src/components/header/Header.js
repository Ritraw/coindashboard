import React from 'react'
import './Header.css'
import Button from '../button/Button'
import Drawer from './Drawer'

function Header() {
  return (
    <div className='header'>
        <h1>CryptoTracker <span style={{color:"var(--blue)"}}>.</span></h1>        
        <div className='link-flex'>
          <a href='/'>
            <p className='link'>Home</p>
          </a>
          <a href='/'>
            <p className='link'>Compare</p>
          </a>
          <a href='/'>
            <p className='link'>WatchList</p>
          </a>
          
          <Button text="Dashboard"
            onClick= {()=>{console.log("Clicked")}}
            />
        </div>
        <Drawer/>
    </div>
  )
}

export default Header