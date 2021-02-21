import React from 'react';
import { Languages } from '../../components/Languages';
import { LanguageSelector } from '../../components/LanguageSelector';
import { Section } from '../../components/Section';
import { SectionContent } from '../../components/SectionContent';

export const Knowledge = () => {
    return(
        <Section>
            {/* <SectionTitle 
                animate={true}
                animationDuration={600}
                direction={'up'}
                text={'What do I know?'}
            /> */}
            <SectionContent style={{height: '400px', width: '700px'}}>
                <LanguageSelector />
                <Languages />
            </SectionContent>
        </Section>
    )
}