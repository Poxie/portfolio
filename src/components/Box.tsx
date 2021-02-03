import React from 'react';

interface Props {
    text: string;
    children: any;
    onClick?: () => void;
}

export const Box: React.FC<Props> = ({text, children, onClick}) => {
    return(
        <div className="box">
            <div className="box-title flex align-center space-between">
                {text}
                {onClick ? (
                    <div className="button" onClick={onClick}>
                        Run
                    </div>
                ) : null}
            </div>
            <div className="box-content">
                {children}
            </div>
        </div>
    )
}