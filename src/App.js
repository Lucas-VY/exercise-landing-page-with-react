
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
}

export default App;
