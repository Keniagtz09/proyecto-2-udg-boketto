import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const primaryColor = '#0F245E'; 

    return (
        <header style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            padding: '15px 20px', 
            backgroundColor: 'white', 
            borderBottom: '1px solid #ddd' 
        }}>
            
            {/* Logo con eslogan */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
                
                {/* Logo boketto */}
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <img 
                        src="/images/logo_boketto_design.png" 
                        alt="Boketto Design Logo" 
                        style={{ height: '60px' }} 
                    />
                </Link>

                {/* eslogan */}
                <span style={{ color: primaryColor, fontSize: '1.5em', fontWeight: 'normal' }}>
                    Espacios que inspiran
                </span>
                
            </div>
            
            {/* Busqueda */}
            <div className="search-bar" style={{ flexGrow: 1, margin: '0 30px', maxWidth: '500px' }}>
                <input 
                    type="text" 
                    placeholder="Buscar producto, categoría y más..." 
                    style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} 
                />
            </div>

            {/* inicia sesión y carro de compras */}
            <div className="action-buttons" style={{ display: 'flex', gap: '15px' }}>
                
                {/* Botón Iniciar Sesión (Ruta H001) */}
                <Link to="/iniciar-sesion">
                    <button style={{ 
                        backgroundColor: 'white', 
                        color: primaryColor, 
                        border: `1px solid ${primaryColor}`, 
                        padding: '8px 15px', 
                        cursor: 'pointer', 
                        borderRadius: '4px' 
                    }}>
                        Iniciar Sesión
                    </button>
                </Link>
                
                {/* Carrito de Compras */}
                <button title="Carrito de Compras" style={{ 
                    backgroundColor: primaryColor, 
                    color: 'white', 
                    padding: '8px 15px', 
                    border: 'none', 
                    borderRadius: '4px', 
                    cursor: 'pointer' 
                }}>
                    🛒
                </button>
            </div>
        </header>
    );
}

export default Header;