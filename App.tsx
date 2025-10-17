
import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ReadingsPage from './pages/ReadingsPage';
import EncyclopediaPage from './pages/EncyclopediaPage';
import CardDetailPage from './pages/CardDetailPage';
import PersonalityTestPage from './pages/PersonalityTestPage';
import BlogPage from './pages/BlogPage';
import WorkshopPage from './pages/WorkshopPage';
import ShopPage from './pages/ShopPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <HashRouter>
        <div className="flex flex-col min-h-screen bg-slate-900 text-slate-200 font-sans">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/readings" element={<ReadingsPage />} />
              <Route path="/encyclopedia" element={<EncyclopediaPage />} />
              <Route path="/card/:id" element={<CardDetailPage />} />
              <Route path="/test" element={<PersonalityTestPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/workshop" element={<WorkshopPage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </LanguageProvider>
  );
};

export default App;
