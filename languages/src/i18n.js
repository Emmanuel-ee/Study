import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import moment from "moment";

const TRANSLATIONS_ES = {

    languageSelectMsg: "Seleccione el idioma",
    usernameMsg: "Introduzca su nombre de usuario",
    clickMsg: "Hacer clic",
    welcomeMsg: 'Bienvenida'
}
const TRANSLATIONS_ARAB = {

    languageSelectMsg: "اختار اللغة",
    usernameMsg: "ادخل اسم المستخدم",
    clickMsg: "انقر",
    welcomeMsg: 'أهلا بك'
}
const TRANSLATIONS_EN = {

    languageSelectMsg: "Select language",
    usernameMsg: "Enter username",
    clickMsg: "Click",
    welcomeMsg: 'Welcome'
}
const TRANSLATIONS_ZH = {

    languageSelectMsg: "选择语言",
    usernameMsg: "输入用户名",
    clickMsg: "点击",
    welcomeMsg: '欢迎'
}

i18n.init({
    interpolation: {
        format: function (value, format, lng) {
            if (value instanceof Date) return moment(value).format(format);
            return value;
        }
    }
}
)

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            es: {
                translation: TRANSLATIONS_ES
            },
            arab: {
                translation: TRANSLATIONS_ARAB
            },
            en: {
                translation: TRANSLATIONS_EN
            },
            zh: {
                translation: TRANSLATIONS_ZH
            }
        }
    });

i18n.changeLanguage("en");
export { i18n }