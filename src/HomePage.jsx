import './styles/HomePage.css'
import backgroundVideo from '../src/assets/room3.mp4';
import {ColectieBtn, ColectieBtn2, DespreNoiBtn, MailBtn, PhoneBtn, LocationBtn, ColectieBucatariiBtn, ColectieBDormitoareBtn, ColectieCamereDeZiBtn, ColectieBirouriBtn} from '../src/Buttons';
import AnimatedPage from './components/animations/AnimationPage';
import React, { useEffect } from 'react';
import logo from "../public/react.png";

const HomePage = () => {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    }, {
      root: null, 
      threshold: 0.2
    });

    const hiddenElementsRight = document.querySelectorAll('.hiddenRight');
    const hiddenElementsLeft = document.querySelectorAll('.hiddenLeft');
    hiddenElementsRight.forEach((el) => {
      observer.observe(el);
      el.classList.add('hiddenRight');
    });
    hiddenElementsLeft.forEach((el) => {
      observer.observe(el);
      el.classList.add('hiddenLeft');
    });


    return () => {
      hiddenElementsRight.forEach((el) => observer.unobserve(el));
      hiddenElementsLeft.forEach((el) => observer.unobserve(el));
    };
  }, []);



  return (
    <AnimatedPage>
   <div className="homeDiv">
    <div class="titleAndVideo">
    <div className="writing">
      <h1 className="titlu">Excelență prin meșteșug</h1>
      <h2 className="textPrincipal1">Creează-ți spațiul de vis</h2>
      <h2 className="textPrincipal2">cu mobilierul nostru unic.</h2>
    </div>
    <div className="videoContainer">
    <video className="backgroundVideo" autoPlay muted loop src={backgroundVideo} />
    </div>
    </div>
    <div className="startInfo">
      <div className="startInfoLeftSide">

      </div>
      <div className="startInfoRightSide hiddenRight">
      <h1 className='startTitle'>Lux & Confort</h1>
      <p className='startText'>La Nic Nel, ținem cont de dorințele tale, promițând un design <br />
  interior personalizat și mobilier de lux personalizat pentru casa ta, biroul tău sau <br />
  orice alt spațiu special care are nevoie de un design profesional, de neegalat. <br />
  Scopul nostru este să te facem să te simți confortabil și să-ți îmbunătățim stilul <br />
  de viață în orice spațiu în care fie locuiești, fie petreci o bună parte a timpului tău. <br />
  Tocmai de aceea, știm că ideea de confort vine în forme personalizate și subiective, <br />
  așa că îți punem la dispoziție o varietate de materiale și finisaje de lux, cu suprafețe <br />
  și stiluri sofisticate, realizate manual, cu multă pricepere și pasiune.
   </p>
    <ColectieBtn /> 
      </div>
    </div>
    <div className="furnitureTypes">
  <div className="bucatariiOverlay overlayHome hiddenLeft">
    <div className="bucatarii">
    <div className="rightAngleBucatarii">
      <h1 className="bucatariiTitle">Bucatarii</h1>
      <div className="colectieBucatariiBtnDiv">
      <ColectieBucatariiBtn />
      </div>
    </div>
    </div>
  </div>

  <div className="dormitoareOverlay overlayHome hiddenLeft">
    <div className="dormitoare">
    <div className="rightAngleDormitoare">
     <h1 className="dormitoareTitle">Dormitoare</h1>
      <div className="colectieDormitoareBtnDiv">
        <ColectieBDormitoareBtn />
      </div> 
    </div>
    </div>
    
  </div>

  <div className="camereDeZiOverlay overlayHome hiddenLeft">
    <div className="camereDeZi">
    <div className="rightAngleCamereDeZi">
    <h1 className="camereDeZiTitle">Camere de Zi</h1>
    <div className="colectieCamereDeZiBtnDiv">
      <ColectieCamereDeZiBtn />
    </div>
    </div>
    </div>
   
  </div>

  <div className="birouriSiComercialeOverlay overlayHome hiddenLeft">
    <div className="birouriSiComerciale">
      <div className="rightAngleBsiC">
      <h1 className="BsiCTitle">Birouri</h1>
      <div className="colectieBirouriBtnDiv">
        <ColectieBirouriBtn />
      </div>
      </div>
      </div>
    </div>

</div>
  <div className="secondText">
    <div className="leftSideSTxt hiddenLeft">
    <p className="startSText">
    Așa cum ești tu, unic, așa va fi și casa ta! De exemplu, în ce privește <br />
    mobilierul, la ZEBRANO poți pune în practică cele mai năstrușnice și <br />
    nemaiîntâlnite idei, ori unele de care te-ai lovit de-a lungul vieții, <br />
     te-au marcat și ți le-ai dorit și la tine acasă. Aici nu-ți vei mai <br />
     face griji că nu găsești ceva la care ai visat dintotdeauna, pentru că, <br />
     prin mobilier la comandă, casa ta va arăta exact cum îți dorești! <br />
    </p>
    <ColectieBtn2 />
    </div>
    <div className="rightSideSTxt">
         
    </div>
  </div>

 <div className="tataLucrandDiv">
  <div className="tataLucrandOverlay">
    <div className="tataLucrand">
      <h className="tataLucrandTitle">Calitate din 1994</h>
      <p className="tataLucrandText">
      Cu un design perfect, mobilierul clasic, avangardist și modern marca Nic Nel este <br />
       expus în 40 de magazine concept din țară și din străinătate, spre încântarea celor care <br />
        sunt pasionați de calitate și de rafinament. Brandul se remarcă, deci, în mod sigur, <br />
        prin finisaje de lux.
      </p>
      <DespreNoiBtn />
    </div>
  </div>
  </div>

<div className="footer">
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
</AnimatedPage>
  )
}

export default HomePage
