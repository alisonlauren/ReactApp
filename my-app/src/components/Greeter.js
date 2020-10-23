import React from 'react';

export default class Greeter extends React.Component {
    render() {
        return (
                <h1 id={this.props.id}>Hello, {this.props.name || 'you'}!</h1>
        )
    }
}

