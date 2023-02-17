import { t } from 'i18next';

export const languageData = [
    {
        locale: 'cn',
        translation: {
            fullName: '你的全名',







        }
    },
    {
        locale: 'en',
        translation: {
            fullName: 'Your Full name',
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
        name: t('Chinese'),
        code: 'cn'
    }
];
