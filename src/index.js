import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloProvider} from 'react-apollo';
import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import './index.css'
import 'typeface-roboto';
import {Router, Route, Link, Redirect, BrowserRouter} from 'react-router-dom';
import App from './components/app/main/App';
import registerServiceWorker from './registerServiceWorker';
import {Switch} from "@material-ui/core";
import RepositoryList from "./components/app/repositories/RepositoriesList";
import Profile from "./components/app/profile/Profile";
import {Search} from "./components/app/search/Search";
import {setContext} from "apollo-link-context";
import Auth from "./components/UI/Auth";

const cache = new InMemoryCache();

const GITHUB_BASE_URL = 'https://api.github.com/graphql';

const httpLink = new HttpLink({
    uri: GITHUB_BASE_URL,
    headers: {
        authorization: `Bearer ${
            process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
        }`,
    },
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
    link: httpLink,
    cache,
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <Redirect from="/" to="/login"/>
            <App>
                <Switch>
                    <Route exact path='/login' component={Auth}/>
                    <Route path='/repository/:login/:name' component={RepositoryList}/>
                    <Route path='/profile/:login' component={Profile}/>
                    <Route path='/my-profile' component={Profile}/>
                    <Route path='/search' component={Search}/>
                </Switch>
            </App>
        </BrowserRouter>
    </ApolloProvider>,
    document.getElementById('root'),
);

registerServiceWorker();

export default client;
