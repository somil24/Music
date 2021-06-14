import { Route, Router, Switch } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home"
import PlayList_Home from "./pages/Playlist/PlayList_Home"
function App() {
  return (
    <div className="App">
   <Switch>
     <Route exact path="/" component={Home}></Route>
     <Route exact path="/play" component={PlayList_Home}/>
   </Switch>
    </div>
  );
}

export default App;
