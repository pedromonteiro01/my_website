import DownloadButton from '../../components/DownloadButton/DownloadButton';
import EmailButton from '../../components/EmailButton/EmailButton';
import './Contacts.css';
import plane from './paper-plane.png';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Contacts = () => {
    return (
        <div className="contacts" id="contacts">
        <div className="contacts-message">
        <AnimationOnScroll animateIn="animate__swing">
            <img src={plane} alt="Paper Plane" width="45px" />
            </AnimationOnScroll>
            <h3>Want to Talk?</h3>
            <p>Feel free to send me a message.</p>
            <EmailButton emailTo="mailto:pmapm@ua.pt" text="Email Me" />
        </div>
        <div className="contacts-cv">
            <h3>Here is my CV</h3>
            <div className="cv-buttons">
                <DownloadButton path="/files/Pedro_Monteiro_cv.pdf" desc="Download (PT) " />
                <DownloadButton path="/files/Pedro_Monteiro_cv_en.pdf" desc="Download (EN) " />
            </div>
        </div>
    </div>
    )
}

export default Contacts;