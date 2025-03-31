import React from "react";
import './experience.css';

const ExperienceSection = () => {

    return (
        <section id="experience">
              <h2>A Look at My Experience</h2>

            <div className="experience-item">
                <div className="role-date">
                    <h3>Lead Teaching Assistant | DS 3000: Foundations of Data Science</h3>
                    <p>September 2024 - April 2025</p>
                </div>
                <h4>Northeastern University</h4>
                <ul>
                    <li>Provided constructive feedback while grading 15 assignments and 6 practicums for a class of 300+ students.</li>
                    <li>Guided 100+ students in hypothesis testing, correlations, predictive modeling, and assessing statistical significance.</li>
                    <li>Led a team of 15 TAs and assisted students for 10+ hours weekly in office hours, maintaining 99% grading accuracy.</li>
                </ul>
            </div>

            <div className="experience-item">
                <div className="role-date">
                    <h3>Data Scientist</h3>
                    <p>July 2022 - August 2023</p>
                </div>
                <h4>Nibodh Educare</h4>
                <ul>
                    <li>Preprocessed and wrangled student engagement and performance data using PySpark to identify dropout risks, driving 
                    a 10% improvement in student retention – a key KPI – through targeted resource allocation and interventions.</li>
                    <li>Developed K-Means clustering for student segmentation and Random Forest models for dropout prediction using 
                    SageMaker, leading migration to AWS, which cut infrastructure costs by 30% and improved scalability.</li>
                    <li>Built Tableau dashboards to visualize key trends, driving data-backed decisions on student retention strategies.</li>
                    <li>Delivered insights to stakeholders, enhancing cross-functional collaboration and data-driven decision-making.</li>
                </ul>
            </div>

            <div className="experience-item">
                <div className="role-date">
                    <h3>Software Engineer Intern</h3>
                    <p>January 2022 - June 2022</p>
                </div>
                <h4>Nibodh Educare</h4>
                <ul>
                    <li>Built a full-stack web portal using HTML, CSS, JavaScript, and the MERN stack, integrating front-end and back-end 
                    with object-oriented principles and reusable components – reducing redundant code and saving development effort.</li>
                    <li>Boosted system responsiveness by 20% via AWS, microservices, and scalable RESTful APIs, ensuring high availability.</li>
                    <li>Drove agile development, using Git for version control and automating testing with Cypress and Jest. </li>
                    <li>Liaised between educators and developers, turning teacher feedback into product specs that led to a user-friendly grade 
                    tracking module and strong pilot feedback.</li>
                </ul>
            </div>
        </section>


    );
}

export default ExperienceSection;