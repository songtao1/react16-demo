import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import config from './config';
import HomePage from '@/containers/homePage';
import { Provider } from 'react-redux';
import configureStore from '@/store/configureStore';
const store = configureStore({}, {});
const render = () => (
    <Provider store={store}>
        <Router basename={config.basename}>
        <Route component={(props) => (
            <App>
                <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route path="/com" component={HomePage}/>
                    <Redirect to="/home" />
                </Switch>
            </App>
        )}/>
        </Router>
    </Provider>
)



ReactDOM.render(render(), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
if (module.hot) {
    module.hot.accept();
  }
