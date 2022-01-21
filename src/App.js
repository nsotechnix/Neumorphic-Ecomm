import Login from "./Login";
import Signup from "./Signup";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Homepage from "./Homepage";
import Products from "./Products";
import BoysProduct from "./BoysProduct";
import Checkout from "./Checkout";
import CheckoutAddress from "./CheckoutAddress";
import Footer from './Footer'
import Fashion from "./Fashion";
import Food from "./Food";
import Grocery from "./Grocery";
import Electronics from "./Electronics";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path='/'>
            <Homepage/>
            <Footer/>
          </Route>

          <Route exact path='/homepage'>
            <Homepage/>
            <Footer/>
          </Route>

          <Route exact path='/login'>
            <Login/>
          </Route>

          <Route exact path='/signup'>
            <Signup/>
          </Route>

          <Route exact path='/products'>
            <Products/>
          </Route>

          <Route exact path='/boysproduct'>
            <BoysProduct/>
          </Route>

          <Route exact path='/checkout'>
            <Checkout/>
          </Route>

          <Route exact path='/checkoutaddress'>
            <CheckoutAddress/>
          </Route>

          <Route exact path='/fashion'>
            <Fashion/>
          </Route>

          <Route exact path='/food'>
            <Food/>
          </Route>

          <Route exact path='/electronics'>
            <Electronics/>
          </Route>

          <Route exact path='/grocery'>
            <Grocery/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
