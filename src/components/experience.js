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
                    <li>Assessed machine learning and statistical models, giving feedback to strengthen data-driven problem-solving skills. </li>
                </ul>
            </div>

            <div className="experience-item">
                <div className="role-date">
                    <h3>Data Analyst Intern</h3>
                    <p>May 2019 - June 2019</p>
                </div>
                <h4>Nibodh Educare</h4>
                <ul>
                    <li>Led comprehensive data processing, and analytical modelling, transforming raw data into structured formats using 
                    Python's NumPy library, identifying key insights and presented findings resulting in a 10% enhancement in KPIs. </li>
                    <li>Leveraged Microsoft Azure cloud services to optimize data storage and ELT data pipelines, resulting in a 30% 
                    reduction in infrastructure costs while maintaining high scalability and reliability for the data analytics platform. </li>
                    <li>Designed dynamic dashboards in Tableau, using Git for version control, to effectively communicate key trends, 
                    facilitating data-driven decision-making and driving measurable improvements in business performance. </li>
                    <li>Communicated findings and recommendations to stakeholders in a clear and concise manner, fostering understanding 
                    and enabling informed decision-making processes across departments within a collaborative Scrum team environment. </li>
                </ul>
            </div>
        </section>


    );
}

export default ExperienceSection;