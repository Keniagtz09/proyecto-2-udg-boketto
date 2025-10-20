import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
    { name: 'Ofertas', path: '/ofertas' },
    { name: 'Muebles', path: '/muebles' },
    { name: 'Sillas', path: '/sillas' },
    { name: 'Materiales', path: '/materiales' },
    { name: 'Galería', path: '/galeria' },
    { name: 'Blog', path: '/blog' },
];

const SubMenu = () => {
    return (
        <nav className="sub-menu-bar" style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            padding: '25px 0', 
            backgroundColor: '#f7f7f7', 
            borderBottom: '6px solid #eee' 
        }}>
            {categories.map((cat) => (
                <Link 
                    key={cat.path} 
                    to={cat.path} 
                    style={{ 
                        margin: '0 45px', 
                        textDecoration: 'none', 
                        color: '#0F245E', 
                        fontWeight: 'bold' 
                    }}
                >
                    {cat.name}
                </Link>
            ))}
        </nav>
    );
};

export default SubMenu;