import React from 'react';
import cardStyles from "../../styles/Card.module.scss";
import Link from "next/link";

interface Props {
    name: string,
    details: string,
    live: string,
    source: string,
    tech: string[]
}

const Card: React.FC<{ item: Props, darkMode: boolean }> = ({ item: { name, details, live, source, tech }, darkMode }) => {
    return (
        <div className={`${cardStyles.container} ${cardStyles[darkMode.toString()]}`}>
            <h1>{name}</h1>
            <p>
                {details}
            </p>
            <ul className={`${cardStyles["card-list"]} flex`}>
                {tech.map((item: string, index: number) => (
                    <li key={index} className="li">{item}</li>
                ))}
            </ul>
            <div className="flex">

                <Link href={live}>
                    <a>Live</a>
                </Link>
                <Link href={source}>
                    <a>Source</a>
                </Link>
            </div>
        </div>
    )
}

export default Card