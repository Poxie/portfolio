import React from 'react';

interface Props {
    children: any;
    onClick?: () => void;
}
export const SpecialButton: React.FC<Props> = ({children, onClick}) => {
    return(
        <div className="button" onClick={onClick}>
            {children}
        </div>
    )
}