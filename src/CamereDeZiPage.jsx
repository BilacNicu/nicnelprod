import './styles/CamereDeZiPage.css'
import {AllBtn, BirouriBtn, BucatariiBtn, DormitoareBtn,
   CamereDeZiBtn, MailBtn, PhoneBtn, LocationBtn,
   Furniture1BtnCamereDeZi,Furniture2BtnCamereDeZi,
   Furniture3BtnCamereDeZi,Furniture4BtnCamereDeZi,
   Furniture5BtnCamereDeZi,Furniture6BtnCamereDeZi} from './Buttons';
   import { useEffect, useState } from 'react';
   import {OverlayGalleryStandard} from "./styles/gallery/OverlayGalleryStandard";
   import AnimatedPage from './components/animations/AnimationPage';
import mainTextPicturePicCamereDeZi from "./assets/living.webp";

const CamereDeZiPage = () => {

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
    <div className='portofoliuCamereDeZiDiv'>
       <img src={mainTextPicturePicCamereDeZi} className='mainTextPicturePicCamereDeZi'/>
      <div className="mainTextAndPictureCamereDeZi">
        <div className="mainTextAndPictureTopSideCamereDeZi">
          <h className="mainTextAndPictureTitleCamereDeZi">Camere de Zi</h>
          <p className="mainTextAndPictureTextCamereDeZi">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br />
           ut labore et dolore magna aliqua. Tortor posuere ac ut consequat semper. Faucibus nisl tincidunt <br />
           eget nullam. Enim praesent elementum facilisis leo vel fringilla. Vitae ultricies leo integer <br />
            malesuada nunc. Porttitor lacus luctus accumsan tortor posuere. Scelerisque felis imperdiet <br />
             proin fermentum leo vel orci. Est ultricies integer quis auctor elit. Ultrices eros in cursus <br />
             turpis massa tincidunt dui. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus. <br />
              Nunc congue nisi vitae suscipit. Sagittis orci a scelerisque purus semper eget duis. <br /> <br />
          </p>
        </div>
        <div className="mainTextAndPictureBottomSideCamereDeZi">
          <AllBtn />
          <BirouriBtn />
          <BucatariiBtn />
          <DormitoareBtn />
          <CamereDeZiBtn />
        </div>
      </div>

      <div className="furnitureTypesPortofoliuCamereDeZi">
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

export default CamereDeZiPage