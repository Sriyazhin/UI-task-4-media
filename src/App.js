import './App.css';
import person from './assets/images/personimage.png';
import Commoncard from './forcard';
import './portraitmobile.css';
import './landscapemobile.css';
import './forcard.css';
function App() {
  const title = ['About Us', 'Quick Tips', 'Quality Service'];
  return (
    <div className='container'>
    <div className='forservice'>

      <div className='contentside'>
      <div className='titlepart'>Complex Service Your Car</div>
      <div className='parapart'>Our easy-to-talk-to auto car advisors will explain any suggested maintenance or repairs. They won't take any actions unless you approve them first. OurASE-certified auto technicians are looking out for your vehicle and your budget.</div>
      <div className='learnmorebutton'><button className='thebutton'>LEARN MORE</button></div>

      </div>

      <div className='imageside'>
      <div className='photo'><img className='forimage' src={person} alt='personimage'></img> </div>

      </div>

    </div>

    <div className='forcards'>

      {title.map((titles,index) => {
        return(
            <Commoncard key={index} titleName={titles} />
        );
      }
      )}
      

    </div>

    <div className='forline'>
    <div className='lineside'>We perform high-quality repairs of any model, restore cars with various degrees of damage.</div>
    <div className='booknowbutton'><button className='book'>BOOK NOW</button></div>

    </div>

    </div>
  );
}

export default App;
