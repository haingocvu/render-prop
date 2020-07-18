// @flow

import React from 'react';

class Mouse extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }

    state = {
        x: 0,
        y: 0,
    }

    handleMouseMove(e) {
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }

    render() {
        const { render } = this.props;
        return (
            <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
                {render(this.state)}
            </div>
        )
    }
}

export default Mouse;