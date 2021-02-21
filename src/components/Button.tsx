import React from 'react';

interface Props {
    text: string;
    handleClick: () => void;
}

export const Button: React.FC<Props> = ({text, handleClick}) => {
    return(
        <div className="button">
            <button onClick={handleClick}>{text}</button>
        </div>
    )
}