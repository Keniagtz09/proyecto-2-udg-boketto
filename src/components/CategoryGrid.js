// src/components/CategoryGrid.js
import React from 'react';
import { Link } from 'react-router-dom';

// El componente ahora recibe la lista de subcategorías como 'subcategories'
const CategoryGrid = ({ title, viewAllLink, subcategories }) => {
    const primaryColor = '#0F245E';

    // Verificación: Si no hay datos, no renderiza nada
    if (!subcategories || subcategories.length === 0) {
        return null;
    }

    return (
        <div style={{ padding: '20px' }}>
            {/* Título y Enlace 'Ver todo' */}
            <header style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
                <h2 style={{ margin: 0, color: primaryColor, borderLeft: `5px solid ${primaryColor}`, paddingLeft: '10px' }}>
                    {title}
                </h2>
                <Link to={viewAllLink || '#'} style={{ marginLeft: '15px', textDecoration: 'none', color: '#666', fontSize: '0.9em' }}>
                    Ver todo
                </Link>
            </header>

            {/* Rejilla de Subcategorías */}
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                gap: '20px', 
            }}>
                {/* Mapea sobre la lista de subcategorías recibida por props */}
                {subcategories.map((subcat) => (
                    <Link 
                        // Enlace que llevará a una ruta de catálogo más detallada
                        to={`/${subcat.slug}`} 
                        key={subcat.slug} 
                        style={{ textDecoration: 'none', color: primaryColor }}
                    >
                        <div style={{ 
                            border: '1px solid #eee', 
                            borderRadius: '4px', 
                            overflow: 'hidden', 
                            boxShadow: '0 2px 5px rgba(0,0,0,0.05)' 
                        }}>
                            <img 
                                src={subcat.img} 
                                alt={subcat.name} 
                                style={{ width: '100%', height: '350px', objectFit: 'cover' }} 
                            />
                            <h3 style={{ margin: '15px', fontSize: '1.2em', textAlign: 'center' }}>
                                {subcat.name}
                            </h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategoryGrid;