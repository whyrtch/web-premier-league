import React from 'react';

const Loading = () => {
    return (
        <div className="jumbotron w-25 mx-auto my-5">
            <p className="lead text-center">Loading...</p>
            <div className="w-100 flex-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    );
}

export default Loading;
