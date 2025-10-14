// =======================================
// Archivo: Header.js
// La estructura HTML de tu cabecera.
// =======================================
import React from 'react';
// Importa el archivo de estilos
import './Header.css'; 

const CATEGORIES = [
    "Ofertas", "Muebles", "Sillas", "Materiales", 
    "Galería", "Blog"
];

const Header = () => {
    // Rutas simuladas para tus imágenes
    const LogoImage = '/images/logo-boketto.png';
    const HeroImage = '/images/hero-office.jpg';

    return (
        <header>
            {/* 1. BARRA SUPERIOR (Top Bar) - Logo, Buscador, Acciones */}
            <div className="top-bar">
                
                {/* Logo y Nombre de la Empresa (Boketto Design) */}
                <div className="logo-section">
                    <img src={LogoImage} alt="Logo Boketto Design" className="logo-icon" />
                    <span className="logo-text">Espacios que fluyen. Mentes que crean</span>
                </div>

                {/* Buscador */}
                <div className="search-section">
                    <input 
                        type="text" 
                        placeholder="Buscar por producto, categoría y más" 
                        className="search-input"
                    />
                </div>

                {/* Botones de Acción (Iniciar Sesión y Carrito) */}
                <div className="user-actions">
                    <button className="login-button">Iniciar sesión</button>
                    <button className="cart-button">🛒 Carrito</button>
                </div>
            </div>

            {/* 2. SUB MENÚ DE CATEGORÍAS */}
            <nav className="category-nav">
                <ul className="category-list">
                    {CATEGORIES.map((category, index) => (
                        // Crea un enlace por cada categoría
                        <li key={index} className="category-item">
                            <a href={`/${category.toLowerCase()}`}>{category}</a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* 3. IMAGEN HERO (Enlace a Muebles) */}
            <div className="hero-section">
                <a href="/muebles">
                    <img 
                        src={HeroImage} 
                        alt="Sección Muebles" 
                        className="hero-image"
                    />
                </a>
            </div>
        </header>
    );
}

// Esto permite que App.js pueda llamar a este componente
export default Header;