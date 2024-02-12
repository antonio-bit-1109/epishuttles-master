import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MeteorShower from "./Components/MeteorShower";
import SpaceShip from "./Components/SpaceShip";
import Esplosione from "./Components/Esplosione";

function App() {
    return (
        <div className="App position-relative" id="Apollo">
            <MeteorShower />
            <SpaceShip />
            <Esplosione />
        </div>
    );
}

export default App;
