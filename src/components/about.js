import React, {useEffect, useState} from "react";
import './about.css';

const AboutSection = () => {
    const [name, setName] = useState('Dhruv');

    useEffect(() => {
        const interval = setInterval(() => {
            setName(prevName => prevName === 'Dhruv' ? 'DeeyBeey' : 'Dhruv');
        }, 3000)

        return () => clearInterval(interval);
    }, []);
    return (
        <div id="about-me" className="about-section">
            <div className="about-content">
                <div className="text">
                    <h2>Who is <span className="switching-text">{name}?</span></h2>
                    <p>Originating from the vibrant city of Mumbai, I am currently pursuing 
                        my Master's in Computer Science at Northeastern University in Boston. 
                        With a deep passion for Data Science and Software Development, I thrive 
                        on the excitement of building innovative solutions from the ground up. 
                        I embrace challenges head-on and am driven by a relentless pursuit of 
                        excellence. A steadfast believer in perseverance and teamwork, 
                        I am always eager to collaborate and connect with like-minded individuals. 
                        Let's connect and create something extraordinary together!</p>

                    <a href="/data/Dhruv_Belai_Resume.pdf" className="resume-button" target="_blank" rel="noopener noreferrer">View My Resume</a>
                    <p className="witty-line">I'm somewhat of a tailor myself, so feel free to ask for a custom-fitted resume!</p>
                </div>
                <div className="image">
                    <img src="/data/my_picture.jpg" alt="Dhruv Belai" />
                </div>
            </div>
        </div>
    );
};


export default AboutSection;
