import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#00ffff', // Cyan color
                fontFamily: 'Arial, sans-serif',
                fontSize: '24px',
                color: '#ffffff', // White color
                opacity: isVisible ? 1 : 0, // Apply fade-in animation
                transition: 'opacity 0.5s ease-in-out',
            }}
        >
            <div style={{ textAlign: 'center' }}>
                <h1 style={{ fontSize: '48px', marginBottom: '16px' }}>404</h1>
                <p style={{ marginBottom: '24px' }}>Oops! Page not found.</p>
                <p>Please check the URL or go back to the homepage.</p>
                {/* Replace the 'homepage-url' with the actual URL of your homepage */}
                <Link to='/'>
                    <a href="homepage-url" style={{ color: '#ffffff', textDecoration: 'underline' }}>
                        Go to Homepage
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
