import './App.css';
import Slider from './components/Slider';
import Background from './components/Background';
import Avis from './components/Avis';
import Slider2 from './components/Slider2';
function App () {
  return (
    <>
      <div className='slider' style={{ backgroundImage: "url(/assets/img/fondhome.svg)" }}>
        <div className="conteneur_slider">
          <h1>Chassez vos peurs,<br/> 
            pas les insectes, avec Bug Buster !</h1>
          <a href="/produit">Découvrez Notre Concept ▷</a>
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
