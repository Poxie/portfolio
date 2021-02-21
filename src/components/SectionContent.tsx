import React from 'react';

interface Props {
    children: any;
    style?: any;
    className?: string;
}

export const SectionContent: React.FC<Props> = ({children, style, className}) => {
    return(
        <div className={`section-content${className ? ' ' + className : ''}`} style={style}>
            {children}
        </div>
    )
}