import './App.css'
import Jumbotron from './components/Jumbotron'
import { Card } from './components/Card';
import { cardTitles } from "./components/data";

<<<<<<< HEAD
import './App.css';
import {Card} from './components/card';
import {cardTitles} from "./components/data";




const App = props => {
  return(
  <>
  <div className="row p-1">
  { cardTitles.map((title, i) => {
    return <Card key={i} text= {title}/>
  })}
  </div>
   </>
  )
=======
function App() {
  return (
    <>
      < Jumbotron title="A Warm Welcome!" />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
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
>>>>>>> 092fd828f2ed7eff9890251a46192c45b2d84763
}
export default App;
