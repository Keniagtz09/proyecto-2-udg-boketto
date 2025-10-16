// Integración de los componentes principales (H013 y Footer)

import React from 'react';
// Importa el componente de la cabecera
import Header from './components/Header.js'; 
// Importa el componente del pie de página
import Footer from './components/Footer/Footer.js'; 


const App = () => {
    return (
        // El contenedor principal 
        <div className="app-container">
            
            {/* 1. CABECERA Y MENÚ ( H013) */}
            <Header /> 
            
            {/* 2. CONTENIDO PRINCIPAL (Donde irán el catálogo y la tienda) */}
            <main>
                <h1 style={{textAlign: 'center', margin: '50px'}}>
                    Contenido Principal de la Tienda
                </h1>
                {/* Aquí se integrarán las demás Historias de Usuario (Catálogo, Filtros, etc.) */}
            </main>
            
            {/* 3. PIE DE PÁGINA */}
            <Footer /> 
            
        </div>
    );
}

export default App;