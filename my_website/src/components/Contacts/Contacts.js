import './Contacts.css';
import plane from './paper-plane.png';

const Contacts = () => {
    return (
        <div className="contacts" id="contacts">
        <div className="contacts-message">
            <img src={plane} alt="Paper Plane" width="45px" />
            <h3>Want to Talk?</h3>
            <p>Feel free to send me a message.</p>
            <a href="mailto:pmapm@ua.pt" target="_blank" rel="noreferrer"><button>Email Me</button></a>
        </div>
        <div className="contacts-cv">
            <h3>Here is my CV</h3>
            <div className="cv-buttons">
                <a href="/files/Pedro_Monteiro_cv.pdf" target="_blank" download><button>Download (PT) <i class="far fa-file-pdf"></i></button></a>
                <a href="/files/Pedro_Monteiro_cv_en.pdf" target="_blank" download><button>Download (EN) <i class="far fa-file-pdf"></i></button></a>
            </div>
        </div>
    </div>
    )
}

export default Contacts;