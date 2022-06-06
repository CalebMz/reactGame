import './myStyles.css';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

//Import my components
import Landing from './Components/Landing';
import Game from './Components/Game';
import HelpPage from './Components/HelpPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route exact={true} path="/" component={Landing}/>
          <Route exact={true} path="/play" component={Game}/>
          <Route exact={true} path="/help" component={HelpPage}/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
