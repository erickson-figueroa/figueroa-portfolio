import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'

const Hero = () => {
    return (
        <div className='hero'>
            <img src={profile_img} alt="" />
            <h1><span>I'm Erickson Figueroa</span>, a data scientist based in Canada.</h1>
            <p>I am passionate about Data Science, Artificial Intelligence, and Machine Learning.</p>
            <div className="hero-action">
                <div className="hero-connect">Connect with me</div>
                <div className="hero-resume">My resume</div>
            </div>
        </div>
    )
}
export default Hero