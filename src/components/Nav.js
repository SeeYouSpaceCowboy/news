import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () =>
  <ul className='nav'>
    <Link to='/home'><h1>News</h1></Link>
    <li><Link to='/us'>US</Link></li>
    <li><Link to='/international'>Interntional</Link></li>
    <li><Link to='/science'>Science</Link></li>
    <li><Link to='/technology'>Tech</Link></li>
    <li><Link to='/code'>Code</Link></li>
  </ul>

export default Nav
