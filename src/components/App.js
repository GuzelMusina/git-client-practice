import React from 'react';
import '../App.css';
import 'antd/dist/antd.css';
import {Button, PageHeader} from "antd";
import github from "./github.png";
import {useHistory} from "react-router-dom";

function App({children}) {
    let history = useHistory();
    return (
        <div>
            {history.location.pathname !== '/login' &&
            <PageHeader
                style={{
                    border: '1px solid rgb(235, 237, 240)',
                    background: "darkgrey",
                }}
                title={
                    <img id="github-image" height="40px" src={github} alt="logo" onClick={() => history.push('/my-profile')}/>
                }
                extra={[
                    <Button key="3" onClick={() => history.push('/search')} icon="search"/>,
                    <Button key="2" onClick={() => history.push('/my-profile')} icon="user">My
                        profile</Button>,
                    <Button onClick={logOut} key="1" type="default" icon="logout">
                        Logout
                    </Button>,
                ]}
            />
            }
            <div style={Layout}>
                {children}
            </div>
        </div>
    );

    function logOut() {
        localStorage.removeItem('token');
        history.push('/login');
    }
}

export default App;

const Layout = {
    margin: '50px'
};