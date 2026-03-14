import './experience.css';
import { FiPaperclip } from 'react-icons/fi';

const ExperienceSection = () => {

    return (
        <section id="experience">
              <h2 className="section-title">A Look at My Experience</h2>
            
            <div className="experience-item">
                <div className="role-date">
                    <h3 className="role-title">Machine Learning / Software Engineer</h3>
                    <p className="role-period">June 2025 - Present</p>
                </div>
                <h4 className="company-name">SolBid</h4>
                <h4 className="entry-heading">Modernizing a Solar Design Platform</h4>

                <div className="entry-copy">
                    <p>My work lately has largely revolved around modernizing a legacy PHP platform into a new, modern one built with React.
                        You might wonder what exactly is this platform? Well, imagine Photoshop, but for designing solar layouts.
                    </p>

                    <p>A big part of my work has been developing JavaScript packages that power the core design tool, along with an algorithm
                        that places solar panels automatically given a rooftop and an optional set of obstacles. These packages are then consumed
                        by the modern React application. It turns out there is quite a bit of abstraction and complexity involved when you want a reusable
                        package and a web app to stay perfectly in sync, but when it all works together, it feels like a small piece of engineering art.
                    </p>

                    <p>
                        The software itself performs some surprisingly complex operations things like tree shading analysis, sophisticated undo/redo
                        state management, and handling multiple design layers while supporting different map providers. But enough about the app what
                        about the algorithm I mentioned earlier?
                    </p>
                </div>

                <h4 className="entry-heading">Automating Solar Panel Layouts</h4>

                <div className="entry-copy">
                    <p>
                        Placing solar panels is much harder than it might sound. It’s not just about filling up a rooftop with rectangles. There are 
                        safety regulations, fire access pathways, spacing constraints, and even aesthetic considerations. If you’ve ever seen a 
                        professional solar layout, you’ll notice how clean, aligned, and visually pleasing they are. Replicating that automatically 
                        required quite a bit of thought. Now, instead of manually placing panels one by one, a designer can simply draw a rooftop polygon, 
                        mark obstacles like vents or chimneys, and within a second a clean, compliant layout appears on the screen.
                    </p>
                    
                    <p>
                        Alright, enough solar talk, what about the fun LLM and RAG work?
                    </p>
                </div>

                <h4 className="entry-heading">Experimenting with AI for Internal Tools</h4>
                <div className="entry-copy">
                    <p>
                        Since we’re a small team, founder workload can get pretty high. A lot of time was being spent answering logistical questions: 
                        things like holidays, office policies, sick leave, and general employee handbook queries. That seemed like a perfect candidate 
                        for automation. I built an HRBot powered by lightweight models from the Phi family, using a custom RAG pipeline over our 
                        internal handbook so employees could simply ask questions and get answers instantly.
                    </p>
                    <p>
                        I also experimented with a similar support bot as a proof of concept for handling internal product-related questions. 
                        There’s a lot more to explore there, but that’s a story for another time.
                    </p>
                    
                </div>

            </div>

            <div className="experience-item">
                <div className="role-date">
                    <h3 className="role-title">Founder & Software Engineer</h3>
                    <p className="role-period">January 2025 - Present</p>
                </div>
                <h4 className="company-name">
                    <a
                        className="company-link"
                        href="https://app.paymate.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open PayMate"
                    >
                        <span>PayMate</span>
                        <span className="company-link-icon" aria-hidden="true">
                            <FiPaperclip />
                        </span>
                    </a>
                </h4>
                <h4 className="entry-heading">The Problem</h4>
                <div className='entry-copy'>
                    <p>
                       After moving to the US, my roommates and I started ordering groceries online almost every week. The groceries were 
                       great but splitting the receipt afterward was not. It usually meant opening Excel, typing items manually, calculating totals, 
                       and figuring out who owed what. It was one of those small but annoying tasks that nobody wanted to do. 
                    </p>
                </div>

                <h4 className="entry-heading">Building PayMate</h4>
                <div className="entry-copy">
                    <p>That frustration eventually pushed me to build PayMate. The idea was simple: scan a receipt and let the software 
                        handle the rest. PayMate extracts text from receipts using OCR, cleans up the messy output, and parses the items 
                        so they can be split between people quickly and accurately. What used to take us fifteen minutes now takes just a couple.
                    </p>
                </div>

                <h4 className="entry-heading">Shipping Something Real</h4>
                <div className="entry-copy">
                    <p>PayMate was also my first opportunity to build and ship something completely end-to-end. From designing the architecture 
                        and writing the backend to buying the domain, hosting the app, and deploying it to production, every step was part of 
                        the experience. Hitting deploy for the first time was honestly nerve-racking, but incredibly exciting.
                    </p>
                </div>

                <h4 className="entry-heading">Making It Production Ready</h4>
                <div className="entry-copy">
                    <p>Even though it started as a personal project, I wanted it to feel like a real product. The platform includes email 
                        authentication, rate limiting (since each receipt scan has a cost), validation checks, and split history so users 
                        can keep track of past expenses.
                    </p>
                    <p>
                        There’s a lot more going on under the hood, but I’ll save the deep dive for another time. If you’re curious, 
                        feel free to check the app out.
                    </p>
                </div>

            </div>

            <div className="experience-item">
                <div className="role-date">
                    <h3 className="role-title">Data Scientist Teaching Assistant</h3>
                    <p className="role-period">September 2024 - April 2025</p>
                </div>
                <h4 className="company-name">Northeastern University</h4>
                <h4 className="entry-heading">Teaching Data Science</h4>
                <div className="entry-copy">
                    <p>My first job in the US was as a Teaching Assistant for a data science course with over 300 students. I worked 
                        alongside a team of 15+ TAs and personally helped more than 100 students during office hours. I always enjoyed those 
                        conversations. Sometimes I was explaining concepts, and sometimes I was learning alongside them. It was fascinating to 
                        see how differently students approached the same data science problems.
                    </p>
                </div>

                <h4 className="entry-heading">Leading the TA Team</h4>
                <div className="entry-copy">
                    <p>By my second semester, I stepped into a leadership role and became the main point of contact between the professor and the 
                        rest of the TA team. I reviewed grading work, provided feedback to other TAs, and helped keep everything organized so that 
                        grading stayed accurate and on time.
                    </p>
                </div>

                <h4 className="entry-heading">A Simple Lesson I Shared</h4>
                <div className="entry-copy">
                    <p>While teaching topics ranging from linear regression to decision trees and random forests, I always reminded students of 
                        one thing: focus on the data first, the machine learning will follow. Poor data can easily mislead a model, but clean 
                        and well-understood data almost always leads to better results.
                    </p>

                    <p>
                        And yes, I also managed to maintain about 99% grading accuracy. I took grading seriously and always made sure students 
                        received the credit they deserved.
                    </p>
                </div>
                
            </div>
        </section>
    );
}

export default ExperienceSection;
