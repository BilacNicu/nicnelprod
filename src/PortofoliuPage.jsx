import './styles/PortofoliuPage.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PortofoliuPageAll from './PortofoliuPageAll';
import BirouriPage from './BirouriPage';
import BucatariiPage from './BucatariiPage';
import DormitoarePage from './DormitoarePage';
import CamereDeZiPage from './CamereDeZiPage';
import { useEffect } from 'react';

const PortofoliuPage = () => {


  return ( 
    <Router>
    <Switch>
        <Route exact path='/portofoliu'>
          <PortofoliuPageAll />
        </Route>
        <Route exact path="/portofoliu/birouri">
          <BirouriPage />
        </Route>
        <Route exact path="/portofoliu/bucatarii">
          <BucatariiPage />
        </Route>
        <Route exact path="/portofoliu/dormitoare">
          <DormitoarePage />
        </Route>
        <Route exact path="/portofoliu/camereDeZi">
          <CamereDeZiPage />
        </Route>
      </Switch>
    </Router>
  )
}


export default PortofoliuPage
