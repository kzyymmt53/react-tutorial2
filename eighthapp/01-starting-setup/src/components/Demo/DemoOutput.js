import React from 'react';

const DemoOutput = props => {
    return <p>{props.show ? 'this is paragraph' : ''}</p>;
}

export default React.useMemo(DemoOutput);