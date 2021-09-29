
import './App.css';
import MyBadge from './Components/MyBadge';
import SingleBook from './Components/SingleBook';
import WarningSign from './Components/WarningSign';
import fantasy from "./Data/fantasy.json"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WarningSign text="your books available"/>
        <MyBadge text = "whatever" color ="primary" />
        <SingleBook book={fantasy[0]}  />
        
      </header>
    </div>
  );
}

export default App;
