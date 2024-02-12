import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MeteorShower from "./Components/MeteorShower";
import SpaceShip from "./Components/SpaceShip";

function App() {
    return (
        <div className="App position-relative" id="Apollo">
            <MeteorShower />
            <SpaceShip />
        </div>
    );
}

export default App;
