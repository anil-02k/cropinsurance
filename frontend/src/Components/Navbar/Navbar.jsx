import React from 'react'
 import logo from '../Assets/logo.png'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='navbar'>
      <Link style={{textDecoration:'none',color:'black'}} to='/'><img src={logo} alt="" className='logo'/></Link>
        
        <ul>
          <li><Link style={{textDecoration:'none',color:'black'}} to='/'>
            Home
          <i className="fa-solid fa-caret-down" style={{marginLeft:'5px', color:'#03A601'}}></i></Link></li>
          <li><Link style={{textDecoration:'none',color:'black'}} to='/document'>Documents<i className="fa-solid fa-caret-down" style={{marginLeft:'5px', color:'#03A601'}}></i></Link></li>
          <li><Link style={{textDecoration:'none',color:'black'}} to='/report'>Report<i className="fa-solid fa-caret-down" style={{marginLeft:'5px', color:'#03A601'}}></i></Link></li>
          <li><Link style={{textDecoration:'none',color:'black'}} to='/gallery'>Gallary<i className="fa-solid fa-caret-down" style={{marginLeft:'5px', color:'#03A601'}}></i></Link></li>
          <li><Link style={{textDecoration:'none',color:'black'}} to='/aboutus'>About Us<i className="fa-solid fa-caret-down" style={{marginLeft:'5px', color:'#03A601'}}></i></Link></li>
        </ul>

        <div className='btn'>
          <button className='btn-style'>
            <i className="fa-solid fa-phone" style={{marginRight:'5px'}}></i>
            Talk to Expert
          </button>
            <Link style={{textDecoration:'none',color:'#03A601'}} to='/login'>
          <button className='btn-style' >
            Sign in
          </button>
            </Link>
        </div>
      </div>

    </>
  )
}

export default Navbar
