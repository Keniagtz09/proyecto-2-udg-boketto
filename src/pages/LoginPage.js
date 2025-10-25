import React, { useState } from 'react';

const LoginPage = () => {
    const primaryColor = '#0F245E';
    const errorColor = '#200e5bff'; 
    
    const [isRegistering, setIsRegistering] = useState(false); 
    
    const [userData, setUserData] = useState({
        nombre: '', 
        email: '',
        password: '',
        confirmPassword: ''
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (isRegistering) {
            alert('REGISTRO: Formulario visual completado. (Lógica de API omitida)');
        } else {
            alert('LOGIN: Formulario visual completado. (Lógica de API omitida)');
        }
    };
    
    const AssociatedStores = () => (
        <div style={{ margin: '20px 0' }}>
            <p style={{ fontSize: '0.9em', color: '#666', marginBottom: '15px' }}>
                Recuerda que con una sola cuenta puedes ingresar a nuestras tiendas asociadas:
            </p>
            {/* Simulación de íconos de tiendas */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                <span style={{ padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }}>B</span>
                <span style={{ padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }}>W</span>
                <span style={{ padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }}>G</span>
                <span style={{ padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }}>R</span>
            </div>
        </div>
    );


    return (
        <div style={{ 
            padding: '40px', 
            maxWidth: '450px', 
            margin: '50px auto', 
            textAlign: 'center', 
            backgroundColor: 'white'
        }}>
            
            {/* logo */}
            <img 
                src="/images/logo_boketto_design.png" 
                alt="Boketto Design Logo" 
                style={{ width: '200px', height: 'auto', marginBottom: '50px' }} 
            />

            {/* Vista de Tiendas Asociadas exp */}
            {!isRegistering && <AssociatedStores />}

            <h2 style={{ marginBottom: '30px', color: primaryColor, fontSize: '1.5em' }}>
                {isRegistering ? 'Crear una cuenta' : 'Iniciar Sesión'}
            </h2>
            
            <form onSubmit={handleSubmit}>
                
                {isRegistering && (
                    <div style={{ marginBottom: '15px' }}>
                        <input
                            type="text"
                            name="nombre"
                            value={userData.nombre}
                            onChange={handleChange}
                            required
                            placeholder="Nombre Completo*"
                            style={{ width: '100%', padding: '12px', boxSizing: 'border-box', border: '1px solid #ccc', fontSize: '1em' }}
                        />
                    </div>
                )}
                
                <div style={{ marginBottom: '15px' }}>
                    <input
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                        required
                        placeholder="Correo electrónico*"
                        style={{ width: '100%', padding: '12px', boxSizing: 'border-box', border: '1px solid #ccc', fontSize: '1em' }}
                    />
                </div>
                <div style={{ marginBottom: isRegistering ? '15px' : '5px' }}>
                    <input
                        type="password"
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                        required
                        placeholder="Contraseña*"
                        style={{ width: '100%', padding: '12px', boxSizing: 'border-box', border: '1px solid #ccc', fontSize: '1em' }}
                    />
                </div>
                
                {!isRegistering && (
                    <div style={{ textAlign: 'left', marginBottom: '25px', paddingLeft: '5px' }}>
                        <a href="#" style={{ color: errorColor, textDecoration: 'none', fontSize: '0.9em' }}>
                            ¿Olvidaste tu contraseña?
                        </a>
                    </div>
                )}
                
                {isRegistering && (
                    <div style={{ marginBottom: '25px' }}>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={userData.confirmPassword}
                            onChange={handleChange}
                            required
                            placeholder="Confirmar Contraseña*"
                            style={{ width: '100%', padding: '12px', boxSizing: 'border-box', border: '1px solid #ccc', fontSize: '1em' }}
                        />
                    </div>
                )}
                
                <button type="submit" style={{ 
                    width: '100%', 
                    padding: '12px', 
                    backgroundColor: errorColor, 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '4px', 
                    fontSize: '1.1em',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                }}>
                    {isRegistering ? 'Crear cuenta' : 'Iniciar Sesión'}
                </button>
            </form>
            
            <p style={{ textAlign: 'center', marginTop: '30px', fontSize: '0.9em' }}>
                {isRegistering ? '¿Ya tienes cuenta?' : '¿No tienes cuenta?'}
                <button 
                    type="button"
                    onClick={() => {
                        setIsRegistering(!isRegistering);
                        setUserData({nombre: '', email: '', password: '', confirmPassword: ''}); 
                    }}
                    style={{ background: 'none', border: 'none', color: primaryColor, textDecoration: 'underline', cursor: 'pointer', padding: '0 5px' }}
                >
                    {isRegistering ? 'Iniciar Sesión' : 'Crear cuenta'}
                </button>
            </p>
        </div>
    );
};

export default LoginPage;