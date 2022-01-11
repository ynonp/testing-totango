import './App.css';
import SpoilerAlert from './components/SpoilerAlert';
import ListWithFilter from './components/ListWithFilter';
import ImageGallery from './components/ImageGallery';

const items = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const images = [
'./images/coachwhip2_1.jpeg',
'./images/green2_1.jpeg',
'./images/hognose1.jpeg',
'./images/lined_2.jpeg',
'./images/plainsblack_1.jpeg',
'./images/prairieringneck_1.jpeg',
'./images/variable_1.jpeg',
];

function App() {
  return (
    <div className="App">
      <section>
        <h1>SpoilerAlert.js</h1>
        <p>And then the cat jumped off the roof and into <SpoilerAlert text="the swimming pool" /></p>
      </section>
      <section>
        <h1>ListWithFilter.js</h1>
        <ListWithFilter items={items} />
      </section>
      <section>
        <h1>ImageGallery.js</h1>
        <ImageGallery images={images} />
      </section>
    </div>
  );
}

export default App;
