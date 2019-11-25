import React, {Component} from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';

import Auth from "./AuthFunc";
import Profile from "./Profile";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import ProfileDetails from "./ProfileDetails";

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        }
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside.bind(this), true);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside.bind(this), true);
    }

    handleClickOutside(e) {

        const domNode = document.getElementById('dropdown-menu');

        if (domNode && !domNode.contains(e.target)) {
            this.setState({
                menuOpen: false
            });
        }
    }

    openMenu = () => {
        this.setState({
            menuOpen: true
        })
    }

    closeMenu = () => {
        this.setState({
            menuOpen: false
        })
    }

    render() {
        return (
            <Router>
                <ul>
                    <li>
                        <Link to="/auth">Authorize</Link>
                    </li>
                    <li>
                        <Link to="/contacts">Contacts</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/profile">
                        <Profile/>
                    </Route>
                    <Route path="/auth">
                        <Auth/>
                    </Route>
                    <Route path="/contacts">
                    </Route>
                    <Route path="/description">
                        <h2>описание</h2>
                    </Route>
                    <Route path="/fullInfoUser">
                        <ProfileDetails/>
                    </Route>
                </Switch>
            </Router>
        )
    }
}