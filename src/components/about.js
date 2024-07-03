import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const AboutSection = () => {
    const { ref, inView } = useInView({
        threshold: 0.5, // Trigger when 50% of the section is visible
    });

    useEffect(() => {
        if (inView) {
            // Apply animation or trigger function when section is in view
            console.log("About section is visible!");
        }
    }, [inView]);

    return (
        <div id="about-me" ref={ref} className="about-section">
            <div className="about-content">
                <div className="text">
                    <h2>Who Am I?</h2>
                    <p>Hailing from Mumbai and now pursuing my Master's in Computer Science at Northeastern 
                        University, Boston, it has been quite a journey. I have been around tech since childhood,
                        my father introduced me to gaming on consoles, and they always fascinated me, I was always
                        immersed in that experience. Gaming is what ignited my passion for tech and problem solving,
                        after building my PC. I wanted to dive deeper into the realms of Computer Science.</p>
                </div>
                <div className="image">
                    <img src="your_image_url.jpg" alt="Your Name" />
                </div>
            </div>
        </div>
    );
};


export default AboutSection;
