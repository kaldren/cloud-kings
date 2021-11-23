import { Navigate } from 'react-router';
import { isAuthenticated } from './auth';

export function RequireAuth({ children }) {
    return isAuthenticated() === true ? children : <Navigate to="/login" replace />;
}

export function RequireNotAuth({ children }) {
    return isAuthenticated() === false ? children : <Navigate to="/" replace />;
}