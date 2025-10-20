// es la plantilla de todas las páginas a las que se accede a través del submenú, llama a los otros acrhivos del submenu
import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard'; 
import CategoryGrid from '../components/CategoryGrid';


// datos estátics
const primaryColor = '#0F245E';

// 1. Productos para la vista de Ofertas, info que se vera en pantalla
const MOCK_OFFERS_PRODUCTS = [
    { "id": 104, "nombre": "Silla de Varier Ergonomic", "precio": 4000.00, "categoria": "Ofertas", "imagen_principal": "/images/products/oferta_1.webp" },
    { "id": 105, "nombre": "Mesa Modul Sakura", "precio": 7000.00, "categoria": "Ofertas", "imagen_principal": "/images/products/oferta_3.jpg" },
    { "id": 106, "nombre": "Set Rincón para estudio", "precio": 3500.00, "categoria": "Ofertas", "imagen_principal": "/images/products/oferta_4.jpg" },
    { "id": 107, "nombre": "Lámpara colgante LED para módulo", "precio": 2000.00, "categoria": "Ofertas", "imagen_principal": "/images/products/oferta_2.jpg" },
];

// 2. Subcategorías para Muebles, Sillas y Materiales, ojo cambia slug 20 oct
const SUBCATEGORIES_MUEBLES = [
    { name: 'Modulares y escritorios', slug: 'mesas', img: '/images/products/muebles_submenu.webp' },
    { name: 'Archiveros y estantes', slug: 'salas-sofas', img: '/images/products/archiveros_submenu.jpg' },
    { name: 'Sillones y recepción', slug: 'sillones', img: '/images/products/recepcion_submenu.png' },
];

const SUBCATEGORIES_SILLAS = [
    { name: 'Sillas ergonómicas', slug: 'comedor', img: '/images/products/sillas_submenu.jpg' },
    { name: 'Sillas de Varier', slug: 'oficina', img: '/images/products/varier_submenu.webp' },
    { name: 'Bancos y Taburetes', slug: 'bancos', img: '/images/products/bancos_submenu.jpg' },
];

const SUBCATEGORIES_MATERIALES = [
    { name: 'Madera y Texturas', slug: 'madera', img: '/images/products/madera_submenu.jpeg' },
    { name: 'Metales y Acabados', slug: 'metales', img: '/images/products/acabados_submenu.webp' },
    { name: 'Textiles', slug: 'telas', img: '/images/products/textiles_submenu.jpg' },
];

// 3. Imágenes para la Galería
const MOCK_GALLERY_IMAGES = [
    { id: 1, src: '/images/products/ariel_submenu.jpg', alt: 'Proyecto Ariel' },
    { id: 2, src: '/images/products/muraoka_submenu.jpg', alt: 'Muraoka Design' },
    { id: 3, src: '/images/products/rilke_submenu.jpg', alt: 'Rilke Production' },
    { id: 4, src: '/images/products/tiro al blanco_submenu.jpg', alt: 'Galería tiro al Blanco' },
    { id: 5, src: '/images/products/makoto_submenu.jpg', alt: 'Proyecto Makoto' },
    { id: 6, src: '/images/products/proyecto12_submenu.jpg', alt: 'Proyecto 12' },
];


const GenericPage = () => {
    const { categorySlug } = useParams(); 
    const slug = categorySlug ? categorySlug.toLowerCase() : '';

    
    // las vistas de Muebles, Sillas, Materiales
    if (slug === 'muebles' || slug === 'sillas' || slug === 'materiales') {
        let title, subcategoriesData;

        if (slug === 'muebles') {
            title = 'Colecciones de Muebles';
            subcategoriesData = SUBCATEGORIES_MUEBLES;
        } else if (slug === 'sillas') {
            title = 'Descubre nuestra selección de Sillas';
            subcategoriesData = SUBCATEGORIES_SILLAS;
        } else if (slug === 'materiales') {
            title = 'Guía de Materiales y Acabados';
            subcategoriesData = SUBCATEGORIES_MATERIALES;
        }

        return (
            <div style={{ padding: '40px' }}>
                <CategoryGrid 
                    title={title} 
                    viewAllLink={`/${slug}/ver-todo`} 
                    subcategories={subcategoriesData} 
                />
            </div>
        );
    }
    
    // Vista de ofertas grid
    if (slug === 'ofertas') {
        return (
            <div style={{ padding: '20px' }}>
                <h1 style={{ textAlign: 'center', color: primaryColor, marginBottom: '40px' }}>
                    OFERTAS ESPECIALES
                </h1>
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '20px', 
                    maxWidth: '1300px', 
                    margin: '0 auto' 
                }}>
                    {MOCK_OFFERS_PRODUCTS.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        );
    }
    
    // Vista de galería (ejemplo solo con 6 imágenes)
    if (slug === 'galeria') {
        return (
            <div style={{ padding: '40px' }}>
                <h1 style={{ textAlign: 'center', color: primaryColor, marginBottom: '40px' }}>
                    Galería de proyectos
                </h1>
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                    gap: '20px', 
                    maxWidth: '1200px', 
                    margin: '0 auto' 
                }}>
                    {MOCK_GALLERY_IMAGES.map(image => (
                        <div key={image.id} style={{ overflow: 'hidden', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                            <img 
                                src={image.src} 
                                alt={image.alt} 
                                style={{ width: '100%', height: '350px', objectFit: 'cover' }} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // 4. Vista de Blog
if (slug === 'blog') {
        const primaryColor = '#0F245E'; 

        return (
            <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ color: primaryColor, borderBottom: `2px solid ${primaryColor}`, paddingBottom: '10px' }}>
                    Diseñar para el bienestar: cómo los espacios de oficina influyen en la calidad de vida laboral
                </h1>
                
                <article style={{ marginTop: '30px', lineHeight: 1.6 }}>
                    <h2 style={{ color: '#333' }}>Tendencias 2025: El Regreso de los Materiales Naturales</h2>
                    <p style={{ color: '#666', fontSize: '0.9em' }}>20 de octubre de 2025</p>
                    
                    {/* IMAGEN 1: Banner principal del artículo */}
                    <img
                        src="/images/oficina_natural_1.webp" 
                        alt="Oficina moderna con iluminación natural"
                        style={{ width: '100%', height: 'auto', margin: '20px 0', borderRadius: '8px' }}
                    />
                    
                    <p>En los últimos años, el diseño de los espacios de trabajo ha dejado de centrarse únicamente en la funcionalidad para convertirse en un factor clave del bienestar y la productividad. Un entorno bien diseñado puede mejorar significativamente la calidad de vida de los empleados, fomentar la creatividad y reducir los niveles de estrés.
                    </p>

                    <p>Los diseños ergonómicos son un pilar fundamental. Incorporar mobiliario que se adapte a las necesidades físicas del trabajador —sillas ajustables, escritorios a la altura adecuada, iluminación natural y una buena ventilación— reduce las dolencias musculares y mejora la concentración. No se trata solo de estética, sino de salud.
                    </p>
                    
                    {/* IMAGEN 2: Imagen para romper el texto */}
                    
                    <img
                        src="/images/oficina_natural_2.jpg" 
                        alt="Diseño de silla ergonómica de oficina"
                        style={{ width: '60%', float: 'right', margin: '15px 0 15px 20px', borderRadius: '8px' }}
                    />
                    
                    <p>Además, el diseño del espacio influye en la interacción humana. Oficinas abiertas pero equilibradas con zonas de concentración, espacios para el descanso o áreas verdes interiores, estimulan la colaboración sin sacrificar la privacidad. Los colores, la acústica y la calidad del aire también impactan directamente en el estado de ánimo.
                    </p>

                    <p style={{ clear: 'right' }}>
                        En definitiva, invertir en diseño interior no es un lujo, sino una estrategia para promover el bienestar integral. Un espacio donde las personas se sientan cómodas, valoradas y conectadas con su entorno es un espacio donde florecen la creatividad y la productividad.
                    </p>
                    
                    <a href="/blog/tendencias-2025" style={{ color: primaryColor, fontWeight: 'bold' }}>Leer artículo completo...</a>
                </article>
            </div>
        );
    }

    // 5. fallback para que regrese al contenido, si no hay arroja el mensaje
    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1 style={{ color: primaryColor }}>Sección no implementada: {categorySlug.toUpperCase()}</h1>
            <p>El contenido visual para esta sección aún no ha sido definido.</p>
        </div>
    );
};

export default GenericPage;