import React, { useState } from 'react';
import './styles/Buttons.css'; 
import { Link } from 'react-router-dom';
import App from "./App";

///+++++++++++++++++++++++++++++++++++++++++++++///

const ScrollToPoliticaDeCalitateButtonWithLink = ({ to, children, className }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 1000,
      behavior: 'smooth' 
    });


  };
  return (
    <Link to={to} onClick={scrollToTop}>
    <button className={className}>{children}</button>
  </Link>
  );
};

const ScrollToTopButtonWithLink = ({ to, children, className }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  return (
    <Link to={to} onClick={scrollToTop}>
      <button className={className}>{children}</button>
    </Link>
  );
};


export const HomeBtn = () => {
    return (
      <ScrollToTopButtonWithLink to="/nicnelprod/" className="homeBtn">
      Acasa
    </ScrollToTopButtonWithLink>
      
    );
  }

///+++++++++++++++++++++++++++++++++++++++++++++///

export function DropDownButtonPortofoliu() {
  const [isHovered, setIsHovered] = useState(false); 

  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };


  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="dropdownPortofoliu" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

      <ScrollToTopButtonWithLink to="/portofoliu" className="dropdown-buttonPortofoliu">
      Portofoliu
    </ScrollToTopButtonWithLink>
      {isHovered && (
        <div className="dropdown-contentPortofoliu">
           <ul>
            <li className='firstItem'><ListPortofoliuBirouriBtn /></li>
            <li><ListPortofoliuBucatariiBtn /></li>
            <li><ListPortofoliuDormitoareBtn /></li>
            <li><ListPortofoliuCamereDeZiBtn /></li>
          </ul>
        </div>
      )}
    </div>

  );
}

///+++++++++++++++++++++++++++++++++++++++++++++///

export function DropDownButtonInformatii() {
    const [isHovered, setIsHovered] = useState(false); // State to track hover state
  
    // Function to handle mouse enter
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    // Function to handle mouse leave
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    return (
      <div className="dropdownInformatii" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ScrollToTopButtonWithLink to="/informatii" className="dropdown-buttonInformatii">
        Informatii
    </ScrollToTopButtonWithLink>
        {isHovered && (
          <div className="dropdown-contentInformatii">
             <ul>
              <li className='firstItem'><ListInformatiiDespreNoiBtn /></li>
              <li><ListInformatiiPoliticaCalitatiiBtn /></li>
            </ul>
          </div>
        )}
      </div>
    );
  }

///+++++++++++++++++++++++++++++++++++++++++++++///

export const CotatieBtn = ({handleOverlayToggle}) => {

    return ( 
       <button className="cotatieBtn" onClick={handleOverlayToggle} >Solicitati o cotatie</button>
       
    )
}

///+++++++++++++++++++++++++++++++++++++++++++++///

export const ContactBtn = () => {
    return (
      <ScrollToTopButtonWithLink to="/contact" className="contactBtn">
      Contact
  </ScrollToTopButtonWithLink>
      
    );
  }

///+++++++++++++++++++++++++++++++++++++++++++++///

export const ColectieBtn = () => {

    return (
      <ScrollToTopButtonWithLink to="/portofoliu" className="toProjectsBtn">
      Vedeti lucrarile noastre
    </ScrollToTopButtonWithLink>
    )
  }

///+++++++++++++++++++++++++++++++++++++++++++++///

  export const ColectieBtn2 = () => {

    return ( 
      <ScrollToTopButtonWithLink to="/portofoliu" className="toProjectsBtn2">
      Vedeti lucrarile noastre
    </ScrollToTopButtonWithLink>
    )
  }

///+++++++++++++++++++++++++++++++++++++++++++++///

  export const DespreNoiBtn = () => {
     return(
      <ScrollToTopButtonWithLink to="/informatii" className="despreNoiBtn">
      Cititi mai multe despre noi
    </ScrollToTopButtonWithLink>
     )
  }

///+++++++++++++++++++++++++++++++++++++++++++++///

  export const MailBtn = () => {
    return(
     <a className="mailBtn" href="mailto:nicubilac@yahoo.com">info@nicnelprod.com</a>
    )
  }

///+++++++++++++++++++++++++++++++++++++++++++++///

  export const PhoneBtn = () => {
    return(
      <a className="phoneBtn" href="tel:+40744811687">+40 744 811 687</a>
    )
  }

///+++++++++++++++++++++++++++++++++++++++++++++///

  export const LocationBtn = () => {
    return(
      <a className="locationBtn" href="https://www.google.com/maps/place/46%C2%B035'42.3%22N+24%C2%B031'16.0%22E/@46.595086,24.5204583,154m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d46.595086!4d24.521102?entry=ttu" target="_blank">str. Bărdești 547566</a>
    )
  }

///+++++++++++++++++++++++++++++++++++++++++++++///

export const AllBtn = () => {
  return(
    <Link to='/portofoliu'><button className="allBtn">Toate</button></Link>
  )
}

///+++++++++++++++++++++++++++++++++++++++++++++///

export const BirouriBtn = () => {
  return(
    <ScrollToTopButtonWithLink to="/portofoliu/birouri" className="birouriBtn">
    Birouri
  </ScrollToTopButtonWithLink>
  )
}

///+++++++++++++++++++++++++++++++++++++++++++++///

export const BucatariiBtn = () => {
  return(
    <Link to="/portofoliu/bucatarii"><button className="bucatariiBtn">Bucatarii</button></Link>
  )
}

///+++++++++++++++++++++++++++++++++++++++++++++///

export const DormitoareBtn = () => {
  return(
    <Link to="/portofoliu/dormitoare"><button className="dormitoareBtn">Dormitoare</button></Link>
  )
}

///+++++++++++++++++++++++++++++++++++++++++++++///

export const CamereDeZiBtn = () => {
  return(
    <Link to="/portofoliu/camereDeZi"><button className="camereDeZiBtn">Camere de Zi</button></Link>
  )
}

///+++++++++++++++++++++++++++++++++++++++++++++///


export const ColectieBucatariiBtn = () => {
  return (
    <ScrollToTopButtonWithLink to="/portofoliu/bucatarii" className="colectieBucatariiBtn">
      Vezi Lucrari
    </ScrollToTopButtonWithLink>
  );
};

///+++++++++++++++++++++++++++++++++++++++++++++///

export const ColectieBDormitoareBtn = () => {
  return (
    <ScrollToTopButtonWithLink to="/portofoliu/dormitoare" className="colectieDormitoareBtn">
      Vezi Lucrari
    </ScrollToTopButtonWithLink>
  );
};

///+++++++++++++++++++++++++++++++++++++++++++++///

export const ColectieCamereDeZiBtn = () => {
  return (
    <ScrollToTopButtonWithLink to="/portofoliu/camereDeZi" className="colectieCamereDeZiBtn">
      Vezi Lucrari
    </ScrollToTopButtonWithLink>
  );
};

///+++++++++++++++++++++++++++++++++++++++++++++///

export const ColectieBirouriBtn = () => {
  return (
    <ScrollToTopButtonWithLink to="/portofoliu/birouri" className="colectieBirouriBtn">
      Vezi Lucrari
    </ScrollToTopButtonWithLink>
  );
};

///+++++++++++++++++++++++++++++++++++++++++++++///

export const TrimiteIntalnireBtn = () => {
  return (
    <button className="trimiteIntalnireBtn">Trimite</button>
  );
};

///+++++++++++++++++++++++++++++++++++++++++++++///

export const ListInformatiiDespreNoiBtn = () => {
  return (
    <ScrollToTopButtonWithLink to="/informatii" className="ListInformatiiDespreNoiBtn">
      Despre Noi
    </ScrollToTopButtonWithLink>
  );
};

///+++++++++++++++++++++++++++++++++++++++++++++///

export const ListInformatiiPoliticaCalitatiiBtn = () => {
  return (
    <ScrollToPoliticaDeCalitateButtonWithLink to="/informatii" className="ListInformatiiPoliticaCalitatiiBtn">
    Politica Calitatii
  </ScrollToPoliticaDeCalitateButtonWithLink>
  );
};

///+++++++++++++++++++++++++++++++++++++++++++++///

export const ListPortofoliuBirouriBtn = () => {
  return (
    <ScrollToTopButtonWithLink to="/portofoliu/birouri" className="ListPortofoliuBirouriBtn">
    Birouri
  </ScrollToTopButtonWithLink>
  );
};

///+++++++++++++++++++++++++++++++++++++++++++++///

export const ListPortofoliuBucatariiBtn = () => {
  return (
    <ScrollToTopButtonWithLink to="/portofoliu/bucatarii" className="ListPortofoliuBucatariiBtn">
    Bucatarii
  </ScrollToTopButtonWithLink>
  );
};

///+++++++++++++++++++++++++++++++++++++++++++++///

export const ListPortofoliuDormitoareBtn = () => {
  return (
    <ScrollToTopButtonWithLink to="/portofoliu/dormitoare" className="ListPortofoliuDormitoareBtn">
    Dormitoare
  </ScrollToTopButtonWithLink>
  );
};

///+++++++++++++++++++++++++++++++++++++++++++++///

export const ListPortofoliuCamereDeZiBtn = () => {
  return (
    <ScrollToTopButtonWithLink to="/portofoliu/camereDeZi" className="ListPortofoliuCamereDeZiBtn">
    Camere de Zi
  </ScrollToTopButtonWithLink>
  );
};

///+++++++++++++++++++++++++++++++++++++++++++++///

export const Furniture1BtnCamereDeZi = ({handleOverlayGalleryStandardToggle}) => {
  return (
    <button className="furniture1BtnCamereDeZi furnitureBtn" onClick={handleOverlayGalleryStandardToggle}>
    Vezi proiect
  </button>
  );
};

///+++++++++++++++++++++++++++++++++++++++++++++///

export const Furniture2BtnCamereDeZi = ({handleOverlayGalleryStandardToggle}) => {
  return (
    <button className="furniture2BtnCamereDeZi furnitureBtn" onClick={handleOverlayGalleryStandardToggle}>
    Vezi proiect
  </button>
  );
};

///+++++++++++++++++++++++++++++++++++++++++++++///

export const Furniture3BtnCamereDeZi = ({handleOverlayGalleryStandardToggle}) => {
  return (
    <button className="furniture3BtnCamereDeZi furnitureBtn" onClick={handleOverlayGalleryStandardToggle}>
    Vezi proiect
  </button>
  );
};

///+++++++++++++++++++++++++++++++++++++++++++++///

export const Furniture4BtnCamereDeZi = ({handleOverlayGalleryStandardToggle}) => {
  return (
    <button className="furniture4BtnCamereDeZi furnitureBtn" onClick={handleOverlayGalleryStandardToggle}>
    Vezi proiect
  </button>
  );
};

///+++++++++++++++++++++++++++++++++++++++++++++///

export const Furniture5BtnCamereDeZi = ({handleOverlayGalleryStandardToggle}) => {
  return (
    <button className="furniture5BtnCamereDeZi furnitureBtn" onClick={handleOverlayGalleryStandardToggle}>
    Vezi proiect
  </button>
  );
};

///++++++++++++++   +++++++++++++++++++++++++++++++///

export const Furniture6BtnCamereDeZi = ({handleOverlayGalleryStandardToggle}) => {
  return (
    <button className="furniture6BtnCamereDeZi furnitureBtn" onClick={handleOverlayGalleryStandardToggle}>
    Vezi proiect
  </button>
  );
};

///+++++++++++++++++++++++++++++++++++++++++++++///

export const Furniture1BtnBirouri = ({handleOverlayGalleryStandardToggle}) => {
  return (
    <button className="furniture1BtnBirouri furnitureBtn" onClick={handleOverlayGalleryStandardToggle}>
    Vezi proiect
  </button>
  );
};

///+++++++++++++++++++++++++++++++++++++++++++++///

export const Furniture2BtnBirouri = ({handleOverlayGalleryStandardToggle}) => {
  return (
    <button className="furniture2BtnBirouri furnitureBtn" onClick={handleOverlayGalleryStandardToggle}>
    Vezi proiect
  </button>
  );
};

///+++++++++++++++++++++++++++++++++++++++++++++///

export const Furniture3BtnBirouri = ({handleOverlayGalleryStandardToggle}) => {
  return (
    <button className="furniture3BtnBirouri furnitureBtn" onClick={handleOverlayGalleryStandardToggle}>
    Vezi proiect
  </button>
  );
};

///+++++++++++++++++++++++++++++++++++++++++++++///

export const Furniture4BtnBirouri = ({handleOverlayGalleryStandardToggle}) => {
  return (
    <button className="furniture4BtnBirouri furnitureBtn" onClick={handleOverlayGalleryStandardToggle}>
    Vezi proiect
  </button>
  );
};

///+++++++++++++++++++++++++++++++++++++++++++++///

export const Furniture5BtnBirouri = ({handleOverlayGalleryStandardToggle}) => {
  return (
    <button className="furniture5BtnBirouri furnitureBtn" onClick={handleOverlayGalleryStandardToggle}> 
    Vezi proiect
  </button>
  );
};

///+++++++++++++++++++++++++++++++++++++++++++++///

export const Furniture6BtnBirouri = ({handleOverlayGalleryStandardToggle}) => {
  return (
    <button className="furniture6BtnBirouri furnitureBtn" onClick={handleOverlayGalleryStandardToggle}>
    Vezi proiect
  </button>
  );
};

///+++++++++++++++++++++++++++++++++++++++++++++///

export const Furniture1BtnBucatarii = ({handleOverlayGalleryStandardToggle}) => {
  return (
    <button className="furniture1BtnBucatarii furnitureBtn" onClick={handleOverlayGalleryStandardToggle}>
    Vezi proiect
  </button>
  );
};

///+++++++++++++++++++++++++++++++++++++++++++++///

export const Furniture2BtnBucatarii = ({handleOverlayGalleryStandardToggle}) => {
  return (
    <button className="furniture2BtnBucatarii furnitureBtn" onClick={handleOverlayGalleryStandardToggle}>
    Vezi proiect
  </button>
  );
};

///+++++++++++++++++++++++++++++++++++++++++++++///

export const Furniture3BtnBucatarii = ({handleOverlayGalleryStandardToggle}) => {
  return (
    <button className="furniture3BtnBucatarii  furnitureBtn" onClick={handleOverlayGalleryStandardToggle}>
    Vezi proiect
  </button>
  );
};

///+++++++++++++++++++++++++++++++++++++++++++++///

export const Furniture4BtnBucatarii = ({handleOverlayGalleryStandardToggle}) => {
  return (
    <button className="furniture4BtnBucatarii  furnitureBtn" onClick={handleOverlayGalleryStandardToggle}>
    Vezi proiect
  </button>
  );
};

///+++++++++++++++++++++++++++++++++++++++++++++///

export const Furniture5BtnBucatarii = ({handleOverlayGalleryStandardToggle}) => {
  return (
    <button className="furniture5BtnBucatarii  furnitureBtn" onClick={handleOverlayGalleryStandardToggle}>
    Vezi proiect
  </button>
  );
};

///+++++++++++++++++++++++++++++++++++++++++++++///

export const Furniture6BtnBucatarii = ({handleOverlayGalleryStandardToggle}) => {
  return (
    <button className="furniture6BtnBucatarii  furnitureBtn" onClick={handleOverlayGalleryStandardToggle}>
    Vezi proiect
  </button>
  );
};

///+++++++++++++++++++++++++++++++++++++++++++++///

export const Furniture1BtnDormitoare= ({handleOverlayGalleryStandardToggle}) => {
  return (
    <button className="furniture1BtnDormitoare furnitureBtn" onClick={handleOverlayGalleryStandardToggle}>
    Vezi proiect
  </button>
  );
};

///+++++++++++++++++++++++++++++++++++++++++++++///

export const Furniture2BtnDormitoare = ({handleOverlayGalleryStandardToggle}) => {
  return (
    <button className="furniture2BtnDormitoare  furnitureBtn" onClick={handleOverlayGalleryStandardToggle}>
    Vezi proiect
  </button>
  );
};

///+++++++++++++++++++++++++++++++++++++++++++++///

export const Furniture3BtnDormitoare= ({handleOverlayGalleryStandardToggle}) => {
  return (
    <button className="furniture3BtnDormitoare  furnitureBtn" onClick={handleOverlayGalleryStandardToggle}>
    Vezi proiect
  </button>
  );
};

///+++++++++++++++++++++++++++++++++++++++++++++///

export const Furniture4BtnDormitoare = ({handleOverlayGalleryStandardToggle}) => {
  return (
    <button className="furniture4BtnDormitoare  furnitureBtn" onClick={handleOverlayGalleryStandardToggle}>
    Vezi proiect
  </button>
  );
};

///+++++++++++++++++++++++++++++++++++++++++++++///

export const Furniture5BtnDormitoare = ({handleOverlayGalleryStandardToggle}) => {
  return (
    <button className="furniture5BtnDormitoare  furnitureBtn" onClick={handleOverlayGalleryStandardToggle}>
    Vezi proiect
  </button>
  );
};

///+++++++++++++++++++++++++++++++++++++++++++++///

export const Furniture6BtnDormitoare = ({handleOverlayGalleryStandardToggle}) => {
  return (
    <button className="furniture6BtnDormitoare  furnitureBtn" onClick={handleOverlayGalleryStandardToggle}>
    Vezi proiect
  </button>
  );
};

///+++++++++++++++++++++++++++++++++++++++++++++///

export const TrimiteCotatieBtn = () => {
  return (
    <button className="trimiteCotatieBtn">
    Trimite Cotatie
  </button>
  );
};

