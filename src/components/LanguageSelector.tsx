import React, { useEffect, useRef } from 'react';
import { useLanguages } from '../contexts/LanguageProvider';

interface Language {
    language: string;
    percentage: number;
}

export const LanguageSelector = () => {
    const handleLanguages: any = useLanguages();
    const languages: Language[] = handleLanguages.languages;
    const currentLanguage = handleLanguages.currentLanguage;

    const changeLanguage = (language: Language) => {
        handleLanguages.setCurrentLanguage(language);
    }

    const element: any = useRef(null);

    const checkTopDifference = () => {
        const position = element?.current?.getBoundingClientRect();
        if(position?.top < 660) {
            element.current.classList.add(`animate-in`);
            return true;
        }
    }

    const handleScroll = () => {
        setTimeout(() => {
            const success = checkTopDifference();
            if(success) {
                window.removeEventListener('scroll', handleScroll);
            }
        }, 300);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return(
        <div className="language-selector flex align-center space-between" ref={element}>
            <div className={`language-item${!currentLanguage ? ' active' : ''}`} onClick={() => handleLanguages.setCurrentLanguage(null)}>
                All Languages
            </div>
            {languages.map((language, key) => {
                return(
                    <div className={`language-item${language.language === currentLanguage?.language ? ' active' : ''}`} key={key} onClick={() => changeLanguage(language)}>
                        {language.language}
                    </div>
                )
            })}
        </div>
    )
}