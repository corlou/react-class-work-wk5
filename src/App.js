import './App.css';
import SomeExampleComponent from './SomeExampleComponent';
import BlackCatImg from './assets/BlackCatImg.jpg';
import BlackCatVideo from './assets/BlackCatVideo.mp4'


const someMessage = "Hello World!"

const classFavouritePokemon = [
  "Bulbasaur",
  "Chikorita",
  "the water one",
  "Pikachu",
  "Squirtle",
  "Mankey",
  "Voltorb",
  "Poliwag",
  "Geodude",
  "Komala",
  "Snorlax",
  "Gumblesnorf"
]

function App() {
  return (
    <div className="App">
      <SomeExampleComponent />
      <header className="App-header">
        <h1>{someMessage}</h1>
        <img src={BlackCatImg} alt="a black cat" width={300} height={200}></img>
        <video src={BlackCatVideo} autoplay={true} controls width={300} height={400}>
          Video not loading...
        </video>
        <h1>Class Pokemon</h1>
        <ul>
          {classFavouritePokemon.map((pokemon, index) => (
            <li className="pokemon" key={index}>
              {pokemon}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
