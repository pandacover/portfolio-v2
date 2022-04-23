import React from "react";
import workStyles from "../../styles/Work.module.scss";
import WorkItems from "./WorkItems";
import Card from "./Card";

interface Props {
    name: string,
    details: string,
    live: string,
    source: string,
    tech: string[]
}

const Work: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
    return (
        <div className={`${workStyles.container} ${workStyles[darkMode.toString()]}`} id="work">
            <h3>Some of my projects</h3>
            <div className={`${workStyles.projects} flex`}>
                {WorkItems.map((item: Props, index: number) => (
                    <> {
                        index === 0 ?
                            <Card key={index} item={item} darkMode={darkMode} info='Please use "test@gmail.com" as a test email and "1234" as its password to login if you don&apos;t want to register.' />
                            :
                            <Card key={index} item={item} darkMode={darkMode} />
                    }
                    </>
                ))}
            </div>
        </div>
    )
}

export default Work;