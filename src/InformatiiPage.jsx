import './styles/InformatiiPage.css'
import backgroundVideo2 from '../src/assets/carpentry.mp4';
import backgroundVideo3 from '../src/assets/carpentry3.mp4';
import {MailBtn, PhoneBtn, LocationBtn} from '../src/Buttons';
import AnimatedPage from './components/animations/AnimationPage';

const InformatiiPage = () => {

  return ( 
    <AnimatedPage>
    <div className='infoPageDiv'>
        <div className="titleAndVideoDespreNoi">
    <div className="writingDespreNoi">
      <h1 className="titluDespreNoi">Expertiza noastra se finiseaza din 1994</h1>
      <p className="textDespreNoi">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore <br />
       et dolore magna aliqua. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit.<br />
        Augue interdum velit euismod in pellentesque. Nunc eget lorem dolor sed viverra ipsum nunc. Vitae <br />
        nunc sed velit dignissim sodales. Sit amet facilisis magna etiam tempor orci eu. Nunc non blandit massa enim <br />
         nec dui nunc mattis enim. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. <br />
         Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Augue mauris augue neque gravida in. <br />
         Nibh ipsum consequat nisl vel. Accumsan tortor posuere ac ut consequat semper viverra nam libero.  <br />
         Suspendisse interdum consectetur libero id faucibus nisl tincidunt. Id volutpat lacus laoreet non <br />
          curabitur gravida arcu ac. Auctor augue mauris augue neque. <br />

</p>
    </div>
    <div className="videoContainerDespreNoi">
    <video className="backgroundVideoDespreNoi" autoPlay muted loop src={backgroundVideo2} />
    </div>
    </div>

    <div className="titleAndVideoPoliticaCalitatii">
    <div className="writingPoliticaCalitatii">
      <h1 className="titlu1PoliticaCalitatii">Politica Calitatii</h1>
      <h1 className="titlu2PoliticaCalitatii">Atentia la detaliu ne defineste</h1>
      <p className="textPoliticaCalitatii">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore <br />
       et dolore magna aliqua. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit.<br />
        Augue interdum velit euismod in pellentesque. Nunc eget lorem dolor sed viverra ipsum nunc. Vitae <br />
        nunc sed velit dignissim sodales. Sit amet facilisis magna etiam tempor orci eu. Nunc non blandit massa enim <br />
         nec dui nunc mattis enim. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. <br />
         Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Augue mauris augue neque gravida in. <br />
         Nibh ipsum consequat nisl vel. Accumsan tortor posuere ac ut consequat semper viverra nam libero.  <br />
         Suspendisse interdum consectetur libero id faucibus nisl tincidunt. Id volutpat lacus laoreet non <br />
          curabitur gravida arcu ac. Auctor augue mauris augue neque. <br />

</p>
    </div>
    <div className="videoContainerPoliticaCalitatii">
    <video className="backgroundVideoPoliticaCalitatii" autoPlay muted loop src={backgroundVideo3} />
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

export default InformatiiPage
