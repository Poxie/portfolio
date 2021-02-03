import React, { useEffect, useState } from 'react';

interface Props {
    delay?: number;
    children: any;
}

export const AnimateUp: React.FC<Props> = ({delay, children}) => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        setActive(true);
    }, []);

    return(
        <div className={`animate-up${active ? ' active' : ''}`} style={{transitionDelay: `${delay}ms`}}>
            {children}
        </div>
    )
}