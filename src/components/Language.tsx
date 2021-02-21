import React from 'react';
import { Graph } from './Graph';
import './Language.css';

interface Props {
    language: string;
    percentage: number;
    likness: number;
    other?: {
        text: string,
        percentage: number
    };
}

export const Language: React.FC<Props> = ({language, percentage, likness, other}) => {
    return(
        <div className="language-info flex">
            <div className="graphs flex">
                <Graph 
                    percentage={percentage}
                    text={'Comfortability'}
                    delay={0}
                />
                <Graph 
                    percentage={likness}
                    text={'Preference'}
                    delay={200}
                />
                {other ? (
                    <Graph 
                        percentage={other.percentage}
                        text={other.text}
                        delay={400}
                    />
                ) : null}
            </div>
        </div>
    )
}