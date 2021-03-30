import './App.css'
import Jumbotron from './components/Jumbotron'
import { Card } from './components/Card';
import { cardTitles } from "./components/data";

function App() {
  return (
    <>
      < Jumbotron title="A Warm Welcome!" />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            hola
          </div>
        </div>
        <div className="row">
          {cardTitles.map((title, i) => {
            return <Card key={i} text={title} />
          })}
        </div>
      </div>
    </>

  );
}
export default App;
