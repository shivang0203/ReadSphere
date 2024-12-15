import React from 'react';
import "./About.css";
import aboutImg from "../../images/about.png";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <br />
        <br />

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About ReadSphere</h2>
            <p className='fs-17'>At ReadSphere, we believe that every book holds the power to inspire, educate, and transform. Our mission is to connect readers with stories that resonate, ideas that ignite curiosity, and knowledge that empowers. From timeless classics to modern bestsellers, ReadSphere is your gateway to a universe of literary exploration.</p>
            <p className='fs-17'>Whether you’re seeking inspiration, entertainment, or insight, we’re here to make your reading journey extraordinary. Dive in and discover the joy of reading with ReadSphere.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About