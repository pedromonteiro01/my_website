import './Education.css';

const Education = () => {
    return (
        <div className="education-section">
                    <div className='education-section-header'>
                    <img src="img/graduation-cap.png" alt="" />
                    <p className="main-p">Education</p>
                    </div>
                    <ul>
                    <li>
                            <div className="li-content">
                            <img src="img/aveiro.png" alt="" />
                            <p>
                                Software Engineering MSc Degree
                                <br></br>
                                <span>Sep 2022 - Present</span>
                            </p>
                            </div>
                        </li>
                        <li>
                            <div className="li-content">
                            <img src="img/aveiro.png" alt="" />
                            <p>
                                Software Engineering BSc Degree
                                <br></br>
                                <span>Sep 2019 - Jul 2022</span>
                            </p>
                            </div>
                        </li>
                        <li>
                            <div className="li-content">
                            <img src="img/aese.jpg" alt="" />
                            <p>
                                Scientific High School Degree
                                <br></br>
                                <span>Sep 2016 - Jul 2019</span>
                            </p>
                            </div>
                        </li>
                    </ul>
                </div>
    )
}

export default Education;