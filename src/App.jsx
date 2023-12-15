import './styles/App.css'
import { BrowserRouter as Router, Route, Switch, useLocation  } from 'react-router-dom';
import nicnelLogo from './assets/logo.PNG';
import {HomeBtn, ContactBtn, DropDownButtonPortofoliu, DropDownButtonInformatii, CotatieBtn} from './Buttons';
import HomePage from './HomePage';
import PortofoliuPage from './PortofoliuPage';
import ContactPage from './ContactPage';
import InformatiiPage from './InformatiiPage';
import CotatiePage from './CotatiePage';
import { Overlay } from './Overlay';
import { useState, useEffect, useRef} from 'react';
import './styles/Buttons.css';
import { AnimatePresence } from 'framer-motion';

function App() {

  const[isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleOverlayToggle = () => {
    setIsOverlayOpen(!isOverlayOpen);
  }


  useEffect(() => {

    if (isOverlayOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [isOverlayOpen]);



  return ( 
    <Router >
    <div className='startDiv'>
    <div className='topDiv'>
      <div className="topdivLeftSide">
      <img src={nicnelLogo} alt='NicNel Logo' className='logo'/>
      </div>
      <div className="topDivRightSide">
      <HomeBtn />
      <DropDownButtonPortofoliu />
      <DropDownButtonInformatii />
      <ContactBtn />
      <CotatieBtn handleOverlayToggle={handleOverlayToggle} />
      </div>
    </div>

    <Overlay isOpen={isOverlayOpen} onClose={() => setIsOverlayOpen(!isOverlayOpen)}>
         
    </Overlay>

    <div className='content'>
    <AnimatePresence>
      <Switch>
        <Route exact path='/nicnelprod/'>
          <HomePage />
        </Route>
        <Route path='/portofoliu'>
          <PortofoliuPage />
        </Route>
        <Route path='/contact'>
          <ContactPage />
        </Route>
        <Route path='/informatii'>
           <InformatiiPage />
        </Route>
        <Route path='/cotatie'>
           <CotatiePage />
        </Route>
      </Switch>
      </AnimatePresence>
    </div>
    
  </div> 
  </Router> 

  )
}

export default App
