import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-container">
            <nav className="navbar">
                <div className="logo">🎬 BookMyShow</div>
                <div className="nav-links">
                <Link to="/admin" className="admin-btn">Admin</Link>
                </div>
            </nav>
            <div className="content">
                <h1>Welcome to BookMyShow!</h1>
                <p>"Book your favorite movies with ease!"</p>
                <div className="btn-container">
                    <Link to="/register" className="btn">REGISTER</Link>
                    <Link to="/login" className="btn">LOGIN</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
