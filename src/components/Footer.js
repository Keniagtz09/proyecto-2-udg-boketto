import React from 'react';
import { Link } from 'react-router-dom';

// Datos parafooter genericos
const footerData = [
    {
        title: 'Ayuda',
        links: [
            { name: 'Preguntas Frecuentes', path: '/ayuda/faq' },
            { name: 'Información de Envío', path: '/ayuda/envio' },
            { name: 'Devoluciones', path: '/ayuda/devoluciones' },
        ],
    },
    {
        title: 'Atención al Cliente',
        links: [
            { name: '(443) 689-2102', path: 'tel:4436892102' },
            { name: 'postventa@bokettodesign.com.mx', path: 'mailto:postventa@bokettodesign.com.mx' },
            { name: 'Promociones y Sorteos', path: '/promociones' },
        ],
    },
    {
        title: 'Encuentra una tienda',
        links: [
            { name: 'Ubicaciones', path: '/tiendas/ubicaciones' },
            { name: 'Tu cuenta', path: '/cuenta' },
            { name: 'Mis Compras', path: '/cuenta/compras' },
        ],
    },
    {
        title: 'Servicios',
        links: [
            { name: 'Mesa de Regalos', path: '/servicios/regalos' },
            { name: 'Trade Alliance', path: '/servicios/trade' },
            { name: 'Facturación', path: '/servicios/facturacion' },
            { name: 'Design Crew', path: '/servicios/designcrew' },
        ],
    },
    {
        title: 'Nuestra Compañía',
        links: [
            { name: 'Sustentabilidad', path: '/compania/sustentabilidad' },
            { name: 'Acerca de Boketto Design', path: '/compania/acerca' },
            { name: 'Bolsa de trabajo', path: '/compania/empleo' },
        ],
    },
];

const primaryColor = '#0F245E'; 

const Footer = () => {
    return (
        <footer style={{ 
            backgroundColor: primaryColor, 
            color: 'white', 
            padding: '40px 20px 10px', 
            marginTop: '50px'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                
                {/* SECCIÓN DE COLUMNAS */}
                <div style={{ 
                    display: 'grid', 
                    // el espacio se reparta uniformemente
                    gridTemplateColumns: 'repeat(5, 1fr)', 
                    gap: '20px', 
                    paddingBottom: '30px',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.3)'
                }}>
                    {footerData.map((section, index) => (
                        <div key={index}>
                            <h4 style={{ marginBottom: '15px', color: 'white', fontWeight: 'bold' }}>
                                {section.title}
                            </h4>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex} style={{ marginBottom: '8px' }}>
                                        {/* aquí deben ir los enlaces de cada campo */}
                                        {link.path.startsWith('http') || link.path.startsWith('tel') || link.path.startsWith('mailto') ? (
                                            <a href={link.path} style={{ color: 'white', textDecoration: 'none', fontSize: '0.9em' }}>
                                                {link.name}
                                            </a>
                                        ) : (
                                            <Link to={link.path} style={{ color: 'white', textDecoration: 'none', fontSize: '0.9em' }}>
                                                {link.name}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    {/* se agregan redes sociales? */}
                </div>

                {/* legal */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '15px', fontSize: '0.8em' }}>
                    
                    {/* Formato de precios */}
                    <p style={{ margin: 0, opacity: 0.7, maxWidth: '50%' }}>
                        El formato de los precios puede verse afectado por las configuraciones y diferencia de navegadores.
                    </p>

                    {/* copy */}
                    <p style={{ margin: 0, textAlign: 'right' }}>
                        © Términos y condiciones | Aviso de Privacidad © 2025 | Boketto Design / Todos los derechos reservados D.R.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;