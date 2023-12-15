import './styles/BirouriPage.css'
import {AllBtn, BirouriBtn, BucatariiBtn, DormitoareBtn, 
  CamereDeZiBtn, MailBtn, PhoneBtn, LocationBtn,
  Furniture1BtnBirouri,Furniture2BtnBirouri,Furniture3BtnBirouri,
  Furniture4BtnBirouri,Furniture5BtnBirouri,Furniture6BtnBirouri} from './Buttons';
  import AnimatedPage from './components/animations/AnimationPage';
  import { useEffect, useState } from 'react';
  import {OverlayGalleryStandard} from "./styles/gallery/OverlayGalleryStandard";
  import mainTextPicturePic from "./assets/officeMain.jpg";

const BirouriPage = () => {

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


  return (
    <AnimatedPage>
      <OverlayGalleryStandard isOpen={isOverlayGalleryStandardOpen} onClose={() => setIsOverlayGalleryStandardOpen(!isOverlayGalleryStandardOpen)}/>
    <div className='portofoliuBirouriDiv'>
       <img src={mainTextPicturePic} className='mainTextPicturePic'/>
      <div className="mainTextAndPictureBirouri">
        <div className="mainTextAndPictureTopSideBirouri">
          <h className="mainTextAndPictureTitleBirouri">Birouri</h>
          <p className="mainTextAndPictureTextBirouri">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br />
           ut labore et dolore magna aliqua. Tortor posuere ac ut consequat semper. Faucibus nisl tincidunt <br />
           eget nullam. Enim praesent elementum facilisis leo vel fringilla. Vitae ultricies leo integer <br />
            malesuada nunc. Porttitor lacus luctus accumsan tortor posuere. Scelerisque felis imperdiet <br />
             proin fermentum leo vel orci. Est ultricies integer quis auctor elit. Ultrices eros in cursus <br />
             turpis massa tincidunt dui. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus. <br />
              Nunc congue nisi vitae suscipit. Sagittis orci a scelerisque purus semper eget duis. <br /> <br />
          </p>
        </div>
        <div className="mainTextAndPictureBottomSideBirouri">
          <AllBtn />
          <BirouriBtn />
          <BucatariiBtn />
          <DormitoareBtn />
          <CamereDeZiBtn />
        </div>
      </div>

      <div className="furnitureTypesPortofoliuBirouri">
      <div className="furniture1OverlayBirouri overlayFR1 hiddenRight">
        <div className="furniture1Birouri">
          <div className="rightAngleFurniture1Birouri">
          <h1 className="furniture1TitleBirouri">Century Modern</h1>
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

     <div className="footer">
  <div className="footerBarLeftSide">
   <img src='/react.png' className='logo'></img>
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

export default BirouriPage