// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/header';
import Footer from './component/footer';
import Home from './component/home';
import About from './component/about';
import Search from './component/search';
import Categories from './component/categories';
import Playlist from './component/playlist'; // Import your Playlist component
import PlaylistShow from './component/playlistshow';
import MusicPlayer from './component/musicplayer';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path='/search' element={<Search />}/>
            <Route path='/categories' element={<Categories/>}/>
            <Route path="/playlist/:categoryId" element={<Playlist />} />
            <Route path="/playlistshow/:playlistId" element={<PlaylistShow />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
