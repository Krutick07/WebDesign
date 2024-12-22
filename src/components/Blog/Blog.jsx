import React from 'react'
import './Blog.css'
import t1 from '../../assets/t1.jpg'
import t2 from '../../assets/t2.jpg'
import t3 from '../../assets/t3.jpg'
import t4 from '../../assets/t4.jpg'
import t5 from '../../assets/t5.jpg'
const Blog = () => {
  return (
    <div className='blog'>
        <div className="b-head">
            <div className="b-left">
                <span>Meet Our Professionals</span>
                <span>Team that Build Ideas Driven by the Future</span>
            </div>
        </div>
        <div className="b-main">
            <div className="b-content">
                <img src={t1} alt="" />
                <div className="inner-content">
                    <span className="name">James Taylor</span><br />
                    <span className="role">Founder</span>
                </div>
            </div>
            <div className="b-content">
                <img src={t2} alt="" />
                <div className="inner-content">
                    <span className="name">Esabella</span><br />
                    <span className="role">Chief Technical Officer</span>
                </div>
            </div>
            <div className="b-content">
                <img src={t3} alt="" />
                <div className="inner-content">
                    <span className="name">Alexender</span><br />
                    <span className="role">Creative Director</span>
                </div>
            </div>
            <div className="b-content">
                <img src={t4} alt="" />
                <div className="inner-content">
                    <span className="name">Amelia</span><br />
                    <span className="role">Creative Director</span>
                </div>
            </div>
            <div className="b-content">
                <img src={t5} alt="" />
                <div className="inner-content">
                    <span className="name">Nathaniel</span><br />
                    <span className="role">Developer</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog