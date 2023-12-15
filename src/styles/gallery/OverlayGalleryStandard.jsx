import "../../styles/OverlayGalleryStandard.css";
import arrowLeft from "../../assets/arrowLeft.png";
import bucatarieImg1 from "../../assets/bucatarie.jpg";
import bucatarieImg2 from "../../assets/bucatarie2.jpg";
import bucatarieImg3 from "../../assets/bucatarie3.jpg";
import bucatarieImg4 from "../../assets/bucatarie4.jpg";
import React, { useState, useEffect } from 'react';

const images = [
    bucatarieImg1,
    bucatarieImg2,
    bucatarieImg3,
    bucatarieImg4
]

export function OverlayGalleryStandard({ isOpen, onClose, children }) {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleLeftArrowClick = () => {
        console.log("pressed Left");
        const newIndex = (currentImageIndex - 1 + images.length) % images.length;
        setCurrentImageIndex(newIndex);
      };
    
      const handleRightArrowClick = () => {
        console.log("pressed Right");
        const newIndex = (currentImageIndex + 1) % images.length;
        setCurrentImageIndex(newIndex);
      };

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
          <div className="overlayGS">
           
            <div className="overlayBgGS" onClick={onClose} />

              <div className={`overlayContainerGS ${isVisible ? 'active' : ''}`}
              style={ {backgroundImage: `url(${images[currentImageIndex]})`,
              backgroundSize: '100% 100%', 
              backgroundPosition: 'center', 
              backgroundRepeat: 'no-repeat' 
 
              }}>
                <div className="overlayControlsGS">
                <div className="counter">
                <p className="index">{currentImageIndex + 1}</p>
                <p className="total">/{images.length}</p>
              </div>
                   <button className="leftArrow" onClick={handleLeftArrowClick}></button>
                   <button className="rightArrow" onClick={handleRightArrowClick}></button>
                    </div>
                  {children}
                 
                  
                </div>
              </div>
            ) : null}
      </>
    );
  }