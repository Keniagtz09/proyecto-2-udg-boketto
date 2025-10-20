import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// fijos dentro de la app
import Header from './components/Header.js'; 
import SubMenu from './components/SubMenu.js'; 
import Footer from './components/Footer.js'; 


import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import GenericPage from './pages/GenericPage'; // Para rutas de categoría


const App = () => {
    return (
        <Router>
            
            <Header />      {/* Encabezado Fijo */}
            <SubMenu />     {/* Submenú Fijo */}
            
            <main style={{ minHeight: '120vh', padding: '40px' }}>
                <Routes>
                    {/* Ruta 1: URL base (/) */}
                    <Route path="/" element={<HomePage />} />
                    
                    {/* Ruta 2: URL de Login/Registro */}
                    <Route path="/iniciar-sesion" element={<LoginPage />} />
                    
                    {/* Ruta 3: Rutas de Categoría (ej: /muebles, /blog, /ofertas) */}
                    <Route path="/:categorySlug" element={<GenericPage />} /> 
                </Routes>
            </main>
            
            <Footer />      {/* Pie de Página Fijo */}
            
        </Router>
    );
}

export default App;