import React, { useEffect, useRef, useState } from 'react';

interface Props {
    language: string;
    percentage: number;
    type: string;
    delay: number;
}

export const LanguageRow: React.FC<Props> = ({language, percentage, delay, type}) => {
    const [currentPercentarge, setCurrentPercentage] = useState(0);
    const invervalRef: any = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            const interval = setInterval(() => {
                setCurrentPercentage((previous) => previous + 1);
            })
            invervalRef.current = interval;
        }, delay + 1190);
    }, []);

    useEffect(() => {
        if(currentPercentarge >= percentage) {
            clearInterval(invervalRef.current);
        }
    }, [currentPercentarge]);

    const rowStyles = {transitionDelay: `${delay}ms`, animationDelay: `${delay}ms`};
    const barStyles = {transitionDelay: `${delay + 1150}ms`, animationDelay: `${delay + 1150}ms`}
    return(
        <div className="language-container">
            <div className={`language-row ${type}`} style={rowStyles}>
                <div className="language" style={rowStyles}>
                    {language}
                </div>
                <div className="percentage">
                    <div className="increasing-percentage">
                        {currentPercentarge}%
                    </div>
                    <div className="bar filled-bar" style={{width: `${percentage}%`}}>
                        <div className="filled" style={barStyles} />
                    </div>
                </div>
            </div>
        </div>
    )
}