import React from 'react';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome!</h1>
                <div><a href={FlowRouter.url('login')}>Login</a></div>
                <div><a href={FlowRouter.url('register')}>Register</a></div>
            </div>
        )
    }
}