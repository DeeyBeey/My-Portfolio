import React from "react";
import './experience.css';

const ExperienceSection = () => {

    return (
        <section id="experience">
              <h2>A Look at My Experience</h2>
            
            <div className="experience-item">
                <div className="role-date">
                    <h3>Machine Learning / Software Engineer</h3>
                    <p>June 2025 - Present</p>
                </div>
                <h4>SolBid</h4>
                <ul>
                    <li>Productionized HRBot and SupportBot using GenAI (Phi-1.5, Phi-3 mini) with a custom RAG pipeline and quantization 
                    for efficiency; integrated with Slack to automate HR query resolution, reducing founder involvement and ambiguity.</li>
                    <li>Automated solar panel placement using Shapely, image processing, and a rule-based algorithm, eliminating manual 
                    effort and layout time from over 90 seconds to less than 5 seconds while ensuring safety, compliance, and visual appeal.</li>
                </ul>
            </div>

            <div className="experience-item">
                <div className="role-date">
                    <h3>Founder & Software Engineer</h3>
                    <p>January 2025 - Present</p>
                </div>
                <h4>PayMate</h4>
                <ul>
                    <li>Architected a full-stack MERN web application to streamline receipt-based bill splitting, slashing manual effort from 
                    roughly 15 minutes to under 3 by integrating Tesseract OCR, Regex parsing, and OpenAI API–powered text refinement.</li>
                    <li>Designed a responsive, user-first interface with MongoDB-backed split history, input validation, downloadable PDF 
                    summaries, and modular components to ensure clarity, accuracy, and long-term maintainability.</li>
                </ul>
            </div>

            <div className="experience-item">
                <div className="role-date">
                    <h3>Data Scientist Teaching Assistant</h3>
                    <p>September 2024 - April 2025</p>
                </div>
                <h4>Northeastern University</h4>
                <ul>
                    <li>Guided 100+ students in data analysis, hypothesis testing, correlation analysis, predictive modeling, and statistical 
                    significance assessment using Python (Pandas, NumPy) for real-world datasets.</li>
                    <li>Provided constructive feedback on 15 assignments and 6 practicums for a class of 300+ students, emphasizing data 
                    wrangling, feature engineering, model evaluation (accuracy, precision, recall), and data visualization techniques.</li>
                    <li>Led a team of 15 TAs, collaborating on grading and maintaining 99% grading accuracy, while assisting students during 
                    10+ weekly office hours by explaining complex ML concepts (Random Forest, KNN, Logistic Regression). </li>
                </ul>
            </div>

            <div className="experience-item">
                <div className="role-date">
                    <h3>Software Engineer Intern</h3>
                    <p>May 2022 - January 2023</p>
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