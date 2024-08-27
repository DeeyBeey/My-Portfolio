import React from "react";
import './experience.css';

const ExperienceSection = () => {

    return (
        <section id="experience">

            <div className="experience-item">
                <h2>A Look at My Experience</h2>
                <div className="role-date">
                    <h3>Software Engineer Intern</h3>
                    <p>May 2019 - June 2019</p>
                </div>
                <h4>Nibodh Educare</h4>
                <ul>
                    <li>Created user-friendly interfaces using HTML, CSS, React, and NodeJS for a student-parent
                        web portal. Connecting the front-end and back-end into the live code of the website, ensuring
                        smooth functionality.</li>
                    <li>Optimized data pipelines and SQL queries, improving data retrieval speed by 40% and
                        boosting system responsiveness, enhancing data analytics efficiency and designed dashboards
                        on Tableau to support informed decision-making.</li>
                    <li>Led agile development and CI/CD pipelines, using Git for version control, and automating
                        the software deployment process to improve collaboration and project management.</li>
                    <li>Managed communication between stakeholders and the development team to ensure smooth deployment
                        and gather positive user feedback.</li>
                </ul>
            </div>

            <div className="experience-item">
                <div className="role-date">
                    <h3>Python Instructor (Volunteer)</h3>
                    <p>May 2021 - August 2021</p>
                </div>
                <h4>AEIT Computer Institute</h4>
                <ul>
                    <li>Taught Python programming basics, including OOP and OOD, to a class of 10 undergraduate students.</li>
                    <li>Developed and provided instructional materials and resources to enhance student learning and engagement.</li>
                    <li>Graded student homework and served as a mentor, providing guidance and support to enhance their learning experience.</li>
                </ul>
            </div>
        </section>


    );
}

export default ExperienceSection;