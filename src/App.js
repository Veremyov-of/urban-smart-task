import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//components
import Form from "./components/Form";
import Item from './components/Item';

function App() {
  const users = useSelector(state => state.info.Users);
  return (
    <Router>
          <Switch>
            <Route exact path="/">
              <Form />
            </Route>
            {users.map(item => 
                <Route path={`/${item.login}`} key={item.id}>
                  <Item  item={item} />
                </Route>
            )}
          </Switch>
    </Router>
  );
}

export default App;
