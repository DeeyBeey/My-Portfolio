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
                    <li>Guided students in data cleaning, analysis, and visualization using Python (Pandas, NumPy) for coursework projects. </li>
                    <li>Introduced data preprocessing, feature engineering, and model evaluation best practices to improve project outcomes. </li>
                    <li>Assessed machine learning and statistical models, giving feedback to strengthen data-driven problem-solving skills. </li>
                </ul>
            </div>

            <div className="experience-item">
                <div className="role-date">
                    <h3>Software Engineer Intern</h3>
                    <p>May 2019 - June 2019</p>
                </div>
                <h4>Nibodh Educare</h4>
                <ul>
                    <li>Leveraged HTML, CSS, and JavaScript (MongoDB, Express, React, Node.js) to develop a web application portal, 
                    integrating front-end and back-end components into the live code of the website, implementing OOD/OOP principles. </li>
                    <li>Implemented AWS cloud and microservices architecture to optimize data retrieval speeds and develop REST APIs, 
                    resulting in a 30% increase in system responsiveness, enhancing data analytics for informed decision-making. </li>
                    <li>Championed agile development methodologies and employed Git for version control, ensuring efficient collaboration 
                    and project management, including testing using Cypress and Jest, alongside code maintenance. </li>
                    <li>Facilitated open communication between stakeholders and the development team, ensuring smooth deployment while 
                    managing expectations and garnering positive user feedback through collaborative problem-solving.</li>
                </ul>
            </div>
        </section>


    );
}

export default ExperienceSection;