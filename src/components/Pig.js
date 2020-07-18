import React from 'react';
import PigImg from './../public/images/pig.png';

function Pig(props) {
    const { mouse } = props;
    return (
        <img src={PigImg} style={{ position: 'absolute', left: mouse.x, top: mouse.y }} alt="pig" />
    )
}

export default Pig;