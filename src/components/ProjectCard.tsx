import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useTransitions } from '../contexts/TransitionProvider';
import { Button } from './Button';
import { SpecialButton } from './SpecialButton';

interface Props {
    title: string;
    description: string;
    path: string;
    languages: string[];
    image: string;
    links: Link[];
}
interface Link {
    icon: React.SVGProps<SVGSVGElement>;
    path: string;
}
export const ProjectCard: React.FC<Props> = ({title, description, path, languages, image, links}) => {
    const transitions: any = useTransitions();
    const [redirect, setRedirect]: any = useState(null);
    const changePage = () => {
        transitions.setTransition(true);
        setTimeout(() => {
            setRedirect(<Redirect push to={path} />)
        }, 1000);
    }

    if(redirect) return redirect;

    return(
        <div className="project-card">
            <div className="project-image flex justify-center">
                <img src={image} alt=""/>
            </div>
            <div className="project-text">
                <div className="project-title">
                    <h2>{title}</h2>
                </div>
                <div className="project-description">
                    <span>{description}</span>
                </div>
                <div className="project-bottom flex space-between align-center">
                    <div className="project-links">
                        {links.map((link, key) => {
                            return(
                                <a href={link.path} target="_blank" className="link" key={key}>
                                    {link.icon}
                                </a>
                            )
                        })}
                    </div>
                    <div className="project-languages flex">
                        {languages.map((language, key) => {
                            return(
                                <div className="project-language" key={key}>
                                    {language}
                                </div>
                            )
                        })}
                    </div>
                    <div className="buttons flex">
                        <div className="button" onClick={changePage}>
                            Try it out
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}