import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import your components here
// import Home from './Home';
// import BookList from './BookList';

const App = () => {
    return (
        <Router>
            <Switch>
                {/* Define your routes here */}
                {/* <Route path='/' exact component={Home} /> */}
                {/* <Route path='/books' component={BookList} /> */}
            </Switch>
        </Router>
    );
};

export default App;