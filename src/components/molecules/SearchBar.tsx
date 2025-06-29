import React from 'react';
import { FiSearch, FiMic } from 'react-icons/fi';
import { Input } from '@/components/atoms/Input';

const SearchBar: React.FC = () => (
  <form
    role="search"
    aria-label="Site search"
    className="flex items-center w-full max-w-md"
  >
    <label htmlFor="search" className="sr-only">
      Search
    </label>
    <Input
      id="search"
      name="search"
      type="search"
      placeholder="Search"
      className="rounded-l-md rounded-tr-none rounded-br-none"
      autoComplete="off"
      aria-label="Search"
    />
    <button
      type="submit"
      aria-label="Submit search"
      className="p-2 bg-accent border-l rounded-r-md border-input hover:bg-accent/70"
    >
      <FiSearch size={20} />
    </button>
    <button
      type="button"
      aria-label="Voice search"
      className="ml-2 p-2 rounded-full hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary"
    >
      <FiMic size={20} />
    </button>
  </form>
);

export default SearchBar;