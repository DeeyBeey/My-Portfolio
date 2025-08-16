import React, { useEffect, useState } from "react";
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
        <div id="about" className="about-section">
            <div className="about-content">
                <div className="text">
                    <h2>Who is <span className="switching-text">{name}?</span></h2>
                    <p>I’m a recent Computer Science graduate from Northeastern University, specializing in 
                        Machine Learning and Software Development. With a passion for building innovative solutions 
                        from the ground up, I enjoy tackling complex challenges, whether it’s applying machine learning to real-world 
                        problems or engineering clean, efficient software. My approach blends perseverance, teamwork, and curiosity, 
                        and I thrive on turning ideas into practical outcomes that make life easier. Always eager to collaborate with 
                        like-minded professionals, I’m excited to connect and explore opportunities in data science, AI, and product-driven engineering.
                    </p>
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
