import React, { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import './projects.css';

const projects = [
    {
        title: "TrOCR",
        description: "Extracted handwritten text from images using TrOCR, translating it into various languages with Google Drive integration for seamless file management.",
        techStack: ["Python", "CLI", "Transformers", "Google Cloud Platform"],
        githubLink: "https://github.com/DeeyBeey/TrOCR-Handwritten-Text-Translation",
    },

    {
        title: "Project Roofs",
        description: "A CLI-based system for managing shelter operations, including residents, volunteers, and donations, utilizing SQL and stored procedures for efficient data handling and visualization of key statistics.",
        techStack: ["Python", "SQL", "CLI", "Matplotlib", "Pandas"],
        githubLink: "https://github.com/DeeyBeey/Project-Roofs-Shelter-Management-System",
    },
    {
        title: "Distributed Key-Value Store",
        description: "Developed a distributed key-value store using TCP and UDP for communication, incorporating RPC (RMI) for remote interactions, and implementing 2PC and Paxos algorithms to ensure data consistency and fault tolerance.",
        techStack: ["Java", "TCP", "UDP", "RMI", "Socket Programming"],
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