import React, {Component} from 'react';
import Auth from "./containers/Auth/Auth";
import {createStore} from "redux";
import reducer from "./reducers"
const initialState = { tech: "React " };
const store = createStore(reducer, initialState);

class App extends Component{
    render() {
        return<Auth/>
    }
}
export default App;