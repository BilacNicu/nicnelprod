import React, { useState } from 'react';
import './styles/ContactPage.css'
import {TrimiteIntalnireBtn, LocationBtn, MailBtn, PhoneBtn} from "../src/Buttons";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import AnimatedPage from './components/animations/AnimationPage';
import logo from "../public/react.png";
import bgContact from "./assets/bgContact.png";

const ContactPage = () => {

  const [selectedDate, setSelectedDate] = useState(null);
  return ( 
    <AnimatedPage>
     <div className="contactPageDiv">
      <div className="bgcontainer">
        <img src={bgContact} alt="" className="bgContact" />
        <div className="footer footerContact">
  <div className="footerBarLeftSide">
   <img src={logo} className='logo'></img>
   <p className="copyright">NIC NEL PROD © Toate Drepturile Rezervate</p>
  </div>
  <div className="footerBarRightSide">
    <MailBtn />
    <PhoneBtn />
    <LocationBtn />
  </div>
</div>
      </div>
      <div className="intalnireSiContactDiv">
        <div className="intalnireDiv">
          <div className="topIntalnireDiv">
            <h1 className='titluIntalnire'>Programeaza o intalnire</h1>
          </div>
          <div className="formIntalnire">
            <div className="formIntalnireLeftSide">

              <div className="inputEmailDiv">
              <input type="text" className='inputNume' placeholder='Nume'/>
              </div>
              
              <div className="inputEmailDiv">
              <input type="text" className='inputEmail' placeholder='Adresa Email'/>
              </div>
              
            </div>
            <div className="formIntalnireRightSide">
              <div className="inputPrenumeDiv">
                <input type="text" className='inputPrenume' placeholder='Prenume'/>
              </div>
            <div className="inputTelefonDiv">
            <input type="text" className='inputTelefon' placeholder='Numar Telefon'/>
            </div>
            
            </div>
          </div>

          <div className="formIntalnireMidSide"> <DatePicker
             className='datePicker'
             selected={selectedDate}
             onChange={date => setSelectedDate(date)}
             showTimeSelect
             timeFormat='HH:mm'
             timeIntervals={15}
             timeCaption='time'
             dateFormat={'MMMM d, yyyy h:mm aa'}
              minDate={new Date()} filterDate={date => date.getDay() != 6 && date.getDay() != 0}
              placeholderText='Alege data si ora'/>
          </div>

          <div className="formIntalnireBottomSide">
            <div className="politicaDeConfidentialitateDiv">
              <div className="politicaDeConfidentialitateDivLeftSide">
                <input type="checkbox" className="checkboxPoliticaConfidentialitate" />
                <p className="politicaDeConfidentialitateText">Sunt de acord cu Politica de Confidentialitate</p>
              </div>
              <div className="politicaDeConfidentialitateDivRightSide">
              <TrimiteIntalnireBtn />
              </div>
            
            </div>  
          </div>

        </div>
      </div>
      <div className="contactDiv">
        <h className="contactTitle">Contacteaza-ne</h>
        <div className="atelier">
          <a className="locatieText" href="https://www.google.com/maps/place/46%C2%B035'42.3%22N+24%C2%B031'16.0%22E/@46.595086,24.5204583,154m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d46.595086!4d24.521102?entry=ttu" target="_blank">str. Bărdești 547566</a>
        </div>
        <div className="nrTelefon">
          <a className="nrTelefonText" href="tel:+40744811687">+40 744 811 687</a>
        </div>
        <div className="mail">
          <a className="contactMail" href="mailto:nicubilac@yahoo.com">info@nicnelprod.com</a>
        </div>
      </div>
     </div>

     </AnimatedPage>
  )
}

export default ContactPage
