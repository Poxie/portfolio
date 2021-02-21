import React from 'react';

interface Props {
    title: string;
    children: any;
}
export const ResumeColumn: React.FC<Props> = ({title, children}) => {
    return(
        <div className="resume-column">
            <div className="header column-header uppercase">
                <h1>{title}</h1>
            </div>
            {children}
        </div>
    )
}