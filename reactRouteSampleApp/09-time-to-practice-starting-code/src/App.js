import { Route, Switch, Redirect } from "react-router-dom";

import AllQuates from "./pages/AllQuates";
import QuateDetail from "./pages/QuateDetail";
import NewQuate from "./pages/NewQuate";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quates" />
          </Route>
          <Route path="/quates" exact>
            <AllQuates />
          </Route>
          <Route path="/quates/:quiteId">
            <QuateDetail />
          </Route>
          <Route path="/new-quate">
            <NewQuate />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
