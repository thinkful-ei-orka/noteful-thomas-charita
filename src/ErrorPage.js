import React from 'react';

class ErrorPage extends React.Component {
    state = {error: null};

    static getDerivedStateFromError(error) {
        console.error(error);
        return {error};
    }
    
    render() {
        // If there was an error, show an error page
        if (this.state.error) {
            return (
                <main className="error-page">
                    <h1>Hey, something has gone wrong with this application.</h1>
                    <p>Please try refreshing the page.</p>
                </main>
            );
        }
        // Otherwise, render the children
        return this.props.children;
    }
}

export default ErrorPage;