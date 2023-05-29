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
    <main>
        <section class="presentation">
          <section class="content">
            <h1>I’m Shinhyo<br/> Glad to see you!</h1>
            <p>
                Full-stack Developer specializing in React and Ruby on Rails. With expertise in both front-end and back-end web development, I strive to enhance user experiences through innovative solutions. My track record includes successful collaboration with remote development teams, demonstrating effective communication and seamless workflow integration. Adaptability is one of my strengths, I can swiftly grasp new technologies and adapt to dynamic environments. My unwavering passion for web development fuels my drive to make substantial contributions to your team. Together, we can achieve remarkable results.
            </p>
            <h3 class="social">LET’S CONNECT</h3>
            <ul class="socialIcon">
                <li><a href="#"><img class="icon" src="src\assets\Vector.svg" alt="Tweeter icon" /></a></li>
                <li><a href="#"><img class="icon" src="src\assets\Linkedin icon.svg" alt="Linkedin icon" /></a></li>
                <li><a href="#"><img class="icon" src="src\assets\Vector m.svg" alt="Mail icon" /></a></li>
                <li><a href="#"><img class="icon" src="src\assets\github icon.svg" alt="Github icon" /></a></li>
                <li><a href="#"><img class="icon" src="src\assets\peace icon.svg" alt="Peace icon" /></a></li>
            </ul>
          </section>
        </section>
        <section id="work">
          <Projects />
          <Projects />
          <Projects />
          <Projects />
        </section>
        <section class="content" id="about">
          <h2 class="Title">About<br/>Myself</h2>
          <p>
              Hello I’m a software developer! I can help
              you build a product , feature or website
              Look through some of my work and experience!
              If you like what you see and have a project you
              need coded, don’t hesitate to contact me.
          </p>
          <h3>LET’S CONNECT</h3>
          <ul class="socialIcon">
                <li><a href="#"><img class="icon" src="src\assets\Vector.svg" alt="Tweeter icon" /></a></li>
                <li><a href="#"><img class="icon" src="src\assets\Linkedin icon.svg" alt="Linkedin icon" /></a></li>
                <li><a href="#"><img class="icon" src="src\assets\Vector m.svg" alt="Mail icon" /></a></li>
                <li><a href="#"><img class="icon" src="src\assets\github icon.svg" alt="Github icon" /></a></li>
                <li><a href="#"><img class="icon" src="src\assets\peace icon.svg" alt="Peace icon" /></a></li>
            </ul>
          <button class="button">Get my resume</button>
      </section>
      <section id="My_expertise">Expertise</section>
      <section class="contact" id="contactForm">
        <h2 class="Title">Contact me</h2>
        <p>If you have an application you are interested in
            developing, a feature that you need built or a project that needs coding.
            I’d love to help with it
        </p>
        <form action="https://formspree.io/f/mgeqpzab" method="POST" id="contact-me-form">
          <input class="single-line-input" type="text" name="name" placeholder="Enter your name" maxlength="30" required />
          <input class="single-line-input" type="email" id="email" name="email" placeholder="Enter you email" required />
          <small class="error"></small>
          <textarea class="comment" placeholder="Write your message here" required name="message"></textarea>
          <button class="button" type="submit">Get In Touch</button>
        </form>
      </section>
    </main>
  )
}