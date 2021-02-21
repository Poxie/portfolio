import React from 'react';

interface Props {
    title: string;
    description: any;
    list?: string[];
    dotList?: string[];
}
export const ResumeItem: React.FC<Props> = ({title, description, list, dotList}) => {
    return(
        <div className="resume-item">
            <h1 className="uppercase">
                {title}
            </h1>
            <span>
                {description}
            </span>
            {dotList ? (
                <div className="dotlist">
                    <span>
                        {dotList.join(' • ')}
                    </span>
                </div>
            ) : null}
            {list ? (
                <ul className="list" style={{margin: 0}}>
                    {list.map(item => {
                        return(
                            <li>
                                {item}
                            </li>
                        )
                    })}
                </ul>
            ) : null}
        </div>
    )
}