import { Route, Routes, Navigate, Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
//import { useContext } from 'react'
//import AuthContext from '../context/AuthContext'

const PrivateRoute = () => {
    const auth = true;
    return auth ? <Outlet /> : <Navigate to="/login" />;
};


export default PrivateRoute;