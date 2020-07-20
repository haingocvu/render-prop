import React from 'react';
import Mouse from './Mouse';
import Pig from './Pig';

class MouseTracker extends React.Component {
    renderPig(mouse) {
        return (
            <Pig mouse={mouse} />
        )
    }
    render() {
        return (
            <>
                <h1>Move the mouse around</h1>
                <Mouse render={this.renderPig} />
            </>
        )
    }
}

export default MouseTracker;