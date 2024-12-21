import "./App.css";
import { MusicWeatherProvider } from "./components/context/MusicWeatherContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./views/Landing";
import Home from "./views/Home";
import InfoView from "./views/InfoView";
import FavoriteCities from "./views/FavoriteCities";

function App() {
  return (
    <>
      <BrowserRouter>
        <MusicWeatherProvider>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/info" element={<InfoView />} />
            <Route path="/favorite" element={<FavoriteCities />} />
          </Routes>
        </MusicWeatherProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
