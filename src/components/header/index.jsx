import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../input'

function Header() {
  return (
    <header>
        <div className="logo">
            <img src="/svg/Vector.svg" alt="" />
            <p>X</p>
        </div>
        <nav>
        <ul>
        <li>
            <Link to='/'>Home</Link>
        </li>

        <li>
            <Link to='/movies'>Movies</Link>
        </li>

        <li>
            <Link to='/series'>Series</Link>
        </li>

        <li>
            <Link to='/trending'>Trending</Link>
        </li>

        <li>
            <Link to='/categories'>Categories</Link>
        </li>
        </ul>

        <div className="search">
            <Input/>
            <div className="avatar">
                <img src="/images/Ellipse 14.png" alt="" />
            </div>
        </div>
        </nav>
    </header>
  )
}

export default Header