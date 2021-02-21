import React, { useEffect, useState } from 'react';

interface Props {
    delay?: number;
    children: any;
}

export const AnimateUp: React.FC<Props> = ({delay=0, children}) => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setActive(true);
        }, delay);
    }, []);

    return(
        <div className={`animate-up${active ? ' active' : ''}`}>
            {children}
        </div>
    )
}