import React from 'react';
import './Section.css';

interface Props {
    children: any;
    className?: string;
}

export const Section: React.FC<Props> = ({children, className}) => {
    return(
        <div className={`section${className ? ' ' + className : ''}`}>
            {children}
        </div>
    )
}