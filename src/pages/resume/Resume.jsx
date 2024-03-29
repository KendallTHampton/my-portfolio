import React, {useEffect} from "react";
import headshot from "../../assets/headshot.png";
import resumePDF from "../../assets/Kendall_Hampton_Resume.pdf";
import styles from "./Resume.module.css";

const Resume = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []);
    return (
        <section className={styles.section}>
            <section id={styles.hero} className={styles.section__page}>
                <img src={headshot} id={styles.headshot} alt="" />
                <div>
                    <h1 id={styles.name}>Kendall T. Hampton</h1>
                    <p id={styles.bio}>
                        Currently pursuing a master's degree in Applied Information
                        Technology, with an emphasis on application development and software
                        engineering. I am dedicated to leveraging my current knowledge of IT
                        and continuously learning about this ever-changing field. I am
                        open-minded toward work opportunities.
                    </p>
                    <div className={styles.information}>
                        <p id={styles.email}>✋ KendallTHampton@gmail.com</p>
                        <p id={styles.location}>📍 United States, MD</p>
                    </div>
                </div>
            </section>
            <section className={styles.section__page}>
                <div id={styles.socials}>
                    <a href={resumePDF} target="blank">
                        Download PDF Version
                    </a>
                    <a
                        href="http://www.linkedin.com/in/kendall-hampton123"
                        target="blank"
                    >
                        LinkedIn
                    </a>
                    <a href="https://github.com/KendallTHampton" target="blank">
                        Github
                    </a>
                </div>
            </section>
            <section className={styles.section__page}>
                <h2 className={styles.skills}>Skills & Qualifications</h2>
                <ul id={styles.skills}>
                    <li id={styles.it__skill}>
                        ✅ Knowledge of frontend/backend technology and libraries{" "}
                    </li>
                    <li id={styles.tech__skill}>✅ Project management & self-sufficiency</li>
                    <li id={styles.comm__skill}>✅ Effective communication </li>
                </ul>
            </section>
            <section className={styles.section__page}>
                <h2>Programming Languages/Stack/Tech</h2>
                <div id={styles.tech__stacks}>
                    <div className={styles.card__stack}>
                        <span>HTML, CSS, Javascript</span>
                    </div>
                    <div className={styles.card__stack}>
                        <span>Mongodb, Express.js, React.js, Redux, Node.js</span>
                    </div>
                    <div className={styles.card__stack}>
                        <span>Figma, Webflow, Wordpress, Google Analytics, SEO</span>
                    </div>
                </div>
            </section>
            <section className={styles.section__page}>
                <h2 className={styles.work}>Work Experience</h2>
                <div className={styles.work__card}>
                    <div className={styles.line_break}></div>
                    <strong>
                        📚 SELF-TAUGHT WEB DEVELOPER |{" "}
                        <em className={styles.workTitle}>Self Employed</em>
                    </strong>
                    <p className={styles.work__date}>Self-employed | 03/2021 – Ongoing</p>
                    <ul>
                        I have developed fundamental programming knowledge through
                        discipline and a passion for application development and software
                        engineering. As I progress toward an IT-related career, I continuously improve my proficiency by studying and building
                        projects.
                    </ul>
                </div>
                <div className={styles.work__card}>
                    <div className={styles.line_break}></div>
                    <strong>
                        👨🏽‍💻 HELP DESK/CLIENT SERVICE REP |{" "}
                        <em className={styles.workTitle}>
                            Association of American Medical Colleges
                        </em>
                    </strong>

                    <p className={styles.work__date}>Remote | 03/2022 – 07/2022</p>

                    <ul>
                        <li className={styles.jobDesc}>
                            Liaised with a 20+ member team to aid, troubleshoot technical
                            issues, and diagnose errors for our end users to ensure the
                            correct usage of our services via Salesforce CRM & Salesforce’s
                            ticketing system
                        </li>
                        <li className={styles.jobDesc}>
                            Contributed to the increase in client satisfaction ratings by 18%
                            in relation to the preceding year’s Q2 metrics through decisive
                            communication and efficient diagnosis
                        </li>
                        <li className={styles.jobDesc}>
                            Endeavored to meet and exceeded quality assurance KPIs by
                            continuous performance evaluations; productively resolving 40+
                            calls/emails daily about use problems or service knowledge
                        </li>
                    </ul>
                </div>

                <div className={styles.work__card}>
                    <div className={styles.line_break}></div>
                    <strong>
                        👨🏽‍💼 FINANCIAL ANALYST |{" "}
                        <em className={styles.workTitle}>Prince George’s Department of Housing</em>
                    </strong>

                    <p className={styles.work__date}>Upper Marlboro, MD | 07/2021 – 12/2021</p>

                    <ul>
                        <li className={styles.jobDesc}>
                            Performed 100+ qualitative reviews per week of tenant & landlord
                            financial data, receiving an 80% approval rate from our quality
                            assurance agents.
                        </li>
                        <li className={styles.jobDesc}>
                            Implemented a collaborative document and client tracking system,
                            which reduced downtime by 30%, facilitating higher productivity
                            amongst team members
                        </li>
                        <li className={styles.jobDesc}>
                            Spearheaded a project by curating task delegation amongst
                            colleagues, streamlining document processing, and increasing
                            efficiency compared to the prior methodology.
                        </li>
                    </ul>
                </div>
            </section>
            <section className={styles.section__page}>
                <h2 className={styles.education}>Education History</h2>

                <div className={styles.education__card}>
                    <div className={styles.degree}>
                        <strong>
                            👨🏽‍🎓 M.S. - APPLIED INFORMATION TECHNOLOGY |
                            <em className={styles.school__title}> Towson University</em>
                        </strong>
                        <p>2022 - Ongoing</p>
                    </div>

                    <ul className={styles.accomplishments}>
                        <p>Accomplishments:</p>
                        <li>
                            Specialization: Internet Application Development & Software
                            Engineering
                        </li>
                        <li> Cumulative GPA: 3.91</li>
                    </ul>
                </div>

                <div className={styles.education__card}>
                    <div className={styles.line_break}></div>
                    <div className={styles.degree}>
                        <strong>
                            👨🏽‍🎓 B.S. - MARKETING
                            |
                            <em className={styles.school__title}> Towson University</em>
                        </strong>
                        <p>2020</p>
                    </div>
                    <ul className={styles.accomplishments}>
                        <p>Accomplishments:</p>
                        <li>Summer Mentee Program</li>
                        <li>Member of The American Marketing Association</li>
                    </ul>
                </div>
            </section>
        </section>
    );
};
export default Resume;