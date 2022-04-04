import React from "react";
import Image from "next/image";
import Link from "next/link";
import aboutStyles from "../../styles/About.module.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
    return (
        <div className={`flex ${aboutStyles.container} ${aboutStyles["" + darkMode]}`}>
            <section className={`${aboutStyles["section-1"]} flex`}>
                <article>
                    <h4>Hello, I&apos;m</h4>
                    <h1>Luv Makin</h1>
                    <h3>Creative Font-End Web Developer</h3>
                </article>
                <figure>
                    <Image src="/LuvImage.jpg" alt="Luv Makin" width="150" height="180" />
                </figure>
            </section>
            <section className={aboutStyles["section-2"]}>
                <p>
                    I&apos;m currently pursuing my B.E. (Degree) in Computer Science and Engineering from Chitkara University Punjab. Being a geek for years I&apos;ve been very interested in developments of website/webpages and Computer Programming.
                </p>
                <figure className={`${aboutStyles["social-links"]} flex`}>
                    <Link href="https://github.com/pandacover">
                        <a> <FaGithub /></a>
                    </Link>
                    <Link href="https://www.linkedin.com/in/luv-makin-19a151209/">
                        <a><FaLinkedin /></a>
                    </Link>
                    <Link href="https://pandacover.github.io/my-portfolio/static/media/Resume.b4947bed.pdf">
                        <a>Resume</a>
                    </Link>
                </figure>
            </section>
        </div>
    )
}

export default About;