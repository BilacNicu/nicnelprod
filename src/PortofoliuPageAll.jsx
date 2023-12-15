import './styles/PortofoliuPageAll.css'
import logo from "../public/react.png";
import mainTextPicturePic from "./assets/portofoliu.webp";
import {OverlayGalleryStandard} from "./styles/gallery/OverlayGalleryStandard"
import {AllBtn, BirouriBtn, BucatariiBtn, DormitoareBtn,
   CamereDeZiBtn, MailBtn, PhoneBtn, LocationBtn,
   Furniture1BtnCamereDeZi, Furniture2BtnCamereDeZi,
   Furniture3BtnCamereDeZi, Furniture4BtnCamereDeZi,
   Furniture5BtnCamereDeZi, Furniture6BtnCamereDeZi,
   Furniture1BtnDormitoare, Furniture2BtnDormitoare,
   Furniture3BtnDormitoare, Furniture4BtnDormitoare,
   Furniture5BtnDormitoare, Furniture6BtnDormitoare,
   Furniture1BtnBucatarii, Furniture2BtnBucatarii,
   Furniture3BtnBucatarii, Furniture4BtnBucatarii,
   Furniture5BtnBucatarii, Furniture6BtnBucatarii,
   Furniture1BtnBirouri, Furniture2BtnBirouri,
   Furniture3BtnBirouri, Furniture4BtnBirouri,
   Furniture5BtnBirouri, Furniture6BtnBirouri
  } from './Buttons';
  import { useState, useEffect} from 'react';
import AnimatedPage from './components/animations/AnimationPage';


const PortofoliuPageAll = () => {  

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

  const[isOverlayGalleryStandardOpen, setIsOverlayGalleryStandardOpen] = useState(false);

  const handleOverlayGalleryStandardToggle = () => {
    setIsOverlayGalleryStandardOpen(!isOverlayGalleryStandardOpen);
  }

  useEffect(() => {

    if (isOverlayGalleryStandardOpen) {

      document.body.style.overflow = 'hidden';
    } else {

      document.body.style.overflow = 'visible';
    }


    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [isOverlayGalleryStandardOpen]);




  return (
    <AnimatedPage>
    <div className='portofoliuDiv'>
       <img src={mainTextPicturePic} className='mainTextPicturePic'/>
      <div className="mainTextAndPicture">
        <div className="mainTextAndPictureTopSide">
          <h className="mainTextAndPictureTitle">Proiectele noastre</h>
          <p className="mainTextAndPictureText">
          Așa cum ești tu, unic, așa va fi și casa ta! De exemplu, în ce privește mobilierul, <br />
          la Nic Nel poți pune în practică cele mai năstrușnice și nemaiîntâlnite idei, <br />
          ori unele de care te-ai lovit de-a lungul vieții, te-au marcat și ți le-ai dorit <br />
          și la tine acasă. Aici nu-ți vei mai face griji că nu găsești ceva la care ai visat <br />
          dintotdeauna, pentru că, prin mobilier la comandă, casa ta va arăta exact cum îți dorești <br />
          </p>
        </div>
        <div className="mainTextAndPictureBottomSide">
          <AllBtn />
          <BirouriBtn />
          <BucatariiBtn />
          <DormitoareBtn />
          <CamereDeZiBtn />
        </div>
      </div>
      <OverlayGalleryStandard isOpen={isOverlayGalleryStandardOpen} onClose={() => setIsOverlayGalleryStandardOpen(!isOverlayGalleryStandardOpen)}/>
      <div className="furnitureTypesAll1">
      
      <h className="titluPortofoliuBirouri">Birouri</h>

      <div className="furnitureTypesPortofoliuBirouriAll">
      
      <div className="furniture1OverlayBirouri overlayFR1 hiddenRight">
        <div className="furniture1Birouri">
          <div className="rightAngleFurniture1Birouri">
          <h1 className="furniture1TitleBirouri">Century</h1>
          <Furniture1BtnBirouri handleOverlayGalleryStandardToggle={handleOverlayGalleryStandardToggle}/>
        </div>
      </div>
      </div>

      <div className="furniture2OverlayBirouri overlayFR1 hiddenRight">
        <div className="furniture2Birouri">
          <div className="rightAngleFurniture2Birouri">
          <h1 className="furniture2TitleBirouri">High Class</h1>
          <Furniture2BtnBirouri handleOverlayGalleryStandardToggle={handleOverlayGalleryStandardToggle}/>
        </div>
      </div>
      </div>

      <div className="furniture3OverlayBirouri overlayFR1 hiddenRight">
        <div className="furniture3Birouri">
          <div className="rightAngleFurniture3Birouri">
          <h1 className="furniture3TitleBirouri">Art Deco</h1>
          <Furniture3BtnBirouri handleOverlayGalleryStandardToggle={handleOverlayGalleryStandardToggle}/>
        </div>
      </div>
      </div>
 
      <div className="furniture4OverlayBirouri overlayFR2 hiddenLeft">
        <div className="furniture4Birouri">
          <div className="rightAngleFurniture4Birouri">
          <h1 className="furniture4TitleBirouri">Mediterranean</h1>
          <Furniture4BtnBirouri handleOverlayGalleryStandardToggle={handleOverlayGalleryStandardToggle}/>
        </div>
      </div>
      </div>


      <div className="furniture5OverlayBirouri overlayFR2 hiddenLeft">
        <div className="furniture5Birouri">
          <div className="rightAngleFurniture5Birouri">
          <h1 className="furniture5TitleBirouri">Retro Futurism</h1>
          <Furniture5BtnBirouri handleOverlayGalleryStandardToggle={handleOverlayGalleryStandardToggle}/>
        </div>
      </div>
      </div>


      <div className="furniture6OverlayBirouri overlayFR2 hiddenLeft">
        <div className="furniture6Birouri">
          <div className="rightAngleFurniture6Birouri">
          <h1 className="furniture6TitleBirouri">Classic Colonial</h1>
          <Furniture6BtnBirouri handleOverlayGalleryStandardToggle={handleOverlayGalleryStandardToggle}/>
        </div>
      </div>
      </div>
  
   </div> 
   <h className="titluPortofoliuBucatarii">Bucatarii</h>
   <div className="furnitureTypesPortofoliuBucatariiAll">
      <div className="furniture1OverlayBucatarii overlayFR1 hiddenRight">
        <div className="furniture1Bucatarii">
          <div className="rightAngleFurniture1Bucatarii">
          <h1 className="furniture1TitleBucatarii">Nordic Chic</h1>
          <Furniture1BtnBucatarii handleOverlayGalleryStandardToggle={handleOverlayGalleryStandardToggle}/>
        </div>
      </div>
      </div>

      <div className="furniture2OverlayBucatarii overlayFR1 hiddenRight">
        <div className="furniture2Bucatarii">
          <div className="rightAngleFurniture2Bucatarii">
          <h1 className="furniture2TitleBucatarii">Urban Industrial</h1>
          <Furniture2BtnBucatarii handleOverlayGalleryStandardToggle={handleOverlayGalleryStandardToggle}/>
        </div>
      </div>
      </div>

      <div className="furniture3OverlayBucatarii overlayFR1 hiddenRight">
        <div className="furniture3Bucatarii">
          <div className="rightAngleFurniture3Bucatarii">
          <h1 className="furniture3TitleBucatarii">Renaissance</h1>
          <Furniture3BtnBucatarii handleOverlayGalleryStandardToggle={handleOverlayGalleryStandardToggle}/>
        </div>
      </div>
      </div>

      <div className="furniture4OverlayBucatarii overlayFR2 hiddenLeft">
        <div className="furniture4Bucatarii">
          <div className="rightAngleFurniture4Bucatarii">
          <h1 className="furniture4TitleBucatarii">Bohemian</h1>
          <Furniture4BtnBucatarii handleOverlayGalleryStandardToggle={handleOverlayGalleryStandardToggle}/>
        </div>
      </div>
      </div>


      <div className="furniture5OverlayBucatarii overlayFR2 hiddenLeft">
        <div className="furniture5Bucatarii">
          <div className="rightAngleFurniture5Bucatarii">
          <h1 className="furniture5TitleBucatarii">Coastal Retreat</h1>
          <Furniture5BtnBucatarii handleOverlayGalleryStandardToggle={handleOverlayGalleryStandardToggle}/>
        </div>
      </div>
      </div>


      <div className="furniture6OverlayBucatarii overlayFR2 hiddenLeft">  
        <div className="furniture6Bucatarii">
          <div className="rightAngleFurniture6Bucatarii">
          <h1 className="furniture6TitleBucatarii">Minimalist</h1>
          <Furniture6BtnBucatarii handleOverlayGalleryStandardToggle={handleOverlayGalleryStandardToggle}/>
        </div>
      </div>
      </div>
  
    </div> 
    </div>

    <div className="furnitureTypesAll2">

    <h className="titluPortofoliuDormitoare">Dormitoare</h>
    <div className="furnitureTypesPortofoliuDormitoareAll">

      <div className="furniture1OverlayDormitoare overlayFR1 hiddenRight">
        <div className="furniture1Dormitoare ">
          <div className="rightAngleFurniture1Dormitoare">
          <h1 className="furniture1TitleDormitoare">Fusion</h1>
          <Furniture1BtnDormitoare handleOverlayGalleryStandardToggle={handleOverlayGalleryStandardToggle}/>
        </div>
      </div>
      </div>

      <div className="furniture2OverlayDormitoare overlayFR1 hiddenRight">
        <div className="furniture2Dormitoare">
          <div className="rightAngleFurniture2Dormitoare">
          <h1 className="furniture2TitleDormitoare">Heritage</h1>
          <Furniture2BtnDormitoare handleOverlayGalleryStandardToggle={handleOverlayGalleryStandardToggle}/>
        </div>
      </div>
      </div>

      <div className="furniture3OverlayDormitoare overlayFR1 hiddenRight">
        <div className="furniture3Dormitoare">
          <div className="rightAngleFurniture3Dormitoare">
          <h1 className="furniture3TitleDormitoare">Global Nomad</h1>
          <Furniture3BtnDormitoare handleOverlayGalleryStandardToggle={handleOverlayGalleryStandardToggle}/>
        </div>
      </div>
      </div>

      <div className="furniture4OverlayDormitoare overlayFR2 hiddenLeft">
        <div className="furniture4Dormitoare">
          <div className="rightAngleFurniture4Dormitoare">
          <h1 className="furniture4TitleDormitoare">Chic Revival</h1>
          <Furniture4BtnDormitoare handleOverlayGalleryStandardToggle={handleOverlayGalleryStandardToggle}/>
        </div>
      </div>
      </div>

      <div className="furniture5OverlayDormitoare overlayFR2 hiddenLeft">
        <div className="furniture5Dormitoare">
          <div className="rightAngleFurniture5Dormitoare">
          <h1 className="furniture5TitleDormitoare">Industrial Loft</h1>
          <Furniture5BtnDormitoare handleOverlayGalleryStandardToggle={handleOverlayGalleryStandardToggle}/>
        </div>
      </div>
      </div>

      <div className="furniture6OverlayDormitoare overlayFR2 hiddenLeft">
        <div className="furniture6Dormitoare">
          <div className="rightAngleFurniture6Dormitoare">
          <h1 className="furniture6TitleDormitoare">Zen Harmony</h1>
          <Furniture6BtnDormitoare handleOverlayGalleryStandardToggle={handleOverlayGalleryStandardToggle}/>
        </div>
      </div>
      </div>
    </div>

    <h className="titluPortofoliuCamereDeZi">Camere de Zi</h>

    <div className="furnitureTypesPortofoliuCamereDeZiAll">
      <div className="furniture1OverlayCamereDeZi overlayFR1 hiddenRight">
        <div className="furniture1CamereDeZi">
          <div className="rightAngleFurniture1CamereDeZi">
          <h1 className="furniture1TitleCamereDeZi">Scandinavian</h1>
          <Furniture1BtnCamereDeZi handleOverlayGalleryStandardToggle={handleOverlayGalleryStandardToggle}/>
        </div>
      </div>
      </div>

      <div className="furniture2OverlayCamereDeZi overlayFR1 hiddenRight">
        <div className="furniture2CamereDeZi">
          <div className="rightAngleFurniture2CamereDeZi">
          <h1 className="furniture2TitleCamereDeZi">Victorian</h1>
          <Furniture2BtnCamereDeZi handleOverlayGalleryStandardToggle={handleOverlayGalleryStandardToggle}/>
        </div>
      </div>
      </div>

      <div className="furniture3OverlayCamereDeZi overlayFR1 hiddenRight">
        <div className="furniture3CamereDeZi">
          <div className="rightAngleFurniture3CamereDeZi">
          <h1 className="furniture3TitleCamereDeZi">Boho Glam</h1>
          <Furniture3BtnCamereDeZi handleOverlayGalleryStandardToggle={handleOverlayGalleryStandardToggle}/>
        </div>
      </div>
      </div>

      <div className="furniture4OverlayCamereDeZi overlayFR2 hiddenLeft">
        <div className="furniture4CamereDeZi">
          <div className="rightAngleFurniture4CamereDeZi">
          <h1 className="furniture4TitleCamereDeZi">Hollywood </h1>
          <Furniture4BtnCamereDeZi handleOverlayGalleryStandardToggle={handleOverlayGalleryStandardToggle}/>
        </div>
      </div>
      </div>


      <div className="furniture5OverlayCamereDeZi overlayFR2 hiddenLeft">
        <div className="furniture5CamereDeZi">
          <div className="rightAngleFurniture5CamereDeZi">
          <h1 className="furniture5TitleCamereDeZi">Retro Vintage</h1>
          <Furniture5BtnCamereDeZi handleOverlayGalleryStandardToggle={handleOverlayGalleryStandardToggle}/>
        </div>
      </div>
      </div>


      <div className="furniture6OverlayCamereDeZi overlayFR2 hiddenLeft">
        <div className="furniture6CamereDeZi">
          <div className="rightAngleFurniture6CamereDeZi">
          <h1 className="furniture6TitleCamereDeZi">Colonial</h1>
          <Furniture6BtnCamereDeZi handleOverlayGalleryStandardToggle={handleOverlayGalleryStandardToggle}/>
        </div>
      </div>
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

export default PortofoliuPageAll