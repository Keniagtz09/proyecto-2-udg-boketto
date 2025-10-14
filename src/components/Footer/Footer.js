// =======================================
// Archivo: src/components/Footer/Footer.js
// Pie de página de Boketto Design
// =======================================
import React from 'react';
import './Footer.css'; 

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer-content">
                
                {/* 1. SECCIÓN DE CONTACTO Y Misión */}
                <div className="footer-section about">
                    <h3 className="logo-text-footer">Boketto Design</h3>
                    <p>
                        Diseñando espacios ergonómicos y armónicos, inspirados en la filosofía ZEN, para fomentar el bienestar y la productividad.
                    </p>
                    <p>Contacto: info@bokettodesign.com</p>
                    <p>© {new Date().getFullYear()} Boketto Design. Todos los derechos reservados.</p>
                </div>

                {/* 2. SECCIÓN DE NAVEGACIÓN RÁPIDA */}
                <div className="footer-section links">
                    <h4>Navegación</h4>
                    <ul>
                        <li><a href="/muebles">Muebles</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/galeria">Proyectos</a></li>
                        <li><a href="/asesoramiento">Asesoramiento</a></li>
                    </ul>
                </div>

                {/* 3. SECCIÓN LEGAL Y AYUDA */}
                <div className="footer-section legal">
                    <h4>Ayuda y Legal</h4>
                    <ul>
                        <li><a href="/seguimiento">Rastrear Pedido (H008)</a></li>
                        <li><a href="/politicas">Política de Privacidad (H011)</a></li>
                        <li><a href="/terminos">Términos y Condiciones</a></li>
                    </ul>
                </div>

            </div>
        </footer>
    );
}

export default Footer;