import './App.css'
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import { Card } from './components/Card';
import { cardTitles } from "./components/data";
import {Footer} from './components/footer';


function App() {
  
  return (
    <>
      <Navbar
      inicio="Start Bootstrap"
      home="Home"
      about="About"
      services="Services"
      contact="Contact"
      />
      < Jumbotron title="A Warm Welcome!" />
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
          </div>
        </div>
        <div className="row">
          {cardTitles.map((title, i) => {
            return <Card key={i} text={title} />
          })}
        </div>
      </div>
      <Footer/>
    </>

  );
}
export default App;
