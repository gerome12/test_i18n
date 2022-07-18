import I18n from 'react-native-i18n';

import fr from './locale/fr.js'
import en from './locale/en.js'
import de from './locale/de.js'
import it from './locale/it.js'

I18n.fallbacks = true;

I18n.translations = {
    fr,
    en,
    de,
    it
};

export default I18n;
