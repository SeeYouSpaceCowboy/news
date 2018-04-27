import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () =>
  <ul className='nav'>
    <Link to='/home'><h1>News</h1></Link>
    <li><Link to='/science'>Science</Link></li>
    <li><Link to='/technology'>Tech</Link></li>
    <li><Link to='/business'>Business</Link></li>
  </ul>

export default Nav
