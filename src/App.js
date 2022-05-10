import './App.css';
import { Router } from 'react-router';
import { Route } from 'react-router-dom';
import ClassComponent from './ClassComponent';
import FunctionalComp from './FunctionalComponent';
import Home from './Home'
import './App.css';
import { createBrowserHistory as createHistory } from 'history';

const history = createHistory();

function App() {
  return (
    <div className="App">
      <Router history={history} >
        <Route
          exact
          path="/class-comp"
          render={(props) => <ClassComponent {...props} />}
        />
        <Route
          exact
          path="/functional-comp"
          component={FunctionalComp}
        />
        <Route
          exact
          path="/"
          component={Home}
        />
      </Router>
    </div>
  );
}

export default App;
