import React from "react";
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import DashBoard from "./components/DashBoard/DashBoard";
import CreateAds from "./components/CreateAds/CreateAds";
import TextAdsForm from "./components/TextAdsForm/TextAdsForm";
import MediaAdsForm from "./components/MediaAdsForm/MediaAdsForm";
import SubmitForm from "./components/SubmitForm/SubmitForm";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="container main-container">
        <NavBar />
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/ads" element={<CreateAds />} />
          <Route path="/textAds" element={<TextAdsForm />} />
          <Route path="/mediaAds" element={<MediaAdsForm />} />
          <Route path="/submit" element={<SubmitForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
