//imports
import "./App.css";
import { Switch, Route } from "react-router-dom";

//components imports
import NavBar from "./components/NavBar";
import Home from "./components/Home"
import Dogs from "./components/Dogs";
import Coding from "./components/Coding";
import Movies from "./components/Movies";


//webpage layout
function App() {
  return (
    <div id="">
      <NavBar />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route path={"/Dogs"} component={Dogs} />
        <Route path={"/Coding"} component={Coding} />
        <Route path={"/Movies"} component={Movies} />
      </Switch>

    </div>
  );
}
export default App;


