import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MeteorShower from "./Components/MeteorShower";
import SpaceShip from "./Components/SpaceShip";

function App() {
    // const [meteors, SetMeteors] = useState([]);
    // useEffect(() => {
    //   setInterval(() => {
    //     SetMeteors((prevList) => [...prevList, generateMeteors()]);
    //   }, 2000);
    // }, [meteors]);

    return (
        <div className="App position-relative" id="Apollo">
            <MeteorShower />
            <SpaceShip />
        </div>
    );
}

export default App;
