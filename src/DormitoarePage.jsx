import './styles/DormitoarePage.css'
import {AllBtn, BirouriBtn, BucatariiBtn, DormitoareBtn,
   CamereDeZiBtn, MailBtn, PhoneBtn, LocationBtn,
   Furniture1BtnDormitoare,Furniture2BtnDormitoare,
   Furniture3BtnDormitoare,Furniture4BtnDormitoare,
   Furniture5BtnDormitoare,Furniture6BtnDormitoare} from './Buttons';
import AnimatedPage from './components/animations/AnimationPage';
import { useEffect, useState } from 'react';
import {OverlayGalleryStandard} from "./styles/gallery/OverlayGalleryStandard";
import logo from "../public/react.png";
import mainTextPicturePicDormitoare from "./assets/dormitor.jpg";

const DormitoarePage = () => {

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
    <div className='portofoliuDormitoareDiv'>
       <img src={mainTextPicturePicDormitoare} className='mainTextPicturePicDormitoare'/>
      <div className="mainTextAndPictureDormitoare">
        <div className="mainTextAndPictureTopSideDormitoare">
          <h className="mainTextAndPictureTitleDormitoare">Dormitoare</h>
          <p className="mainTextAndPictureTextDormitoare">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br />
           ut labore et dolore magna aliqua. Tortor posuere ac ut consequat semper. Faucibus nisl tincidunt <br />
           eget nullam. Enim praesent elementum facilisis leo vel fringilla. Vitae ultricies leo integer <br />
            malesuada nunc. Porttitor lacus luctus accumsan tortor posuere. Scelerisque felis imperdiet <br />
             proin fermentum leo vel orci. Est ultricies integer quis auctor elit. Ultrices eros in cursus <br />
             turpis massa tincidunt dui. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus. <br />
              Nunc congue nisi vitae suscipit. Sagittis orci a scelerisque purus semper eget duis. <br />
          </p>
        </div>
        <div className="mainTextAndPictureBottomSideDormitoare">
          <AllBtn />
          <BirouriBtn />
          <BucatariiBtn />
          <DormitoareBtn />
          <CamereDeZiBtn />
        </div>
      </div>

      <div className="furnitureTypesPortofoliuDormitoare">
      <div className="furniture1OverlayDormitoare overlayFR1 hiddenRight">
        <div className="furniture1Dormitoare">
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

export default DormitoarePage