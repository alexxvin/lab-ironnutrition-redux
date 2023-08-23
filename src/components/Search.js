import { Divider, Input } from 'antd';
import { useState } from 'react';

function Search({ searchFood }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
    searchFood(searchTerm);
  };
  return (
    <div>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input
        value={searchTerm}
        type="text"
        onChange={() => handleSearchInput(searchTerm)}
      />
    </div>
  );
}
export default Search;
