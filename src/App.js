import React from 'react';
import Header from './components/Header';
import Playlist from './components/Playlist';
import Videos from './components/Videos';
import Home from './components/Home';
import { Routes, Route} from "react-router-dom";
import './App.css';

const AppData = React.createContext(window.playlists);

function App() {
  return (
    <AppData.Provider>
    <Header></Header>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="playlist" element={<Playlist />} />
        <Route path="videos" element={<Videos />} />
      </Routes>
    </AppData.Provider>
  );
}

export default App;
