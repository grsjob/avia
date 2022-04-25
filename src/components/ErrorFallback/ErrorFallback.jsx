import React from 'react';

const ErrorFallback = ({error, resetErrorBoundary}) => {
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre>{error.message}</pre>
            <p>Please, click this button</p>
            <button onClick={resetErrorBoundary}>Reset Error</button>
        </div>
    );
};

export default ErrorFallback;
