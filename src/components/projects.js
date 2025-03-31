import React, { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import './projects.css';

const projects = [
    {
        title: "PayMate",
        description: "Automated bill splitting with the help of Tesseract OCR and OpenAI LLM API. Leveraging the MERN Stack for an intuitive interface and saving time by eliminating the need of creating Excel sheets manually.",
        techStack: ["MERN Stack", "JavaScript", "OpenAI API", "Tesseract-OCR"],
        githubLink: "https://github.com/DeeyBeey",
    },

    {
        title: "NBA Game Outcome Prediction Using Neural Networks",
        description: "Designed a PyTorch-based model to predict NBA outcomes with 65% accuracy, utilizing Recurrent and Fully Connected Networks, processing 25 years of data with SQL, and optimizing performance through hyperparameter tuning and cross-validation.",
        techStack: ["Python", "PyTorch", "SQL", "Scikit-learn", "Matplotlib"],
        githubLink: "https://github.com/DeeyBeey",
    },

    {
        title: "Distributed Key-Value Store",
        description: "Developed a distributed key-value store using TCP and UDP for communication, incorporating RPC (RMI) for remote interactions, and implementing 2PC and Paxos algorithms to ensure data consistency and fault tolerance.",
        techStack: ["Java", "TCP", "UDP", "RMI", "Socket Programming"],
        githubLink: "https://github.com/DeeyBeey",
    },

    {
        title: "Project Roofs",
        description: "A CLI-based system for managing shelter operations, including residents, volunteers, and donations, utilizing SQL and stored procedures for efficient data handling and visualization of key statistics.",
        techStack: ["Python", "SQL", "CLI", "Matplotlib", "Pandas"],
        githubLink: "https://github.com/DeeyBeey/Project-Roofs-Shelter-Management-System",
    },

    {
        title: "TrOCR",
        description: "Extracted handwritten text from images using TrOCR, translating it into various languages with Google Drive integration for seamless file management.",
        techStack: ["Python", "CLI", "Transformers", "Google Cloud Platform"],
        githubLink: "https://github.com/DeeyBeey/TrOCR-Handwritten-Text-Translation",
    },

    {
        title: "CryptoCast",
        description: "Forecasted Cryptocurrency prices with the help of TensorFlow, creating LSTM Time-Series model with Yahoo Finance API. Equppied with a simple interface using PyQt",
        techStack: ["Python", "TensorFlow", "PyQt"],
        githubLink: "https://github.com/DeeyBeey", 
    }


]

const ProjectSection = () => {

    useEffect(() => {
        const handleScroll = () => {
            const projectSection = document.getElementById('projects');
            const cards = document.querySelectorAll('.project-card');
            const triggerBottom = window.innerHeight / 5 * 4;

            if (projectSection.getBoundingClientRect().top < triggerBottom) {
                cards.forEach(card => card.classList.add('show'));
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="projects">
            <h2>Projects in Action</h2>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <p><strong>Tech Stack:</strong> {project.techStack.join(', ')}</p>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <FaGithub />
                            <span>GitHub</span>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ProjectSection;