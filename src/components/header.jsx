import { useEffect } from "react";
import './header.css';

const Header = ({ onNavigate }) => {

    useEffect(() => {
        const typedTextSpan = document.getElementById('typed-text');

        const text = "Hi! I'm Dhruv Belai";

        let charIndex = 0;

        function type() {
            if (charIndex < text.length) {
                typedTextSpan.textContent += text.charAt(charIndex);
                charIndex++;
                setTimeout(type, 125);
            }
        }
        type();
    }, []);


    return (
        <header className="header">
            <div className="my-name">
                <span id="typed-text"></span>
            </div>
            <div className="navigation-links">
                <div className="navigation-link"><a href="#about" onClick={(event) => { event.preventDefault(); onNavigate('#about'); }}>About</a></div>
                <div className="navigation-link"><a href="#experience" onClick={(event) => { event.preventDefault(); onNavigate('#experience'); }}>Experience</a></div>
                <div className="navigation-link"><a href="#projects" onClick={(event) => { event.preventDefault(); onNavigate('#projects'); }}>Projects</a></div>
                <div className="navigation-link"><a href="#footer" onClick={(event) => { event.preventDefault(); onNavigate('#footer'); }}>Contact</a></div>
            </div>
        </header>
    )
}

export default Header;
