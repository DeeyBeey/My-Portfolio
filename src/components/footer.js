import React from "react";
import { FaEnvelope, FaLinkedin, FaSpotify, FaSteam } from 'react-icons/fa';
import "./footer.css"; // Ensure this CSS file has styles for your footer

const Footer = () => {
    return (
        <footer id="footer">
            <h2>Thank you!</h2>
            <p>Thank you for checking out my portfolio website! If you have any suggestions or would like to connect, feel free to reach out.</p>
            <div className="contact-buttons">
                <a href="mailto:belai.d@northeastern.edu" className="contact-button" aria-label="Email">
                    <FaEnvelope /> Email
                </a>
                <a href="https://www.linkedin.com/in/dhruv-belai/" target="_blank" rel="noopener noreferrer" className="contact-button" aria-label="LinkedIn">
                    <FaLinkedin /> LinkedIn
                </a>
                <a href="https://open.spotify.com/user/31cgqcaggodnvv47brlia5avv2zm?si=33a1ce1779f2462d" target="_blank" rel="noopener noreferrer" className="contact-button" aria-label="Spotify">
                    <FaSpotify /> Spotify
                </a>
                <a href="https://steamcommunity.com/id/deeybeey/" target="_blank" rel="noopener noreferrer" className="contact-button" aria-label="Steam">
                    <FaSteam /> Steam
                </a>
            </div>
        </footer>
    );
}

export default Footer;
