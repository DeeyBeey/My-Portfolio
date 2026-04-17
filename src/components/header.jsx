import { useEffect, useState, useCallback } from "react";
import './header.css';

const Header = ({ onNavigate }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        const typedTextSpan = document.getElementById('typed-text');

        const text = "Hi! I'm Dhruv Belai";

        let charIndex = 0;

        function type() {
            if (charIndex < text.length) {
                typedTextSpan.textContent += text.charAt(charIndex);
                charIndex++;
                setTimeout(type, 125);
            } else {
                typedTextSpan.classList.add('typing-complete');
            }
        }
        type();
    }, []);

    const handleSidebarNavigate = useCallback((target) => {
        setSidebarOpen(false);
        onNavigate(target);
    }, [onNavigate]);

    return (
        <>
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
                <button
                    className={`hamburger ${sidebarOpen ? 'active' : ''}`}
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    aria-label="Toggle navigation menu"
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>
            </header>

            <div className={`sidebar-overlay ${sidebarOpen ? 'visible' : ''}`} onClick={() => setSidebarOpen(false)} />
            <nav className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                <button className="sidebar-close" onClick={() => setSidebarOpen(false)} aria-label="Close navigation menu">
                    <span className="sidebar-close-line"></span>
                    <span className="sidebar-close-line"></span>
                </button>
                <a href="#about" onClick={(event) => { event.preventDefault(); handleSidebarNavigate('#about'); }}>About</a>
                <a href="#experience" onClick={(event) => { event.preventDefault(); handleSidebarNavigate('#experience'); }}>Experience</a>
                <a href="#projects" onClick={(event) => { event.preventDefault(); handleSidebarNavigate('#projects'); }}>Projects</a>
                <a href="#footer" onClick={(event) => { event.preventDefault(); handleSidebarNavigate('#footer'); }}>Contact</a>
            </nav>
        </>
    )
}

export default Header;
