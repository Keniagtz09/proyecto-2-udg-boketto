    // con este archivo se puede renderizar la interfaz visual de un solo producto dentro de un catálogo
import React from 'react';


const ProductCard = ({ product }) => {

    const primaryColor = '#0F245E'; 

    return (
        <div style={{ 
            border: '1px solid #ddd', 
            borderRadius: '4px', 
            padding: '10px', 
            textAlign: 'left', 
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>
            {/* Imagen del Producto */}
            <img 
                src={product.imagen_principal} 
                alt={product.nombre} 
                style={{ width: '100%', height: '300px', objectFit: 'cover', marginBottom: '10px' }} 
            />
            
            {/* Información del Producto */}
            <div>
                <h4 style={{ margin: '5px 0', fontSize: '1em', color: primaryColor }}>
                    {product.nombre}
                </h4>
                
                {/* Precios */}
                <p style={{ margin: '0', fontSize: '0.9em' }}>
                    <span style={{ textDecoration: 'line-through', color: '#888' }}>
                        ${(product.precio * 1.25).toFixed(2)} {/* Precio simulado  de oferta */}
                    </span>
                    <br />
                    <span style={{ fontWeight: 'bold', color: 'red' }}>
                        ${product.precio.toFixed(2)}
                    </span>
                </p>
                
                {/* Simulación del punto de color */}
                <div style={{ display: 'flex', gap: '5px', marginTop: '10px' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'blue', border: '1px solid #ccc' }}></div>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'black', border: '1px solid #ccc' }}></div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;