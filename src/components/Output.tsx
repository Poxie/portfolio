import React, { useEffect, useRef, useState } from 'react';

export const Output = () => {
    const ref = useRef([1,1,0,1]);
    const errorRef: any = useRef(null);
    const [values, setValues] = useState(ref.current.map((a) => ({sort: Math.random(), value: a})).sort((a, b) => a.sort - b.sort).map((a) => a.value));    

    // useEffect(() => {
    //     setTimeout(() => {
    //         errorRef?.current?.classList?.add('change');

    //         setTimeout(() => {
    //             errorRef?.current?.classList?.remove('error')
    //             errorRef?.current?.classList?.add('success');
    //         }, 700);
    //     }, 1200);
    // }, []);

    return(
        <div className="output">
            {values.map((value, key) => {
                return(
                    <div className={`output-message flex ${value === 1 ? 'success' : 'error'}`} ref={value === 0 ? errorRef : null} key={key} style={{animationDelay: `${key * 150}ms`}}>
                        <svg className="success-svg" viewBox="0 0 232 232" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="116" cy="116" r="108.5" stroke="currentColor" strokeWidth="15" strokeLinejoin="round"></circle><path stroke="currentColor" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" d="M65.606 114.888l37.282 36.506"></path><path stroke="currentColor" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" d="M177.741 80.603l-73.138 69.656"></path></svg>
                        {value === 0 ? (
                            <svg className="error-svg" viewBox="0 0 232 232" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="116" cy="116" r="108.5" stroke="currentColor" strokeWidth="15"></circle><path stroke="currentColor" strokeWidth="15" strokeLinecap="round" d="M67.32 162.789l95.236-95.681"></path><path stroke="currentColor" strokeWidth="15" strokeLinecap="round" d="M164.9 162.562L69.219 67.325"></path></svg>
                        ) : null}
                    </div>
                )
            })}
        </div>
    )
}