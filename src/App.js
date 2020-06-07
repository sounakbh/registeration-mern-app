import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import FetchUsers from "./components/fetchUsers.component";
import CreateUser from "./components/createUser.component";
import HomePage from "./components/homepage.component";
import Authenticate from "./components/auth.component";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <br/>
        <Route path="/" exact component={HomePage} />
        <Route path="/auth" exact component={Authenticate} />
        <Route path="/stats" exact component={FetchUsers} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
