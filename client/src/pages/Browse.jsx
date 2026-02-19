import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import tmdbClient, { requests } from '../api/tmdb';
import Row from '../components/Row';

const Browse = () => {
    const { logout, user } = useAuth();
    const [bannerMovie, setBannerMovie] = useState(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        async function fetchData() {
            try {
                // Fetch Netflix Originals for Banner
                const request = await tmdbClient.get(requests.fetchNetflixOriginals);
                const results = request.data.results;
                setBannerMovie(
                    results[Math.floor(Math.random() * results.length - 1)]
                );
            } catch (error) {
                console.error("Failed to fetch banner movie", error);
            }
        }
        fetchData();
    }, []);

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    };

    return (
        <div className="bg-netflix-black min-h-screen text-white overflow-x-hidden">
            {/* Navbar */}
            <div className={`fixed top-0 w-full p-5 flex justify-between items-center z-50 transition-all duration-500 ${scrolled ? 'bg-black' : 'bg-transparent'}`}>
                <img
                    className="h-6 md:h-8 object-contain cursor-pointer"
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                    alt="Netflix Logo"
                />
                <div className="flex items-center gap-4">
                    <span className="hidden md:block">Welcome, {user?.username}</span>
                    <button onClick={logout} className="bg-red-600 px-4 py-1 rounded text-sm hover:bg-red-700 transition">Logout</button>
                    <img
                        className="h-8 w-8 rounded cursor-pointer"
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                        alt="Avatar"
                    />
                </div>
            </div>

            {/* Banner */}
            <header className="relative h-[448px] md:h-[600px] text-white object-contain flex flex-col justify-end pb-36 pl-4 md:pl-12"
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${bannerMovie?.backdrop_path}")`,
                    backgroundPosition: "top center",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
                <div className="relative z-10 w-full max-w-lg pt-32 md:pt-0">
                    <h1 className="text-3xl md:text-5xl font-bold pb-2 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">
                        {bannerMovie?.title || bannerMovie?.name || bannerMovie?.original_name}
                    </h1>
                    <div className="py-4 flex gap-2">
                        <button className="cursor-pointer text-black bg-white outline-none border-none font-bold rounded px-6 py-2 hover:bg-white/80 transition flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                            Play
                        </button>
                        <button className="cursor-pointer text-white bg-[gray]/50 outline-none border-none font-bold rounded px-6 py-2 hover:bg-[gray]/70 transition flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            More Info
                        </button>
                    </div>
                    <h1 className="text-sm md:text-lg pt-2 max-w-sm md:max-w-xl line-clamp-3 drop-shadow-[1px_1px_2px_rgba(0,0,0,0.8)] font-semibold text-gray-200">
                        {truncate(bannerMovie?.overview, 250)}
                    </h1>
                </div>
            </header>

            {/* Rows */}
            <div className="-mt-14 relative z-20 space-y-4 pb-10">
                <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
                <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
                <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
                <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
                <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
                <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
                <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
                <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
            </div>
        </div>
    );
};

export default Browse;
