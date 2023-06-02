import React from 'react'
import './stylesheets/navbar.css'

export default function Navbar() {
  return (
    <nav className="menu d-flex">
        <h3>Shinhyo</h3>
        <ul className='d-flex'>
            <li class="nav-item">
                <a href="#work"><p>Portfolio</p></a>
            </li>
            <li class="nav-item">
                <a href="#aboutContainer"><p>About</p></a>
            </li>
            <li class="nav-item">
                <a href="#contactForm"><p>Contact</p></a>
            </li>
        </ul>
      {/* <img class="bar open-menu" src="img\Icon - Menu.svg" alt="hambuger icon" />
      <img class="bar close-menu" src="img\Icon - Cancel.svg" alt="hambuger icon" /> */}
    </nav>
  )
}
