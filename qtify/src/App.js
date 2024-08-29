import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import CustomButton from "./Components/Button";
import SongCard from "./Components/SongCard";
import MultiSectionsComp from "./Components/MultiSectionsComp";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <MultiSectionsComp />
        </div>
    );
}

export default App;
