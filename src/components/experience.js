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
                    <li>Reduced rooftop solar panel design time by 98% (5 min → few seconds) with an algorithm that automatically places 
                    panels based on adjustable safety and aesthetic rules, replacing the need for manual layout. </li>
                    <li>Cut HR response time and reduced founder workload by automating query handling through GenAI-powered HR 
                    Bot and Support Bot, using a custom RAG pipeline (Phi-1.5, Phi-3 Mini) integrated with Slack. </li>
                    <li>Drove core frontend migration from PHP to React by designing reusable components and improved architecture 
                    for greater scalability and maintainability, while collaborating across teams to ensure a smooth transition. </li>
                </ul>
            </div>

            <div className="experience-item">
                <div className="role-date">
                    <h3>Founder & Software Engineer</h3>
                    <p>January 2025 - Present</p>
                </div>
                <h4>PayMate</h4>
                <ul>
                    <li>Lowered manual bill-splitting time by 80% (15min → 3min) by building a full-stack MERN web app that scans 
                    grocery receipts with Tesseract OCR, refines messy text using the OpenAI API, and parses items with RegEx. </li>
                    <li>Designed a simple, zero-learning-curve interface with split history, validation checks, and downloadable summaries, 
                    incorporating real user feedback to boost accuracy and ease of use. </li>
                </ul>
            </div>

            <div className="experience-item">
                <div className="role-date">
                    <h3>Data Scientist Teaching Assistant</h3>
                    <p>September 2024 - April 2025</p>
                </div>
                <h4>Northeastern University</h4>
                <ul>
                    <li>Boosted student performance in a 300+ student course by mentoring 100+ students, giving tailored feedback that 
                    improved grades; built weekly resource guides with examples and documentation to support all skill levels. </li>
                    <li>Led and onboarded a 15-person TA team across two terms, maintaining 99% grading accuracy and ensuring on-time 
                    grading; resolved TA issues without professor involvement, saving significant faculty time. </li>
                </ul>
            </div>

            <div className="experience-item">
                <div className="role-date">
                    <h3>Software Engineer Intern</h3>
                    <p>May 2022 - January 2023</p>
                </div>
                <h4>Nibodh Educare</h4>
                <ul>
                    <li>Built a full-stack education portal using the MongoDB, Express, React and Node (MERN) stack with scalable REST 
                    APIs and reusable components, reducing code redundancy and enabling feature iterations. </li>
                    <li>Enhanced system responsiveness by 20% through optimized microservices and caching on AWS for reliability. </li>
                    <li>Strengthened QA reliability by building robust testing and data validation pipelines with Cypress and Jest, cutting 
                    release bugs by ~30% and reducing manual checks.  </li>
                    <li>Bridged educators and developers, translating teacher feedback into product specs that led to a user-friendly grade 
                    tracking module praised during pilot rollout. </li>
                </ul>
            </div>
        </section>
    );
}

export default ExperienceSection;