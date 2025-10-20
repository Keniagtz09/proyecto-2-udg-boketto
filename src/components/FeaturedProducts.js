import React from 'react';

const products = [
    { id: 1, img: '/images/producto_1.jpg', name: 'Escritorios ajustables' }, 
    { id: 2, img: '/images/producto_2.jpg', name: 'Silla ergonómica oriental' }, 
    { id: 3, img: '/images/producto_3.jpg', name: 'Módulo de equipo interno' }, 
];

const FeaturedProducts = () => {
    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'space-around', 
            maxWidth: '1000px', 
            margin: '20px auto', 
            gap: '20px' 
        }}>
            {products.map(product => (
                <div key={product.id} style={{ 
                    flex: '1', 
                    border: '1px solid #eee', 
                    borderRadius: '8px', 
                    textAlign: 'center', 
                    paddingBottom: '10px' 
                }}>
                    <img 
                        src={product.img} 
                        alt={product.name} 
                        style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px 8px 0 0' }} 
                    />
                    <p style={{ fontWeight: 'bold' }}>{product.name}</p>
                    <button style={{ backgroundColor: '#0F245E', color: 'white' }}>Ver Producto</button>
                </div>
            ))}
        </div>
    );
};

export default FeaturedProducts;