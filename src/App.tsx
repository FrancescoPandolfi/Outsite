import {Route, Switch} from "react-router-dom";
import BookNow from "./pages/BookNow";
import Search from "./pages/Search";

const App = () => {
  return (
    <main>
      <Switch>
      <Route path="/search/:id">
        <Search />
      </Route>
      <Route path="/">
        <BookNow />
      </Route>
    </Switch>
    </main>
  );
}

export default App;
