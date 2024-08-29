import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import CustomButton from "./Components/Button";
import SongCard from "./Components/SongCard";
import SectionComp from "./Components/SectionComp";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <SectionComp />
        </div>
    );
}

export default App;
