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
            <p>I'm Shinhyo, a full-stack developer with experience in React and Ruby on Rails. I'm proficient in both front-end and back-end web development, and I'm always looking for new ways to improve the user experience. I have experience collaborating with other developers remotely on projects. I'm able to communicate effectively and work efficiently in a team environment, even when we're not in the same room. I'm also able to learn new technologies quickly and adapt to new situations. I'm passionate about web development, and I'm confident that I can make a significant contribution to your team.</p>
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
