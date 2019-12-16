import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloProvider} from 'react-apollo';
import {ApolloClient} from 'apollo-client';
import {createHttpLink, HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import './index.css'
import {Route, Redirect, BrowserRouter} from 'react-router-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {Switch} from "@material-ui/core";
import {setContext} from "apollo-link-context";
import Login from "./components/pages/Login";
import Profile from "./components/pages/Profile";
import MyProfile from "./components/pages/MyProfile";
import Repository from "./components/pages/Repository";
import Search from "./components/pages/Search";
const cache = new InMemoryCache();

const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql'
});

const authLink = setContext((_, {headers}) => {
    const token = localStorage.getItem('token');
    return {
        headers: {
            ...headers,
            authorization:
                token ? `Bearer ${token}` : ''
        }
    }
});
const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <Redirect from="/" to="/login"/>
            <App>
                <Switch>
                    <Route exact path='/login' component={Login}/>
                    <Route path='/repository/:login/:name' component={Repository}/>
                    <Route path='/profile/:login' component={Profile}/>
                    <Route path='/my-profile' component={MyProfile}/>
                    <Route path='/search' component={Search}/>
                </Switch>
            </App>
        </BrowserRouter>
    </ApolloProvider>,
    document.getElementById('root'),
);

registerServiceWorker();

export default client;
