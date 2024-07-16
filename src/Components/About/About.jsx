import React from "react";
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.png'

const About = () => {
    return (
        <div className="about">
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am passionate about Data Science, Artificial Intelligence, Machine Learning, and Data Analytics.</p>
                        <p>I am excited by the technical challenge of extracting value from data and its potential to revolutionize various aspects of our lives.
                            From personalized healthcare solutions to optimizing environmental sustainability efforts, the ability to extract meaningful insights
                            from data can drive positive change across industries</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>Html & Css</p><hr style={{width: '50%'}}/></div>
                        <div className="about-skill"><p>React JS</p><hr style={{width: '70%'}}/></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{width: '60%'}}/></div>
                        <div className="about-skill"><p>Next JS</p><hr style={{width: '50%'}}/></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                   <h1>10+</h1>
                   <p>YEARS OF EXPERIENCE</p> 
                </div>
                <hr />
                <div className="about-achievement">
                   <h1>90+</h1>
                   <p>PROJECTS COMPLETED</p> 
                </div>
                <hr />
                <div className="about-achievement">
                   <h1>15+</h1>
                   <p>HAPPY CLIENTS</p> 
                </div>
            </div>
        </div>
    )
}
export default About