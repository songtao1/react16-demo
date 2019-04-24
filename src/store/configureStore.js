import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import config from '../config'
import reducer from './reducer'
import sagas from './sagas'
import createSagaMiddleware from 'redux-saga'
const devtools = config.isDev && config.isBrowser && window.devToolsExtension
    ? window.devToolsExtension
    : () => fn => fn;
const sagaMiddleware = createSagaMiddleware();
const configureStore = (initialState, services = {}) => {

    const mid = [
        applyMiddleware(
            thunk,
            sagaMiddleware
        ),
        devtools(),
    ];
    
    const store = createStore(reducer, initialState, compose(...mid));
    // sagaMiddleware.run(sagas);
    let sagaTask = sagaMiddleware.run(sagas)
    if (module.hot) {
        module.hot.accept('./reducer', () => {
          const nextReducer = require('./reducer').default
          store.replaceReducer(nextReducer)
        })
        module.hot.accept('./sagas', () => {
          const nextSagas = require('./sagas').default
          sagaTask.cancel()
          sagaTask.done.then(() => {
            sagaTask = sagaMiddleware.run(nextSagas)
          })
        })
      }
    return store;

};


export default configureStore
