
import './App.css';
import NavBar from './component/NavBar/navbar';
import Card from './component/Card/card';
import cardData from './component/Card/cardData';

const CardData = cardData.map(item=>{
  return <Card {...item}/>
})

function App() {
  return (
    <div className="App">
      <NavBar/>
      {CardData}
    </div>
  );
}

export default App;
