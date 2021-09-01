import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import FarmPool from './pages/FarmPool/FarmPool';
import Farm from './pages/FarmPool/Farm';
import Earn from './pages/Earn/Earn';
import Deposit from './pages/Earn/Deposit';
import Withdrawn from './pages/Earn/Withdrawn';
import Position from './pages/Position/Position';
import Remove from './pages/Position/Remove';
import NavbarMain from './pages/NavBar/NavBarMain';
import NavBarHome from './pages/NavBar/NavBarHome';
import NavBarSecondary from './pages/NavBar/NavBarSecondary';
import DropDown from './pages/Dropdown';

function App() {
  return (
    <Router>
      <DropDown />
      <Switch>
        <Route exact path='/'>
          <NavBarHome />
          <Home />
        </Route>
        <Route exact path='/farmpool'>
          <NavbarMain />
          <FarmPool />
        </Route>
        <Route exact path='/farmpool/farm'>
          <NavBarSecondary />
          <Farm />
        </Route>
        <Route exact path='/earn'>
          <NavbarMain />
          <Earn />
        </Route>
        <Route exact path='/earn/deposit'>
          <NavBarSecondary />
          <Deposit />
        </Route>
        <Route exact path='/earn/withdrawn'>
          <NavBarSecondary />
          <Withdrawn />
        </Route>
        <Route exact path='/position'>
          <NavbarMain />
          <Position />
        </Route>
        <Route exact path='/position/remove'>
          <NavBarSecondary />
          <Remove />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
