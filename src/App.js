import { Route, Router, Switch } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home"
import PlayList_Home from "./pages/Playlist/PlayList_Home"
import Vishal from "./pages/Playlist/Vishal"
import Pop from "./pages/Playlist/Pop"
function App() {
 
  return (
    <div className="App">
   <Switch>
     <Route exact path="/" component={Home}></Route>
     <Route exact path="/play" component={PlayList_Home}/>
     <Route exact path="/vishal" component={Vishal}/>
     <Route exact path="/pop" component={Pop}/>
   </Switch>
    </div>
  );
}

export default App;
