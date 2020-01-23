import React, {useState} from "react";
import {Button, Col, Icon, Input, Row} from "antd";
import "./scss/styles.scss";
import github from "../image/github.png"
import { useLazyQuery } from '@apollo/react-hooks';
import {Redirect} from "react-router-dom";
import VALIDATION_QUERY from "../graphql/queries/validation";

function Login() {
    let [githubToken, setGithubToken] = useState('');
    let [token] = useState(localStorage.getItem('token'));
    let [error, setError] = useState(false);

    const [getData] = useLazyQuery(VALIDATION_QUERY, {
        onCompleted: () => {
            setError(false);
            window.location.reload();
        },
        onError: () => {
            setError(true);
            localStorage.removeItem('token');
        }
    });

    const login = () => {
        localStorage.setItem('token', githubToken);
        getData();
    };

    return token ? (
        <Redirect to='/search'/>
    ) : (
        <div>
            <Row type="flex" justify="center">
                <Col align="center" xs={20} sm={16} md={12} lg={8} xl={8}>
                    <img src={github} alt="" className="mb-10 img"/>
                    <Input
                        className="mb-10"
                        placeholder="Please write your personal github token here"
                        value={githubToken}
                        onChange={(event) => setGithubToken(event.target.value)}
                    />
                    <Button
                        type="default"
                        block
                        htmlType="submit"
                        onClick={login}
                    >
                        Log In
                    </Button>
                    {error &&
                    <p className="error-message">Incorrect token</p>
                    }
                </Col>
            </Row>
        </div>
    );
}

export default Login;