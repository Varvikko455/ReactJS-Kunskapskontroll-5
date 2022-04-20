import {Route, Switch} from 'react-router-dom'; 
import About from './components/About/about';
import Cart from './components/Cart/cart';
import Nav from './components/Nav/nav';
import Menu from './components/Menu/menu'; 
import Landing from './components/Landing/landing'; 
import Status from './components/Status/status';
import './App.css';

function App() {
  return(
     <Switch>
        <Route path ="/" component ={Landing} exact />
        <Route path ="/menu" component ={Menu} />
        <Route path="/nav" component ={Nav} />
        <Route path="/about" component={About} />
        <Route path="/cart" component={Cart} />
        <Route path="/status" component={Status} />
    </Switch>
  );
}

export default App;
