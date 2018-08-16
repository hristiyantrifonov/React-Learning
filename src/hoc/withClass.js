import React from 'react';

const withClass = (WrappedComponent,theClass) => {
    return (props) => (
        <div className={theClass}>
            <WrappedComponent {...props} />
        </div>
    )
}

export default withClass;