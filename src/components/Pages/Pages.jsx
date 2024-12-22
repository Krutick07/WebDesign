import React from 'react'
import './Pages.css'
import mobile from '../../assets/mobilesolutions.png'
import web from '../../assets/websolution.png'
import custom from '../../assets/customsolution.png'

const Pages = () => {
  return (
    <div className='pages' id='Pages'>
        <div className="p-text">
            <div className="left">
                <p> What we offer</p>
                <p>Unlock Rvenue Growth <br />
                    For Your Business
                </p>
            </div>
            <span>View all services</span>
        </div>
        <div className="p-img">
            <div className="image">
                <span>Mobile Solution</span>
                <img src={mobile} alt="" />
            </div>
            <div className="image">
                <span>Web Solution</span>
                <img src={web} alt="" />
            </div>
            <div className="image">
                <span>Custom Solution</span>
                <img src={custom} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Pages