import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative mb-4">
      <input
        type="text"
        placeholder="Search stories..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-10 pr-4 py-2 border border-hnblue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hnblue-500 bg-white text-hnblue-800 placeholder-hnblue-400"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-hnblue-400" />
    </div>
  );
};

export default SearchBar;