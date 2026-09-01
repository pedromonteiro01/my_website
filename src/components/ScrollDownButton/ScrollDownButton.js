import './ScrollDownButton.css';

const ScrollDownButton = () => {
    return (
        <section id="section05" className="scroll-down">
            <a href="#about" className="scroll-down-link" aria-label="Scroll down to About section">
                <span className="scroll-down-label">Scroll Down</span>
                <span className="scroll-down-mouse">
                    <span className="scroll-down-dot"></span>
                </span>
            </a>
        </section>
    )
}

export default ScrollDownButton;
