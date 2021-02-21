import React, { useEffect, useRef } from 'react';

interface Props {
    text: string;
    animate?: boolean;
    direction?: 'up' | 'down' | 'right' | 'left';
    animationDuration?: number;
}

export const SectionTitle: React.FC<Props> = ({text, animate, direction, animationDuration}) => {
    const element: any = useRef(null);

    const checkTopDifference = () => {
        const position = element.current.getBoundingClientRect();
        console.log(position);
        if(position.top < 400) {
            element.current.classList.add(`animate-in`);
            return true;
        }
    }

    const handleScroll = () => {
        const success = checkTopDifference();
        if(success) {
            window.removeEventListener('scroll', handleScroll);
        }
    }

    useEffect(() => {
        if(!animate) return;
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])
    
    return(
        <div className={`section-title${animate ? ' animate ' + direction : ''}`} ref={element} style={{transitionDuration: animationDuration + 'ms'}}>
            <h3>{text}</h3>
        </div>
    )
}