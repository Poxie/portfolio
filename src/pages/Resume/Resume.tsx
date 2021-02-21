import React from 'react';
import { ResumeColumn } from './ResumeColumn';
import { ResumeItem } from './ResumeItem';
import './Resume.css';

export const Resume = () => {
    return(
        <div className="resume flex justify-center">
            <div className="full-column">
                <ResumeColumn title={'Skills'}>
                    <ResumeItem
                        title={'Technical skills'}
                        description={'Proficient with:'}
                        dotList={['JavaScript (ES6+)', 'React / JSX', 'Node.js', 'MySQL', 'HTML5', 'CSS3 + Sass', 'Git']}
                    />
                    <ResumeItem
                        title={'Soft skills'}
                        description={<span>Mentionworthy:<br/>Multilingual (Swedish, English, Spanish - fundamentally)</span>}
                    />
                </ResumeColumn>
                <ResumeColumn title={'Background'}>
                    <ResumeItem
                        title={'Coding journey'}
                        description={'I\'ve been coding websites for about 5 years now. I can confidently say that I have mastered many technologies. Milestones:'}
                        list={['JavaScript', 'Python', 'React']}
                    />
                    <ResumeItem 
                        title={'Beginning'}
                        description={'I began coding 5 years ago, after watching a course on Udemy. Since then, I\'ve been pretty much self-taught. This game me essential skills, like debugging.'}
                    />
                </ResumeColumn>
            </div>
            <div className="full-column">
                <ResumeColumn title={'Projects'}>
                    <ResumeItem
                        title={'Pathfinding Algorithm'}
                        description={'A pathfinding algorithm visualizer. Made to show how the algorithm works in action, pure JavaScript.'}
                        dotList={['JavaScript', 'TypeScript', 'React', 'CSS']}
                    />
                    <ResumeItem
                        title={'Todo List'}
                        description={'A todo list, made purely in React. It uses localstorage to store the todos and columns.'}
                        dotList={['JavaScript', 'TypeScript', 'React', 'CSS']}
                    />
                </ResumeColumn>
                <ResumeColumn title={'Fun Facts'}>
                    <ResumeItem
                        title={'Interests'}
                        description={''}
                        dotList={['Algorithms', 'Automation', 'Physics']}
                    />
                    <ResumeItem 
                        title={'Hobbies'}
                        description={''}
                        dotList={['Gaming', 'Programming']}
                    />
                </ResumeColumn>
            </div>
        </div>
    )
}