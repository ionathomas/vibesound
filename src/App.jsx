import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import Choice from './pages/choice';
import FaceAnalyzer from './pages/FaceAnalyzer'
import Questionnaire from './pages/Questionnaire';
import HappyPage from './pages/happy-page';
import SadPage from './pages/sad-page';
import AngryPage from './pages/angry-page';
import CalmPage from './pages/calm-page';
import AnxiousPage from './pages/anxious-page';
import NotSurePage from './pages/notSure-page';

export default function App()
{
  return(
    <BrowserRouter>
      <Routes>
       <Route exact path="/" element={<HomePage />} />
       <Route path="/choice" element={<Choice />} />
       <Route path="/FaceAnalyzer" element={<FaceAnalyzer />} />
       <Route path="/Questionnaire" element={<Questionnaire />} />
       <Route path="/happy-page" element={<HappyPage />} />
       <Route path="/sad-page" element={<SadPage />} />
       <Route path="/angry-page" element={<AngryPage />} />
       <Route path="/calm-page" element={<CalmPage />} />
       <Route path="/anxious-page" element={<AnxiousPage />} />
       <Route path="/notSure-page" element={<NotSurePage />} />
      </Routes>
    </BrowserRouter>
    
    
  );
}

