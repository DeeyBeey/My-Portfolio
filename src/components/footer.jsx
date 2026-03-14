import { FaEnvelope, FaLinkedin, FaSpotify, FaSteam } from 'react-icons/fa';
import Button from "./button";
import "./footer.css";

const Footer = () => {
    return (
        <footer id="footer">
            <h2>Thank you!</h2>
            <p className="thank-you">Thank you for checking out my portfolio website! If you have any suggestions or would like to connect, feel free to reach out.</p>
            <div className="contact-buttons">
                <Button href="mailto:belai.d@northeastern.edu" variant="footer" aria-label="Email" icon={<FaEnvelope />}>
                    Email
                </Button>
                <Button href="https://www.linkedin.com/in/dhruv-belai/" variant="footer" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" icon={<FaLinkedin />}>
                    LinkedIn
                </Button>
                <Button href="https://open.spotify.com/user/31cgqcaggodnvv47brlia5avv2zm?si=33a1ce1779f2462d" variant="footer" target="_blank" rel="noopener noreferrer" aria-label="Spotify" icon={<FaSpotify />}>
                    Spotify
                </Button>
                <Button href="https://steamcommunity.com/id/deeybeey/" variant="footer" target="_blank" rel="noopener noreferrer" aria-label="Steam" icon={<FaSteam />}>
                    Steam
                </Button>
            </div>
            <p className="footer-note">This project was made with ❤️ using React</p>
        </footer>
    );
}

export default Footer;
