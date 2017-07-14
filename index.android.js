

import { AppRegistry } from 'react-native';
import setup from './js/setup';

import { Sentry } from 'react-native-sentry';

Sentry.config("https://8a31f581776b4d419064a882510af2fe:9eb2aca885ac471e9132384f66ec93fb@sentry.io/184306").install();


AppRegistry.registerComponent('spitchtv', () => setup);
