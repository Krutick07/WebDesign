import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import insta from '../../assets/insta.png'
import twitter from '../../assets/twitter.png'
import facbook from '../../assets/facbook.png'
import linkdn from '../../assets/linkdn.png'
const Footer = () => {
  return (
    <div className='footer'>
        <img src={logo} alt="" />
        <div className="services">
            <span>Services</span>
            <ul>
                <li className='hover'>Animation</li>
                <li className='hover'>Design</li>
                <li className='hover'>Digital Marketing</li>
                <li className='hover'>WebApps</li>
                <li className='hover'>Workshops</li>
            </ul>
        </div>
        <div className="f-contacts">
            <span style={{fontSize: '1.5rem'}}>Contacts</span><br />
            <span>New York,USA</span><br />
            <span className='hover'>+1 800 123 456 789</span><br />
            <span className='hover'>bili@mail.com</span>
        </div>
        <div className="f-Suscribe">
            <span>Suscribe</span><br />
            <span>Get News & Updates</span>
            <span>@</span>
            <div className="gray-line"></div>
            <p>Our expertise, as well as our passion for web design, 
                sets us apart from other agencies.</p>
                <img src={insta} alt="" />
                <img src={facbook} alt="" />
                <img src={linkdn} alt="" />
                <img src={twitter} alt="" />
        </div>
        <div className="gray-line"></div>
        <div className="f-last">
            <span>Copyright © 2023 Web Design. All Rights Reserved</span>
            <span className='hover'>Terms of Use</span>
            <span className='hover'>Privacy Policy</span>
        </div>
    </div>
  )
}

export default Footer