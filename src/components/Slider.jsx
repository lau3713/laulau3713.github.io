import '../styles/SliderStyle.css'
import '../styles/CounterStyle.css'
import Counter from './Counter';

function Slider () {
  return (
    <>
    <div className='sliderss'>
      <div className='head'>
        <h1>BUG BUSTERS</h1>
        <h2><Counter endNumber={2023} /></h2>
      </div>
      <div>
        <p>Le projet Bug Buster a été créé par trois étudiants, Laurie, Victor et Eva, lors de leurs partiels en mars 2023. Leur idée est de créer un aspirateur à insectes innovant qui permet d’aspirer les insectes sans les tuer et de les relâcher dans la nature. Ils ont conçu l’identité visuelle de la marque, réalisé une analyse marketing approfondie ainsi qu’un plan de communication pour promouvoir le produit. Leur inspiration est venue lorsqu’un groupe de camarades de classe sont venus les voir, apeurées par la présence d’une araignée dans leur salle de classe. Le projet est prévu pour voir le jour en 2024, à condition de trouver un investisseur pour financer sa production.</p>
      </div>
    </div>
    <div className='button-container'>
      <button type="button" >3 étudiants, 1 projet, découvrez-nous</button>
    </div>
    </>
   );
}

export default Slider;
