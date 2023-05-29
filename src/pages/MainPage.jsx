import React, { useEffect } from 'react';
import './stylesheets/MainPage.css'
import Socials from '../components/Socials'
import About from '../components/About'
import Projects from '../components/Projects'
import Navbar from '../components/navbar'

export default function MainPage() {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });
  
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
  }, [])

  return (
    <div className='main_container dp-flex'>
      <section className="left_section">
        <div className="top_side">
          <article className="presentation">
            <h1>Shinhyo Belliard</h1>
            <h4>Full-Stack developer</h4>
            <p>I</p>
          </article>
          <Navbar />
        </div>
        <Socials />
      </section>
      <section className="right_section hidden">
        <About />
        <Projects />
      </section>
    </div>
  )
}
