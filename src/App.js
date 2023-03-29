import './App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import Background from './components/Background';
import Avis from './components/Avis';
import Slider2 from './components/Slider2';
function App () {
  return (
    <>
      <Header />
      <div className='slider' style={{ backgroundImage: "url(/assets/img/fondhome.svg)" }}>
        <div id="conteneur_slider">
          <h1>BUG BUSTERS</h1>
          <p>Chassez vos peurs, pas les insectes !</p>
          <a href="#">Plus d'infos</a>
        </div>
      </div>
      <div className='sliders'>
      <Background  />
      <Slider />
      <Avis />
      <Slider2 />
      </div>
    </>
  )
}

export default App
