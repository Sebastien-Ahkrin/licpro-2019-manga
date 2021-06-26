import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { get } from "../../actions";
import useApp, { AppProvider } from "../../context/useApp";
import List from "../List/List/List";

import NoMatch from "../NoMatch/NoMatch";

import "./App.css";

function Default() {
  const [state, dispatch] = useApp();

  useEffect(() => {
    async function fetchData() {
      const response = await get();

      if (response) {
        dispatch({
          type: "LOAD_EPISODES",
          payload: response.data,
        });
      }
    }

    fetchData();
  }, [dispatch]);

  return (
    <div className="Default">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <List episodes={state.episodes} />
          </div>
          <div className="col-md-4">
            <p>Form to edit an episode</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <AppProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Default} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </AppProvider>
    </div>
  );
}
