import { t } from 'i18next';

export const languageData = [

    {
        locale: 'en',
        translation: {

            yourScore: "YOUR SCORE",

            fullName: 'Your Full name',
        }
    },
    {
        locale: 'bg',
        translation: {
            yourScore: "ТВОЯТ РЕЗУЛТАТ",
            fullName: 'Вашето пълно име',
        }
    },
    {
        locale: 'tk',
        translation: {
            yourScore: "PUANIN",
            fullName: 'Tam adınız',
        }
    }
    ,
    {
        locale: 'fr',
        translation: {
            yourScore: "TON SCORE",
            fullName: 'Ton nom complet',
        }
    }
    ,
    {
        locale: 'de',
        translation: {
            yourScore: "IHR ERGEBNIS",
            fullName: 'Ihr vollständiger Name',
        }
    }
    ,
    {
        locale: 'es',
        translation: {
            yourScore: "TU PUNTUACIÓN",

            fullName: 'Tu nombre completo',
        }
    }
];

export type languageProps = {
    id: string;
    name: string;
    code: string;
};

export const appLanguages: languageProps[] = [
    {
        id: '0',
        name: 'English',
        code: 'en'
    },
    {
        id: '1',
        name: 'Bulgarian',
        code: 'bg'
    },
    {
        id: '2',
        name: 'Turkish',
        code: 'tk'
    },
    {
        id: '3',
        name: 'French',
        code: 'fr'
    },
    {
        id: '4',
        name: 'German',
        code: 'De'
    },
    {
        id: '5',
        name: 'Spanish',
        code: 'es'
    }
];
