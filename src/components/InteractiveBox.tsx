import React, { createRef, useEffect, useRef, useState } from 'react';
import { Box } from './Box';
import { Output } from './Output';

const codeLines = [
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

export const InteractiveBox = () => {
    const rowRef: any = useRef([]);
    const [active, setActive] = useState(false);
    const [count, setCount] = useState(-1);
    const [output, setOutput]: any = useState(null);
    const [code, setCode]: any = useState(codeLines);
    const [rows, setRows]: any = useState([]);
    const [error, setError]: any = useState(true);
    const buttonRef: any = useRef(null);

    const setRandomErrorInCode = () => {
        const dummy = code;
        const randomRowIndex = Math.floor(Math.random() * (dummy.length - 1));
        const randomItemIndex = Math.floor(Math.random() * (dummy[randomRowIndex].items.length - 1));
        console.log(dummy[randomRowIndex].items[randomItemIndex]);
        dummy[randomRowIndex].items[randomItemIndex].erroring = true;
        setCode((previous: any) => [...dummy, ...[]]);
    }

    const fixError = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.currentTarget.classList.remove('erroring');
        e.currentTarget.classList.add('success');
        setError(false);
        resetOutput();
    }

    useEffect(() => {
        const rows: any = [];
        code.forEach((row: any) => {
            if(row.type === 'break') {
                rows.push(<br/>);
                return
            }
            const lineRef: any = createRef();
            rows.push(
                <div className="relative" style={{position: 'relative'}}>
                    <div className="code-row flex" style={{paddingLeft: row.margin}} ref={lineRef}>
                        {row.items.map((item: any) => {
                            return (
                                <div className={`code-item ${item.color}${item.erroring ? ' erroring' : ''}`} style={{minWidth: item.width}} onClick={item.erroring ? (e) => fixError(e) : (e) => {}}/>
                            )
                        })}
                    </div>
                </div>
            )
            rowRef.current.push(lineRef);
        })
        setRows((previous: any) => [...rows, ...[]]);
        setTimeout(() => {
            setActive(true);
        }, 2400);
    }, [code]);

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
        }, 1000);
    }

    return(
        <div className="rotation" style={{transform: 'rotate3d(0.5, -0.866, 0, 15deg) rotateZ(-1deg)'}}>
            <div className="interactive-box">
                <div className="box-row flex flex-wrap justify-center">
                    <Box text={'Input'} onClick={resetOutput} buttonRef={buttonRef}>
                        {rows}
                    </Box>
                    <Box text={'Output'}>
                        {output === false ? (
                            <div className="loading-output flex align-center justify-center">
                                <div className="spinner"/>
                            </div>
                        ) : null}
                        {output === true ? (
                            <Output 
                                error={error}
                            />
                        ) : null}
                    </Box>
                </div>
            </div>
        </div>
    )
}