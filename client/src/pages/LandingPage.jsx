import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="relative h-screen w-full bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg')] bg-no-repeat bg-center bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav className="px-12 py-5 flex justify-between items-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Logo" className="h-12" />
                    <button
                        onClick={() => navigate('/login')}
                        className="bg-netflix-red text-white py-2 px-6 rounded text-sm font-semibold hover:bg-red-700 transition"
                    >
                        Sign In
                    </button>
                </nav>

                <div className="flex justify-center items-center h-3/4">
                    <div className="text-center text-white px-4">
                        <h1 className="text-5xl font-bold mb-4">Unlimited movies, TV shows, and more.</h1>
                        <h2 className="text-2xl mb-6">Watch anywhere. Cancel anytime.</h2>
                        <p className="text-lg mb-4">Ready to watch? Enter your email to create or restart your membership.</p>
                        <div className="flex justify-center gap-2">
                            <button
                                onClick={() => navigate('/register')}
                                className="bg-netflix-red text-white text-xl px-8 py-3 rounded hover:bg-red-700 transition flex items-center"
                            >
                                Get Started
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
