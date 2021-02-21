import React, { useEffect, useState } from 'react';

interface Props {
    percentage: number;
    text: string;
    delay?: number;
}

export const Graph: React.FC<Props> = ({text, percentage, delay}) => {
    const [currentPercentarge, setCurrentPercentage] = useState(0);
    const styles = {animationDelay: `${delay}ms`};

    const linear = (duration: number, range: number, current: number) => {
        return ((duration * 2) / Math.pow(range, 2)) * current
    }

    const animateValue = (start: number, end: number, duration: number, easing: any) => {
        var range = end - start;
        var current = start;
        var increment = end > start? 1 : -1;
        
        var step = () => {
            current += increment;
            
            if (current !== end) {
                setTimeout(step, easing(duration, range, current));
            }
            return setCurrentPercentage(current);
        };
        
        setTimeout(step, easing(duration, range, start));
    }

    useEffect(() => {
        animateValue(currentPercentarge, percentage, currentPercentarge === 0 ? 1000 : percentage - currentPercentarge * 10000, linear);
    }, [percentage])

    return(
        // @ts-ignore
        <div className="graph animate-in flex column align-center" percentage={percentage} style={styles}>
            <svg className="circle-chart" viewBox="0 0 36.83098862 36.83098862" width="140" height="140" xmlns="http://www.w3.org/2000/svg">
                <circle className="circle-chart__background" stroke="#efefef" strokeWidth="4" fill="none" cx="18.91549431" cy="18.91549431" r="15.91549431" />
                <circle className="circle-chart__circle circle-chart__circle--negative" stroke="#00acc1" strokeWidth="4" strokeDasharray={currentPercentarge} strokeLinecap="round" fill="none" cx="18.11549431" cy="17.91549431" r="15.91549431" />
            </svg>
            <div className="graph-percent">
                {currentPercentarge}%
            </div>
            <div className="graph-text">
                {text}
            </div>
        </div>
    )
}