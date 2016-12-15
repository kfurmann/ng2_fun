/**
 * Created by damian.kmiecik on 11.12.2016.
 */

import {IAppState, rootReducer, deimmutify} from './store';
import {environment} from '../../environments/environment';

const createLogger = require('redux-logger');

export {
  IAppState,
  rootReducer
};

export let middleware = [];


if (!environment.production) {
  middleware.push(
    createLogger({
      level: 'info',
      collapsed: true,
      stateTransformer: deimmutify
    }));
}
