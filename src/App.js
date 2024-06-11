import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RequestReset from './pages/RequestReset';
import ResetPasswordPage from './pages/ResetPasswordPage';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/reset/:token" component={ResetPasswordPage} />
                    <Route path="/" component={RequestReset} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
