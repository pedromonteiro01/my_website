import React, { useState } from 'react';
import DownloadButton from '../../components/DownloadButton/DownloadButton';
import InputField from '../../components/InputField/InputField';
import OutlineButton from '../../components/OutlineButton/OutlineButton';
import TextAreaField from '../../components/TextAreaField/TextAreaField';
import './Contacts.css';
import plane from './paper-plane.png';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contacts = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        website: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Function to validate required fields
    const validateForm = () => {
        const { name, email, message } = formData;
        if (!name || !email || !message) {
            toast.error('Please fill in all required fields.');
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        fetch(process.env.REACT_APP_FORMSPREE_ID, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => {
            if (response.ok) {
                // Show success toast
                toast.success('Message successfully sent!');

                // Clear the form fields
                setFormData({
                    name: '',
                    company: '',
                    email: '',
                    website: '',
                    message: ''
                });

            } else {
                // Show error toast
                toast.error('Failed to send message. Please try again.');
            }
        })
        .catch(error => toast.error('There was an error sending the message. Please try again.'));
    };

    return (
        <div className="contacts" id="contacts">
            <div className="contacts-cv">
                <h3>Here is my CV</h3>
                <div className="cv-buttons">
                    <DownloadButton path="/files/Pedro_Monteiro_cv.pdf" desc="Download (PT) " />
                    <DownloadButton path="/files/Pedro_Monteiro_en_cv.pdf" desc="Download (EN) " />
                </div>
            </div>
            <div className="contacts-message">
                <AnimationOnScroll animateIn="animate__swing">
                    <img src={plane} alt="Paper Plane" width="45px" />
                </AnimationOnScroll>
                <h3>Want to Talk?</h3>
                <p>Feel free to send me a message.</p>
                <div className='contact-form-wrapper'>
                    <form className='contact-form' onSubmit={handleSubmit}>
                        <div className='form-item-wrapper'>
                            <InputField
                                label="Name"
                                required
                                name="name"
                                onChange={handleChange}
                                value={formData.name}
                            />
                            <InputField
                                label="Company Name"
                                name="company"
                                onChange={handleChange}
                                value={formData.company}
                            />
                        </div>
                        <div className='form-item-wrapper'>
                            <InputField
                                label="Email Address"
                                required
                                name="email"
                                onChange={handleChange}
                                value={formData.email}
                            />
                            <InputField
                                label="Website"
                                name="website"
                                onChange={handleChange}
                                value={formData.website}
                            />
                        </div>
                        <TextAreaField
                            label="Message"
                            name="message"
                            required
                            onChange={handleChange}
                            value={formData.message}
                        />
                        <div className='submit-button'>
                            <OutlineButton type="submit">
                                Submit
                            </OutlineButton>
                        </div>
                    </form>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
}

export default Contacts;
