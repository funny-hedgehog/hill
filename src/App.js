import {Switch, Route, Link} from 'react-router-dom';

import Simple1Page from './pages/Simple1Page'
import Simple2Page from './pages/Simple2Page'
import OverLoadedPage from './pages/OverLoadedPage'

import NotFoundPage from './pages/NotFoundPage'

import './App.css';

function App() {
  return (
    <>
      {/*<header className="links">*/}
      {/*  <Link to="/">Simple1</Link>*/}
      {/*  <Link to="/simple2">Simple2</Link>*/}
      {/*  <Link to="/overloaded">Overloaded</Link>*/}
      {/*</header>*/}

      <Switch>
        <Route path="/" component={Simple1Page} exact />
        <Route path="/simple2" component={Simple2Page} exact />
        <Route path="/overloaded" component={OverLoadedPage} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}

export default App;
