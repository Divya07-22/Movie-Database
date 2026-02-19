import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const result = await login(username, password);
        if (result.success) {
            navigate('/browse');
        } else {
            setError(result.message);
        }
    };

    return (
        <div className="relative h-screen w-full bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg')] bg-no-repeat bg-center bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-50 flex justify-center items-center">
                <div className="bg-black/75 p-16 rounded-md w-full max-w-md">
                    <h2 className="text-white text-3xl font-bold mb-8">Sign In</h2>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <form onSubmit={handleLogin} className="flex flex-col gap-4">
                        <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            type="text"
                            placeholder="Username"
                            className="bg-[#333] p-3 text-white rounded outline-none placeholder-gray-500 focus:bg-[#444]"
                        />
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Password"
                            className="bg-[#333] p-3 text-white rounded outline-none placeholder-gray-500 focus:bg-[#444]"
                        />
                        <button className="bg-netflix-red text-white py-3 rounded font-bold mt-6 hover:bg-red-700 transition">
                            Sign In
                        </button>
                        <div className="flex justify-between items-center text-sm text-gray-400 mt-2">
                            <div>
                                <input type="checkbox" id="remember" className="mr-1" />
                                <label htmlFor="remember">Remember me</label>
                            </div>
                            <span className="hover:underline cursor-pointer">Need help?</span>
                        </div>
                        <p className="text-gray-400 mt-10">
                            New to Netflix? <span onClick={() => navigate('/register')} className="text-white hover:underline cursor-pointer">Sign up now.</span>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
