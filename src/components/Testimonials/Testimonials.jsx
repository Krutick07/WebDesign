import React, { useState } from 'react';
import './Testimonials.css';
import testimonialsImg from '../../assets/Testimonials.png';
import leftarrow from '../../assets/leftarrow.png';
import rightarrow from '../../assets/rightarrow.png';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sophia M.',
      role: 'Marketing Manager',
      text: 'Absolutely thrilled with the website design! It’s modern, user-friendly, and exactly what we envisioned. The team was professional, responsive, and brought our ideas to life. Highly recommend for anyone looking for top-tier web design.',
    },
    {
      name: 'James T.',
      role: 'Small Business Owner',
      text: 'Working with this team was an absolute pleasure. They delivered a sleek, mobile-friendly site that has already increased our traffic. Their attention to detail and ability to meet deadlines is commendable.',
    },
    {
      name: 'Ella R.',
      role: 'Entrepreneur',
      text: 'I was blown away by the creativity and professionalism. They didn’t just build a website; they created an online experience that truly represents our brand. The support post-launch has been amazing too!',
    },
    {
      name: 'Olivia C.',
      role: 'E-commerce Store Owner',
      text: 'A fantastic experience from start to finish! The team’s innovative approach and expert recommendations transformed our outdated site into a stunning, high-performing platform. The results speak for themselves!',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const { name, role, text } = testimonials[currentIndex];

  return (
    <div className="Testimonials">
      <div className="t-head">
        <div className="t-content">
          <span className="text-stroke1">10</span>
          <span>Years Of <br />Experience</span>
        </div>
        <div className="t-content">
          <span className="text-stroke1">18</span>
          <span>Skilled <br /> Professionals</span>
        </div>
        <div className="t-content">
          <span className="text-stroke1">32</span>
          <span>Visited <br /> Conferences</span>
        </div>
        <div className="t-content">
          <span className="text-stroke1">1K</span>
          <span>Projects <br /> Worldwide</span>
        </div>
      </div>
      <div className="t-main">
        <div className="t-left">
          <img src={testimonialsImg} alt={name} />
          <div className="t-content">
            <span className="t-name">{name} <br /> </span>
            <span className="t-role" style={{color: 'var(--orange)'}}>{role}</span>
          </div>
        </div>
        <div className="t-right">
          <p>{text}</p>
          <div className="arrow">
            <img src={leftarrow} alt="Previous" onClick={handlePrevious} />
            <img src={rightarrow} alt="Next" onClick={handleNext} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
