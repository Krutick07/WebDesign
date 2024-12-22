import React from 'react'
import './Projects.css'
import p1 from '../../assets/p1.jpg'
import p2 from '../../assets/p2.jpg'
import p3 from '../../assets/p3.jpg'
import p4 from '../../assets/p4.jpg'

const Projects = () => {
  return (
    <div className='prjects' id='Projects'>
        <div className="p-head">
            <div className="p-left">
                <span>Our Latest Projects</span>
                <span>We Work to Craft Solid Products <br/> And Services that</span>
            </div>
            <div className="p-right">
                  <span>View All Cases</span>
            </div>
        </div>
        <div className="p-main">
            <div className="p-content">
                <span className='subtitle text-stroke1'>01/</span>
                <div className="inner-title">
                    <span className='category'>DESIGN | Motion</span>
                    <div className="title">Creative Content</div>
                </div>
                <div className="image1">
                    <img src={p1} alt="" />
                </div>
            </div>
            <div className="p-content">
                <span className='subtitle text-stroke1'>02/</span>
                <div className="inner-title">
                    <span className='category'>Animation | INFOGRAPHIC</span>
                    <div className="title">Visual Effects</div>
                </div>
                <div className="image1">
                    <img src={p2} alt="" />
                </div>
            </div>
            <div className="p-content">
                <span className='subtitle text-stroke1'>03/</span>
                <div className="inner-title">
                    <span className='category'>DEVELOPMENT | DESIGN</span>
                    <div className="title">WebApp Development</div>
                </div>
                <div className="image1">
                    <img src={p3} alt="" />
                </div>
            </div>
            <div className="p-content">
                <span className='subtitle text-stroke1'>04/</span>
                <div className="inner-title">
                    <span className='category'>SOFTWARE | CLOUD SERVICE</span>
                    <div className="title">Applications</div>
                </div>
                <div className="image1">
                    <img src={p4} alt="" />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Projects