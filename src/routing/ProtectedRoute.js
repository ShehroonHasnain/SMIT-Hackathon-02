import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component }) => {
    // Replace with your actual authentication logic
    const isAuthenticated = localStorage.getItem('token');

    return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

export default ProtectedRoute;