import React from 'react';
// import package
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';

// import relative path
import Home from './Home';
import News from './News';
import NewsPage from './NewsPage';
import Introduction from './Introduction';
import Professor from './Professor';
import Department from './Department';
import Development from './Development';
import NotFound from './NotFound';

const Main = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/news" component={News} />
      <Route path="/news/:newsSsn" component={NewsPage}/>
      <Route exact path="/introduction" component={Introduction} />
      <Route exact path="/professor" component={Professor} />
      <Route exact path="/department" component={Department} />
      <Route exact path="/development" component={Development} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);

export default Main;
