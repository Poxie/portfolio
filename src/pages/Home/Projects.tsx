import React, { useEffect, useRef, useState } from 'react';
import { AnimatedText } from '../../components/AnimatedText';
import { AnimateUp } from '../../components/AnimateUp';
import { ProjectCard } from '../../components/ProjectCard';
import { Section } from '../../components/Section';
import { SectionContent } from '../../components/SectionContent';
import '../../components/Projects.css';

const projects = [
    {
        title: 'Pathfinding Algorithm',
        description: 'This project was made to visualize pathfinding algorithms in action. Essentially, it will inevitebly find the shortest path to the selected node, if there is one.',
        languages: ['JavaScript', 'React', 'CSS'],
        path: '/path-finder',
        image: 'https://i.poxgur.com/SQeQKr.png',
        links: [
            {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>,
                path: 'https://github.com/Poxie/pathfinding'
            }
        ]
    }
]

export const Projects = () => {
    const [animate, setAnimate] = useState(false);
    const container: any = useRef(null);

    const checkDistanceFromTop = () => {
        const position = container?.current?.getBoundingClientRect();
        const distance = position?.top;
        if(distance <= 600) {
            setAnimate(true);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', checkDistanceFromTop)

        return () => window.removeEventListener('scroll', checkDistanceFromTop);
    }, []);
    
    return(
        <Section className={`projects`}>
            <SectionContent style={{minHeight: '400px', width: '1000px'}}>
                <div className="projects-content" ref={container}>
                    {animate ? (
                        <>
                        <div className="header flex justify-center">
                            <AnimatedText 
                                text={'Projects'}
                            />
                        </div>
                        {projects.map((project, key) => {
                            return(
                                <AnimateUp key={key} delay={(key * 300) + 800}>
                                    <ProjectCard 
                                        title={project.title}
                                        description={project.description}
                                        languages={project.languages}
                                        path={project.path}
                                        image={project.image}
                                        links={project.links}
                                    />
                                </AnimateUp>
                            )
                        })}
                        </>
                    ) : null}
                </div>
            </SectionContent>
        </Section>
    )
}