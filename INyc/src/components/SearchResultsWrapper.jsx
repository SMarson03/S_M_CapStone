import React from 'react';
import { useParams } from 'react-router-dom';
import SearchResults from './SearchResults';

function SearchResultsWrapper({ items, onItemClick }) {
    const { id } = useParams();
    
    // Find the specific item based on the ID
    const selectedItem = items.find(item => item.id === id);

    return (
        <div>
            {selectedItem ? (
                <SearchResults items={[selectedItem]} onItemClick={onItemClick} />
            ) : (
                <p>Item not found</p>
            )}
        </div>
    );
}

export default SearchResultsWrapper;

