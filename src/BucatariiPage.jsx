import './styles/BucatariiPage.css'
import {AllBtn, BirouriBtn, BucatariiBtn, DormitoareBtn,
   CamereDeZiBtn, MailBtn, PhoneBtn, LocationBtn,
   Furniture1BtnBucatarii, Furniture2BtnBucatarii,
   Furniture3BtnBucatarii, Furniture4BtnBucatarii,
   Furniture5BtnBucatarii, Furniture6BtnBucatarii} from './Buttons';
import AnimatedPage from './components/animations/AnimationPage';
import { useEffect, useState } from 'react';
import {OverlayGalleryStandard} from "./styles/gallery/OverlayGalleryStandard";
import mainTextPicturePicBucatarii from "./assets/bucatarie.jpg";

const BucatariiPage = () => {

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
    <div className='portofoliuBucatariiDiv'>
       <img src={mainTextPicturePicBucatarii} className='mainTextPicturePicBucatarii'/>
      <div className="mainTextAndPictureBucatarii">
        <div className="mainTextAndPictureTopSideBucatarii">
          <h className="mainTextAndPictureTitleBucatarii">Bucatarii</h>
          <p className="mainTextAndPictureTextBucatarii">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br />
           ut labore et dolore magna aliqua. Tortor posuere ac ut consequat semper. Faucibus nisl tincidunt <br />
           eget nullam. Enim praesent elementum facilisis leo vel fringilla. Vitae ultricies leo integer <br />
            malesuada nunc. Porttitor lacus luctus accumsan tortor posuere. Scelerisque felis imperdiet <br />
             proin fermentum leo vel orci. Est ultricies integer quis auctor elit. Ultrices eros in cursus <br />
             turpis massa tincidunt dui. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus. <br />
              Nunc congue nisi vitae suscipit. Sagittis orci a scelerisque purus semper eget duis. <br />
          </p>
        </div>
        <div className="mainTextAndPictureBottomSideBucatarii">
          <AllBtn />
          <BirouriBtn />
          <BucatariiBtn />
          <DormitoareBtn />
          <CamereDeZiBtn />
        </div>
      </div>

      <div className="furnitureTypesPortofoliuBucatarii">
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
          <div className="rightAngleFurniture6Bucatarii ">
          <h1 className="furniture6TitleBucatarii">Minimalist</h1>
          <Furniture6BtnBucatarii handleOverlayGalleryStandardToggle={handleOverlayGalleryStandardToggle}/>
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

export default BucatariiPage