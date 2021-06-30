import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Layout from 'components/Layout';
import Characters from 'pages/Characters';
import NotFound from 'pages/NotFound';
import { paths } from 'utils/paths';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path={paths.characters} component={Characters} />
          <Route exact path="/">
            <Redirect to={paths.characters} />
          </Route>
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
