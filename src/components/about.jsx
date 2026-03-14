import React, { useEffect, useState } from "react";
import Button from "./button";
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

                    <p>I’m a builder who enjoys turning complex problems into practical systems. My work sits at the intersection of 
                    machine learning, data, and software engineering, where thoughtful design and experimentation can transform messy 
                    real-world challenges into reliable solutions.
                    </p>

                    <p>
                    I’m particularly interested in building tools that make difficult tasks easier, whether that’s automating workflows, 
                    extracting insights from data, or creating software that simplifies how people interact with complex systems.
                    </p>

                    <p>Curiosity, persistence, and a bias toward execution guide how I approach problems. I enjoy the process of exploring ideas, 
                    testing them in the real world, and iterating until something genuinely useful emerges.
                    </p>
                    
                    <Button href="/data/Dhruv_Belai_Resume.pdf" className="resume-button" target="_blank" rel="noopener noreferrer">
                        View My Resume
                    </Button>
                </div>
                <div className="image">
                    <img src="/data/my_picture.jpg" alt="Dhruv Belai" />
                </div>
            </div>
        </div>
    );
};


export default AboutSection;
