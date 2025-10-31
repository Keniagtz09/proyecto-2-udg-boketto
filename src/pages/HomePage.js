import React from 'react';
import FeaturedProducts from '../components/FeaturedProducts';

const HomePage = () => {
    return (
        <div className="home-page-content">
            
            {/* Banner de Muebles (H017) */}
            <div className="main-banner" style={{ 
                height: '500px', 
                backgroundImage: `url('/images/banner_muebles.jpg')`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                margin: '20px 0'
            }}>
                {/* Sin texto dentro del banner */}
            </div>

            {/* Lo más vendido */}
            <h2 style={{ textAlign: 'center', marginTop: '80px', color: '#0F245E' }}>
                Nueva colección 2025
            </h2>
            <FeaturedProducts /> 
        </div>
    );
}
export default HomePage;