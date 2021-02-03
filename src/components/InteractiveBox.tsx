import React, { createRef, useEffect, useRef, useState } from 'react';
import { Box } from './Box';
import { Output } from './Output';

const codeLines = [
    [
        {
            margin: 0,
            items: [
                {
                    width: '58px',
                    color: 'green'
                },
                {
                    width: '45px',
                    color: 'light-blue'
                },
                {
                    width: '65px',
                    color: 'gold'
                }
            ]
        },
        {
            margin: '20px',
            items: [
                {
                    width: '35px',
                    color: 'green'
                },
                {
                    width: '55px',
                    color: 'blue'
                },
                {
                    width: '30px',
                    color: 'green'
                },
                {
                    width: '60px',
                    color: 'green'
                }
            ]
        },
        {
            margin: '40px',
            items: [
                {
                    width: '70px',
                    color: 'purple'
                },
                {
                    width: '25px',
                    color: 'green'
                },
                {
                    width: '45px',
                    color: 'green'
                },
                {
                    width: '60px',
                    color: 'green'
                }
            ]
        },
        {
            margin: '40px',
            items: [
                {
                    width: '25px',
                    color: 'green'
                },
                {
                    width: '45px',
                    color: 'green'
                },
                {
                    width: '38px',
                    color: 'green'
                },
                {
                    width: '30px',
                    color: 'gold'
                }
            ]
        },
        {
            margin: '20px',
            items: [
                {
                    width: '75px',
                    color: 'blue'
                },
                {
                    width: '50px',
                    color: 'gold'
                },
            ]
        },
        {
            margin: 0,
            items: [
                {
                    width: '0px',
                    color: 'blue'
                },
            ],
            type: 'break'
        },
        {
            margin: 0,
            items: [
                {
                    width: '40px',
                    color: 'gold'
                },
                {
                    width: '30px',
                    color: 'purple'
                },
                {
                    width: '55px',
                    color: 'gold'
                }
            ]
        },
        {
            margin: '20px',
            items: [
                {
                    width: '40px',
                    color: 'green'
                },
                {
                    width: '40px',
                    color: 'gold'
                },
                {
                    width: '70px',
                    color: 'gold'
                },
                {
                    width: '30px',
                    color: 'gold'
                }
            ]
        },
        {
            margin: '40px',
            items: [
                {
                    width: '35px',
                    color: 'gold'
                },
                {
                    width: '35px',
                    color: 'gold'
                },
                {
                    width: '50px',
                    color: 'blue'
                },
                {
                    width: '30px',
                    color: 'purple'
                }
            ]
        },
        {
            margin: '40px',
            items: [
                {
                    width: '50px',
                    color: 'green'
                },
                {
                    width: '30px',
                    color: 'green'
                },
                {
                    width: '60px',
                    color: 'green'
                },
                {
                    width: '20px',
                    color: 'blue'
                }
            ]
        },
        {
            margin: '20px',
            items: [
                {
                    width: '35px',
                    color: 'blue'
                },
                {
                    width: '40px',
                    color: 'green'
                },
            ]
        },
    ]
]

export const InteractiveBox = () => {
    const codeRef: any = useRef([]);
    const rowRef: any = useRef([]);
    const allCodeDivs: any = useRef([]);
    const [active, setActive] = useState(false);
    const [count, setCount] = useState(-1);
    const [output, setOutput]: any = useState(null);

    const setRandomErrorInCode = () => {
        const length = allCodeDivs.current.length;
        const randomIndex = (Math.floor(Math.random() * length - 1));
        const randomSnippet = allCodeDivs?.current[randomIndex].current.classList.add('erroring');
    }

    useEffect(() => {
        const rows: any = [];
        codeLines.forEach(row => {
            const tempRows: any = [];
            row.forEach(row => {
                if(row.type === 'break') {
                    tempRows.push(<br/>);
                    return
                }
                const lineRef: any = createRef();
                tempRows.push(
                    <div className="code-row flex" style={{marginLeft: row.margin}} ref={lineRef}>
                        {row.items.map(item => {
                            const ref: any = createRef();
                            allCodeDivs.current.push(ref);
                            return <div ref={ref} className={`code-item ${item.color}`} style={{minWidth: item.width}} />
                        })}
                    </div>
                )
                rowRef.current.push(lineRef);
            })
            rows.push(tempRows);
        })
        codeRef.current = rows;
        setTimeout(() => {
            setActive(true);
        }, 2400);
    }, []);

    useEffect(() => {
        if(!active) return;
        if(count > rowRef.current.length) {
            setTimeout(() => {
                setOutput(true)
                setRandomErrorInCode();
            }, 1300);
            return setOutput(false)
        };
        rowRef.current[count]?.current?.classList?.add('animate-code');
        setTimeout(() => {
            setCount(previous => previous + 1);
        }, 300)
    }, [count, active]);

    const resetOutput = () => {
        setOutput(false);

        setTimeout(() => {
            setOutput(true);
            codeRef?.current[Math.floor(Math.random() * codeRef?.current?.length)]?.classList?.add('erroring');
        }, 1000);
    }

    return(
        <div className="rotation" style={{transform: 'rotate3d(0.5, -0.866, 0, 15deg) rotateZ(-1deg)'}}>
            <div className="interactive-box">
                <div className="box-row flex flex-wrap justify-center">
                    <Box text={'Input'} onClick={resetOutput}>
                        {codeRef.current}
                    </Box>
                    <Box text={'Output'}>
                        {output === false ? (
                            <div className="loading-output flex align-center justify-center">
                                <div className="spinner"/>
                            </div>
                        ) : null}
                        {output === true ? (
                            <Output />
                        ) : null}
                    </Box>
                </div>
            </div>
        </div>
    )
}