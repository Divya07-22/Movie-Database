import React, { useEffect, useState } from 'react';
import tmdbClient from '../api/tmdb';

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await tmdbClient.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    return (
        <div className="ml-5 text-white">
            <h2 className="text-xl font-bold mb-2 md:text-2xl">{title}</h2>
            <div className="flex overflow-y-hidden overflow-x-scroll p-5 gap-2 no-scrollbar">
                {movies.map(
                    (movie) =>
                        ((isLargeRow && movie.poster_path) ||
                            (!isLargeRow && movie.backdrop_path)) && (
                            <img
                                key={movie.id}
                                className={`max-h-[100px] object-contain transition-transform duration-450 hover:scale-110 cursor-pointer ${isLargeRow ? "max-h-[250px]" : ""}`}
                                src={`https://image.tmdb.org/t/p/original/${isLargeRow ? movie.poster_path : movie.backdrop_path
                                    }`}
                                alt={movie.name}
                            />
                        )
                )}
            </div>
        </div>
    );
};

export default Row;
