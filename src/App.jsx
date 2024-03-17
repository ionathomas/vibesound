import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from './pages/MainPage';
import HomePage from './pages/HomePage';
import FaceAnalyzer from './pages/FaceAnalyzer'
import EmojiQuiz from './pages/EmojiQuiz';
import HappyPage from './pages/happy-page';
import SadPage from './pages/sad-page';
import AngryPage from './pages/angry-page';
import CalmPage from './pages/calm-page';
import AnxiousPage from './pages/anxious-page';
import NotSurePage from './pages/notSure-page';
import Recommendations from './pages/recommendations';

export default function App()
{
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<MainPage />} />
                <Route path="/homepage" element={<HomePage />} />
                <Route path="/FaceAnalyzer" element={<FaceAnalyzer />} />
                <Route path="/EmojiQuiz" element={<EmojiQuiz />} />
                <Route path="/happy-page" element={<HappyPage />} />
                <Route path="/sad-page" element={<SadPage />} />
                <Route path="/angry-page" element={<AngryPage />} />
                <Route path="/calm-page" element={<CalmPage />} />
                <Route path="/anxious-page" element={<AnxiousPage />} />
                <Route path="/notSure-page" element={<NotSurePage />} />
                <Route path="/recommendations" element={<Recommendations />}/>
            </Routes>
        </BrowserRouter>

    );
}

