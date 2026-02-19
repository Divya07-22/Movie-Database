import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        phone: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/auth/register', formData);
            navigate('/login');
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed');
        }
    };

    return (
        <div className="relative h-screen w-full bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg')] bg-no-repeat bg-center bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-50 flex justify-center items-center">
                <div className="bg-black/75 p-16 rounded-md w-full max-w-md">
                    <h2 className="text-white text-3xl font-bold mb-8">Sign Up</h2>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <form onSubmit={handleRegister} className="flex flex-col gap-4">
                        <input
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            type="text"
                            placeholder="Username"
                            className="bg-[#333] p-3 text-white rounded outline-none placeholder-gray-500 focus:bg-[#444]"
                        />
                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            type="email"
                            placeholder="Email"
                            className="bg-[#333] p-3 text-white rounded outline-none placeholder-gray-500 focus:bg-[#444]"
                        />
                        <input
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            type="text"
                            placeholder="Phone (optional)"
                            className="bg-[#333] p-3 text-white rounded outline-none placeholder-gray-500 focus:bg-[#444]"
                        />
                        <input
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            type="password"
                            placeholder="Password"
                            className="bg-[#333] p-3 text-white rounded outline-none placeholder-gray-500 focus:bg-[#444]"
                        />
                        <button className="bg-netflix-red text-white py-3 rounded font-bold mt-6 hover:bg-red-700 transition">
                            Sign Up
                        </button>
                        <p className="text-gray-400 mt-4">
                            Already have an account? <span onClick={() => navigate('/login')} className="text-white hover:underline cursor-pointer">Sign in.</span>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
