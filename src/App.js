import React, {useState} from 'react';
import Header from './components/Header';
import Playlist from './components/Playlist';
import Videos from './components/Videos';
import Home from './components/Home';
import PlaylistVideos from './components/PlaylistVideos';
import { Routes, Route} from "react-router-dom";
import './App.css';
import AppData from './components/Context';

// export const AppData = React.createContext('hello');

function App() {

  const [playlistData,setPlaylistData] = useState(window.playlists);
  const [videosData,setVideosData] = useState(window.videos);
  const providerValue = React.useMemo(() => ({
    playlistData,setPlaylistData,
    videosData,setVideosData,
}), [playlistData, videosData]);

  return (
    <AppData.Provider value={providerValue}>
    <Header></Header>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="playlist" element={<Playlist />} />
        <Route path="playlist/:playlistId" element={<PlaylistVideos />} />
        <Route path="videos" element={<Videos />} />
        
      </Routes>
    </AppData.Provider>
  );
}

export default App;
