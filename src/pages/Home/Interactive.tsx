import React, { useEffect, useRef, useState } from 'react';
import { AnimatedText } from '../../components/AnimatedText';
import { AnimateUp } from '../../components/AnimateUp';
import { InteractiveBox } from '../../components/InteractiveBox';
import { Section } from '../../components/Section';
import { SectionContent } from '../../components/SectionContent';

export const Interactive = () => {
    const [animate, setAnimate] = useState(false);
    const container: any = useRef(null);

    const checkDistanceFromTop = () => {
        const position = container?.current?.getBoundingClientRect();
        const distance = position?.top;
        if(distance <= 600) {
            setAnimate(true);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', checkDistanceFromTop)

        return () => window.removeEventListener('scroll', checkDistanceFromTop);
    }, []);

    return(
        <Section className="interactive">
            <SectionContent style={{width: '1300px', paddingBottom: '80px'}}>
                <div className="interactive-content flex flex-wrap justify-center" ref={container}>
                    {animate ? (
                        <>
                            <div className="interactive-text">
                                <AnimatedText 
                                    text={'I love creating interactive websites.'}
                                />
                                <AnimateUp delay={2500}>
                                    <span>Whatever the website is, I enjoy making it. However, my personal favorite is interactive ones! Creating animations is always so fun and educational. For each animation I make, I develop even more! Teamwork is an essential part in creating beauty, just edit my easy-to-read code! Can you find all the interactiveness in the boxes to the right?</span>
                                </AnimateUp>
                            </div>
                            <InteractiveBox />
                        </>
                    ) : null}
                </div>
            </SectionContent>
        </Section>
    )
}