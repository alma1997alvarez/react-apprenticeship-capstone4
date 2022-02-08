import React from 'react';
import { SearchbarInput } from './Searchbar.styled';
const Searchbar: React.FC = () => {
  return (
    <SearchbarInput
      type="text"
      placeholder="Search something..."
    />
  );
};

export default Searchbar;
