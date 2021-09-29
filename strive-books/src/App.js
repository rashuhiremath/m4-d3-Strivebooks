
import './App.css';
import MyBadge from './Components/MyBadge';
import WarningSign from './Components/WarningSign';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WarningSign text="your books available"/>
        <MyBadge text = "whatever" color ="primary" />
        
      </header>
    </div>
  );
}

export default App;
