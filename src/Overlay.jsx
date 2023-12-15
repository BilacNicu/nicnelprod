import React, { useEffect, useState } from 'react';
import "./styles/Overlay.css";
import {TrimiteCotatieBtn} from "./Buttons";
import AnimatedPage from "./components/animations/AnimationPage";

export function Overlay({ isOpen, onClose, children }) {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setIsVisible(true);
      }, 100);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);


    return(
      <>
        {isOpen ? (
          <div className="overlay">
            <div className="overlayBg" onClick={onClose} />
              <div className={`overlayContainer ${isVisible ? 'visible' : ''}`}>
                <div className="overlayControls">
                <h className="titluCotatie">Solicitati o cotatie</h>
                  <div className="overlayClose" 
                  type="button" 
                  onClick={onClose}
                  >&times;</div>
                  
                  </div>
                  {children}
                 
                  <div className="topDivCotatie">
                    <div className="numeCotatieDiv">
                       <input id="numeCotatie" type="text" className="numeCotatie" />
                       <label htmlFor="numeCotatie" className="numeCotatieLabel">Nume</label>
                    </div>
                    <div className="prenumeCotatieDiv">
                       <input id="prenumeCotatie" type="text" className="prenumeCotatie" />
                       <label htmlFor="prenumeCotatie" className="prenumeCotatieLabel">Prenume</label>
                    </div>
                    
                  </div>
                  <div className="midDivCotatie">
                    <div className="numarTelefonCotatieDiv">
                       <input id="numarTelefonCotatie" type="tel" className="numarTelefonCotatie" />
                       <label htmlFor="numarTelefonCotatie" className="numarTelefonCotatieLabel">Numar de Telefon</label>
                    </div>
                    <div className="emailCotatieDiv">
                       <input id="mailCotatie" type="email" className="mailCotatie" />
                       <label htmlFor="mailCotatie" className="mailCotatieLabel">Email</label>
                    </div>
                  </div>
                  <div className="mesajCotatieDiv">
                        <textarea id="mesajCotatieInput" type="text" className="mesajCotatieInput" />
                        <label htmlFor="mesajCotatieInput" className="mesajCotatieLabel">Mesaj</label>
                    </div>
                    <div className="lowerCotatieDiv">
                        <input type="checkbox" className="politicaDeConfidentialitateCotatie" />
                        <p className="acordPoliticaDeConfidentialitate">Sunt de acord cu Termenii si Conditiile</p>
                    </div>
                    <div className="lowestCotatieDiv">
                      <TrimiteCotatieBtn />
                    </div>
                </div>
              </div>
            ) : null}
      </>
    );
  }