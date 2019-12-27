
import * as RNLocalize from "react-native-localize";
import I18n from 'i18n-js'
import ptBR from './pt-BR.json'

// Função que irá nos auxiliar a normalizar as traduções que serão recebidas pela função getLanguageByDevice
// Isso é necessário pois no android e no iOS o retorno do mesmo idioma pode ser diferente
// Exemplo: no iOS podemos receber pt-US e no android pt-BR para o idioma português Brasil.
const normalizeTranslate = {
  'en-US': 'en-US',
  'pt-BR': 'pt-BR',
  'en': 'en-US',
  'pt-US': 'pt-BR',
}

// Função responsável por adquirir o idioma utilizado no device
const getLanguageByDevice = () => {
  return RNLocalize.getLocales()[0].languageTag;
}

// Aqui setamos os idiomas que o I18N irá dar suporte
I18n.translations = {
  'pt-BR': ptBR,
}

// Função responsável por verificar se o idioma atual do divice está sendo suportado, caso não ele irá setar como 'ptBR-BR'
const setLanguageToI18n = () => {
  const language = getLanguageByDevice();
  const translateNormalize = normalizeTranslate[language];
  I18n.missingTranslation = item => item;
  const iHaveThisLanguage = I18n.translations.hasOwnProperty(translateNormalize);
  iHaveThisLanguage
    ? I18n.locale = translateNormalize
    : I18n.defaultLocale = 'en-US';
}

setLanguageToI18n();

export const translate = key => I18n.t(key);