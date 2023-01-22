import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navigation from "./Shared/Navigation/Navigation";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Home/Login/Login";
import Footer from "./Shared/Footer/Footer";
// import PrivateRoute from "./Pages/Home/PrivateRoute/PrivateRoute";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          {/* <PrivateRoute path="/buynow/:id">
            <ServiceDetails></ServiceDetails>
          </PrivateRoute> */}
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
