import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import ImageOne from './components/ImageOne';
import ImageTwo from './components/ImageTwo';
import ImageThree from './components/ImageThree';
import './Portfolio.css';
import './index.css';

function App() {
  return (
    <div id="portfolio">
      <h1 id="welcome">Welcome to My Portfolio</h1>
      <Header />
      <About />
      <Contact />
      <div className="gallery">
        <h1>Image Gallery</h1>
        <ImageOne />
        <ImageTwo />
        <ImageThree />
      </div>
    </div>
  );
}

export default App
