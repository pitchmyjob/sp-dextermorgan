import { AppRegistry } from 'react-native';
import setup from './js/setup';

import { Sentry } from 'react-native-sentry';

Sentry.config("https://0d328c2c57444744b79607fa425780a3:48dbedfd68cd46558f8357165000b3d2@sentry.io/184310").install();


AppRegistry.registerComponent('spitchtv', () => setup);
