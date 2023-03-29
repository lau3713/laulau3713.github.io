import './App.css';
import Slider from './components/Slider';
import Background from './components/Background';
import Avis from './components/Avis';
function App () {
  return (
    <>
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
      </div>
    </>
  )
}

export default App
