import React from 'react';
import DefaultLoader from 'react-loader-spinner';

const Loader = props => (
    <DefaultLoader
        type="ThreeDots"
        color="#E600AC"
        height={60}
        width={100}
        style={{ textAlign: `${props.align}` }}
        {...props}
    />
);

export default Loader;
