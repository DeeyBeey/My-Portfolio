import React from "react";
import './experience.css';

const ExperienceSection = () => {

    return (
        <section id="experience">
              <h2>A Look at My Experience</h2>

            <div className="experience-item">
                <div className="role-date">
                    <h3>Teaching Assistant | DS 3000: Foundations of Data Science</h3>
                    <p>September 2024 - Present</p>
                </div>
                <h4>Northeastern University</h4>
                <ul>
                    <li>Guided students in data cleaning, analysis, and visualization using Python (Pandas, NumPy) for coursework projects.</li>
                    <li>Reviewed machine learning models, providing actionable feedback to enhance students’ problem-solving capabilities.</li>
                    <li>Supported 50+ students with precise guidance, achieving only 2 regrade requests alongside 14 TAs and a professor.</li>
                </ul>
            </div>

            <div className="experience-item">
                <div className="role-date">
                    <h3>Software Engineer Intern</h3>
                    <p>May 2022 - January 2023</p>
                </div>
                <h4>Nibodh Educare</h4>
                <ul>
                    <li>Leveraged HTML, CSS, and JavaScript (MongoDB, Express, React, Node.js) to develop a web application portal, 
                    integrating front-end and back-end components into the live code of the website, implementing OOD/OOP principles.</li>
                    <li>Enhanced system responsiveness by 30% through AWS cloud and microservices architecture, developing RESTful 
                    APIs, and implementing scalable fault-tolerant systems to ensure high availability and informed decision-making.</li>
                    <li>Championed agile methodologies and leveraged Git for version control, driving efficient collaboration, project 
                    management, and comprehensive testing with Cypress and Jest, while ensuring robust code maintenance and delivery.</li>
                    <li>Streamlined stakeholder-developer communication, ensuring seamless deployments, managing expectations, and 
                    securing positive user feedback through effective collaboration and problem-solving.</li>
                </ul>
            </div>
        </section>


    );
}

export default ExperienceSection;