import React, { createRef, useEffect, useRef, useState } from 'react';
import './Interactive.css';

interface Props {
    text: string;
    delay?: number;
}

export const AnimatedText: React.FC<Props> = ({text, delay=0}) => {
    const [count, setCount] = useState(-1);
    const [active, setActive] = useState(false);
    const letters: any = useRef([]);
    const letterRefs: any = useRef([]);
    const intervalRef: any = useRef(null);

    useEffect(() => {
        let key = 0;
        for(const letter of text) {
            const letterRef: any = createRef();
            const span = <span className={`letter-span${letter === ' ' ? ' empty' : ''}`} key={key} ref={letterRef}>{letter}</span>
            letterRefs.current.push(letterRef);
            letters.current.push(span);
            key++;
        }
        setActive(true)
    }, []);

    useEffect(() => {
        setTimeout(() => {
            if(intervalRef.current) return;
            const interval = setInterval(() => {
                setCount(previous => previous + 1);
            }, 50)
            intervalRef.current = interval;
        }, delay)
    }, [active]);
    
    useEffect(() => {
        letterRefs.current[count]?.current?.classList?.add('animate-text-up');
        if(count >= text.length) {
            clearInterval(intervalRef.current);
        }
    }, [count]);

    return(
        <div className="animated-text">
            {letters.current}
        </div>
    )
}