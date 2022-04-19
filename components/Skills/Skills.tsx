import React from 'react'
import skillStyle from '../../styles/Skills.module.scss'

const SkillItem = [
    { title: 'Web Developer', description: 'Have learned and worked with front-end frameworks and libraries like ReactJs, NextJs, Tailwindcss, Chakra-ui, Bootstrap, etc. I also have a grip in back-end frameworks and libraries like ExpressJs, NodeJs and databases like MongoDB.' },
    { title: 'Problem Solver', description: "While being a developer, I'm also a problem solver. I've solved over 300 questions is Leetcode, and also have competed in competition like Octahacks, Leetcode weekly and biweekly, Codeforces div 3 and 2 and Codechef long challenge and cook off." }
]

const SkillCard: React.FC<{ item: { title: string, description: string } }> = ({ item: { title, description } }) => (
    <article className={skillStyle.card}>
        <h3>{title}</h3>
        <p>{description}</p>
    </article>
)


const Skills: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
    return (
        <div id='skills' className={`${skillStyle.container} ${skillStyle[darkMode.toString()]}`}>
            <h3 className={skillStyle.title}>Skills</h3>
            <div className={skillStyle.skillWrapper}>
                {SkillItem.map(item => (
                    <SkillCard key={item.title} item={item} />
                ))}
            </div>
        </div>
    );
}

export default Skills;