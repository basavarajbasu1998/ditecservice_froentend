// TranslationContext.js

import React, { createContext, useState } from 'react';
import axios from 'axios';

const TranslationContext = createContext();

const TranslationProvider = ({ children }) => {
    const [selectedLanguage, setSelectedLanguage] = useState('en');
    const [translations, setTranslations] = useState({});

    const apiKey = 'AIzaSyBm6-QqyT7_OcJp03BIPZhgfp-xB0GxOb0';

    const translateText = async (text, targetLang) => {
        const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
        try {
            const response = await axios.post(url, {
                q: text,
                target: targetLang,
            });
            return response.data.data.translations[0].translatedText;
        } catch (error) {
            console.error('Error translating text:', error);
            return text;
        }
    };

    const changeLanguage = async (lang) => {
        setSelectedLanguage(lang);
        const translatedTexts = {};
        for (const [key, value] of Object.entries(translations)) {
            translatedTexts[key] = await translateText(value, lang);
        }
        setTranslations(translatedTexts);
    };

    return (
        <TranslationContext.Provider value={{ selectedLanguage, translations, changeLanguage, setTranslations }}>
            {children}
        </TranslationContext.Provider>
    );
};

export { TranslationProvider, TranslationContext };
