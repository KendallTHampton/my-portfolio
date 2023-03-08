import React, {useEffect} from "react";
import "./Resume.css";
import headshot from "../../assets/headshot.png";
import resumePDF from "../../assets/Kendall_Hampton_Resume.pdf";



const Resume = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []);

    return (
        <div className='section'>
            <section id='hero' className='section__page'>
                <img src={headshot} id='headshot' alt='' />

                <div>
                    <h1 id='name'>Kendall T. Hampton</h1>
                    <p id='bio'>
                        Currently pursuing a master's degree in Applied Information
                        Technology, with an emphasis on application development and software
                        engineering. I am dedicated to leveraging my current knowledge of IT
                        and continuously learning about this ever-changing field. I am
                        open-minded toward work opportunities.
                    </p>

                    <div className='information'>
                        <p id='email'>✋ KendallTHampton@gmail.com</p>
                        <p id='location'>📍 United States, MD</p>
                    </div>
                </div>
            </section>

            <section className='section__page'>
                <div id='socials'>
                    <a href={resumePDF} target='blank'>
                        Download PDF Version
                    </a>
                    <a
                        href='http://www.linkedin.com/in/kendall-hampton-3b6258139'
                        target='blank'>
                        LinkedIn
                    </a>
                    <a href='https://github.com/KendallTHampton' target='blank'>
                        Github
                    </a>


                </div>
            </section>

            <section className='section__page'>
                <h2 className='skills'>Skills & Qualifications</h2>
                <ul id='skills'>
                    <li id='it__skill'>
                        ✅ Knowledge of frontend/backend technology and libraries{" "}
                    </li>

                    <li id='tech__skill'>✅ Project management & self-sufficiency</li>

                    <li id='comm__skill'>✅ Effective communication </li>
                </ul>
            </section>

            <section className='section__page'>
                <h2>Programming Languages/Stack/Tech</h2>
                <div id='tech__stacks'>
                    <div className='card__stack'>
                        <span>HTML, CSS, Javascript</span>
                    </div>
                    <div className='card__stack'>
                        <span>Mongodb, Express.js, React.js, Redux, Node.js</span>
                    </div>
                    <div className='card__stack'>
                        <span>Figma, Webflow, Wordpress, Google Analytics, SEO</span>
                    </div>
                </div>
            </section>

            <section className='section__page'>
                <h2 className='work'>Work Experience</h2>

                <div className='work__card'>
                    <div className='line-break'></div>
                    <strong>
                        📚 SELF-TAUGHT WEB DEVELOPER |{" "}
                        <em className='workTitle'>Self Employed</em>
                    </strong>

                    <p className='work__date'>Self-employed | 03/2021 – Ongoing</p>

                    <ul>
                        I have developed fundamental programming knowledge through
                        discipline and a passion for application development and software
                        engineering. As I progress toward an IT-related career, I
                        continuously improve my proficiency by studying and building
                        projects. Showcasing my efforts:
                        <li className='jobDesc'>
                            Collaborated and developed an ecommerce application for a local
                            clothing brand, creating a platform for the procurement of their
                            customers and sales.
                        </li>
                        <li className='jobDesc'>
                            Designed a series of single-page applications in which demonstrate
                            my design/developer capabilities to potential clients such as an Admin Database,
                            a Pomodoro App, Ecommerce Site, and other projects which can be viewed on my github and the project's page.
                        </li>
                        <li className='jobDesc'>
                            Created a mobile responsive portfolio with access to my projects
                            and Github repositories.
                        </li>
                    </ul>
                </div>

                <div className='work__card'>
                    <div className='line-break'></div>
                    <strong>
                        👨🏽‍💻 HELP DESK/CLIENT SERVICE REP |{" "}
                        <em className='workTitle'>
                            Association of American Medical Colleges
                        </em>
                    </strong>

                    <p className='work__date'>Remote | 03/2022 – 07/2022</p>

                    <ul>
                        <li className='jobDesc'>
                            Liaised with a 20+ member team to aid, troubleshoot technical
                            issues, and diagnose errors for our end users to ensure the
                            correct usage of our services via Salesforce CRM & Salesforce’s
                            ticketing system
                        </li>
                        <li className='jobDesc'>
                            Contributed to the increase in client satisfaction ratings by 18%
                            in relation to the preceding year’s Q2 metrics through decisive
                            communication and efficient diagnosis
                        </li>
                        <li className='jobDesc'>
                            Endeavored to meet and exceeded quality assurance KPIs by
                            continuous performance evaluations; productively resolving 40+
                            calls/emails daily about use problems or service knowledge
                        </li>
                    </ul>
                </div>

                <div className='work__card'>
                    <div className='line-break'></div>
                    <strong>
                        👨🏽‍💼 FINANCIAL ANALYST |{" "}
                        <em className='workTitle'>Prince George’s Department of Housing</em>
                    </strong>

                    <p className='work__date'>Upper Marlboro, MD | 07/2021 – 12/2021</p>

                    <ul>
                        <li className='jobDesc'>
                            Performed 100+ qualitative reviews per week of tenant & landlord
                            financial data, receiving an 80% approval rate from our quality
                            assurance agents.
                        </li>
                        <li className='jobDesc'>
                            Implemented a collaborative document and client tracking system,
                            which reduced downtime by 30%, facilitating higher productivity
                            amongst team members
                        </li>
                        <li className='jobDesc'>
                            Spearheaded a project by curating task delegation amongst
                            colleagues, streamlining document processing, and increasing
                            efficiency compared to the prior methodology.
                        </li>
                    </ul>
                </div>


            </section>

            <section className='section__page'>
                <h2 className='education'>Education History</h2>

                <div className='education__card'>
                    <div className='degree'>
                        <strong>
                            👨🏽‍🎓 M.S. - APPLIED INFORMATION TECHNOLOGY |
                            <em className='school__title'> Towson University</em>
                        </strong>
                        <p>2022 - Ongoing</p>
                    </div>

                    <ul className='accomplishments'>
                        <p>Accomplishments:</p>
                        <li>
                            Specialization: Internet Application Development & Software
                            Engineering
                        </li>
                        <li> Cumulative GPA: 3.91</li>
                    </ul>
                </div>

                <div className='education__card'>
                    <div className='line-break'></div>
                    <div className='degree'>
                        <strong>
                            👨🏽‍🎓 B.S. - MARKETING |
                            <em className='school__title'> Towson University</em>
                        </strong>
                        <p>2020</p>
                    </div>
                    <ul className='accomplishments'>
                        <p>Accomplishments:</p>
                        <li>Summer Mentee Program</li>
                        <li>Member of The American Marketing Association</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Resume;
