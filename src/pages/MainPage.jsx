import React from 'react'
import Navbar from '../components/Navbar'
import './stylesheets/MainPage.css'
import Socials from '../components/Socials'
import About from '../components/About'
import Projects from '../components/Projects'

export default function MainPage() {
  return (
    <div className='main_container dp-flex'>
      <section className="left_section">
        <div className="top_side">
          <article className="presentation">
            <h1>Shinhyo Belliard</h1>
            <h4>Full-Stack developer</h4>
            <p>I build really cool websites</p>
          </article>
          <Navbar />
        </div>
        <Socials />
      </section>
      <section className="right_section">
        <About />
        <Projects />
      </section>
    </div>
  )
}
