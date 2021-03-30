
import './App.css';
import {Card} from './components/card';
import {cardTitles} from "./components/data";
import { data } from 'jquery';



const App = props => {
  return(
  <>
  <div className="row">
  { cardTitles.map((title, i) => {
    return <Card key={i} text= {title}/>
  })}
  </div>
   </>
  )
}

export default App;
