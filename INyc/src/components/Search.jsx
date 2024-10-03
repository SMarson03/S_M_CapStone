import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Search() {
    const [items, setItems] = useState([]);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const responses = await Promise.all([
                    fetch('http://localhost:8080/INyc/restaurants'), // Replace with your first API endpoint
                    fetch('http://localhost:8080/INyc/arts'), // Replace with your second API endpoint
                    fetch('http://localhost:8080/INyc/events')  // Add more as needed
                ]);

                const dataPromises = responses.map(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                });

                const dataArrays = await Promise.all(dataPromises);
                const combinedData = dataArrays.flat(); // Flatten the arrays into one

                setItems(combinedData);
            } catch (error) {
                setError('An error occurred. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const filteredItems = items.filter((item) =>
        item.location && item.location.toLowerCase().includes(query.toLowerCase())
    );

    const handleItemClick = (item) => {
        const currentPath = location.pathname;
        const newPath = `/SearchResults/${item.id}`; // Adjust as needed based on your item structure

        if (currentPath === newPath) {
            navigate(newPath, { replace: true });
        } else {
            navigate(newPath);
        }

        setQuery('');
        window.location.reload();
    };

    return (
        <div className='search-box' style={{border: '2px solid black'}}>
            <input
                type='text'
                placeholder='Search...'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : query && filteredItems.length > 0 ? (
                <ul>
                    {filteredItems.map(item => (
                        <li key={item.id} onClick={() => handleItemClick(item)}>
                            {item.location}
                        </li>
                    ))}
                </ul>
            ) : query ? (
                <p>No Items Found</p>
            ) : null}
        </div>
    );
}

export default Search;
