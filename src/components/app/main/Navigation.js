import React, {Component} from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';

import Auth from "../profile/AuthFunc";
import Profile from "../profile/Profile";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import ProfileDetails from "../profile/ProfileDetails";
//import RepositoryDetails from "./RepositoryDetails";

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
                    <Route path="/description">
                        {/*<RepositoryDetails/>*/}
                    </Route>
                    <Route path="/fullInfoUser">
                        <ProfileDetails/>
                    </Route>
                </Switch>
            </Router>
        )
    }
}