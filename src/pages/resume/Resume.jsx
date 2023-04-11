import React, {useEffect} from "react";
import "./Resume.css";
import headshot from "../../assets/headshot.png";
import resumePDF from "../../assets/Kendall_Hampton_Resume.pdf";
import styles from "./Resume.module.css";


const Resume = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []);

    return (
        <div className={styles.section}>
            <section id={styles.hero} className={styles.section__page}>
                <img src={headshot} id={styles.headshot} alt='' />

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
            </section>
        </div>
    );
};

export default Resume;