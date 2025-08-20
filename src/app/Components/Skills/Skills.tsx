'use client'
import React, { useEffect, useState } from 'react'
import './index.css'

type Props = {
    skills: string[]
}


const Skills = ({skills}: Props) => {
    const [parsedSkills, setParsedSkills] = useState<Map<string, number>>(new Map<string,number>());

    useEffect(() => {
        const skillMap = new Map<string, number>();

        skills.forEach(item => {
            const current = skillMap.get(item) ?? 0;
            skillMap.set(item, current + 1);
        });

        setParsedSkills(skillMap);
    }, [skills]);


    return (
        <div id='skills' className='skills'>
            <h1 className='subhead'>skills and technoligies</h1>
            <div className='skills-list-container'>
            {
            Array
            .from(parsedSkills)
            .sort((a,b) => b[1] - a[1])
            .map((item, index) => (
                <div key={index} className="skill-item">
                <p>{`${item[0]}`}</p>
                </div>
            ))
            }
            </div>
        </div>
    )
}

export default Skills