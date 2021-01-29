import logo from './logo.svg';
import './App.css';
import injectContext from './store/appContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './view/home';
import NotFound from "./view/notfound"
import Planets from './view/planets';
import Naves from './view/naves'; 
import Navbar from './component/navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route exact path="/naves" component={Naves}/>
        <Route exact path="/planets" component={Planets}/>
        <Route exact path="/" component={Home} />
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default injectContext(App);
