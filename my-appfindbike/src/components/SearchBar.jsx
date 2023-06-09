import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    onSearch(search); // call onSearch with the current search value
    setSearch(''); // clear the search field after submitting
  }

  return (
    <form onSubmit={onSubmit} style={styles.container}>
      <input 
        type="text" 
        placeholder="Search location" 
        style={styles.input}
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <button type="submit" style={styles.button}>Search</button>
    </form>
  )
}

const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '20px',
    },
    input: {
      marginRight: '10px',
      height: '20px',
      borderRadius: '3px',
      border: '1px solid #ddd',
      padding: '5px',
    },
    button: {
      height: '30px',
      border: 'none',
      borderRadius: '3px',
      backgroundColor: '#4CAF50',
      color: 'white',
      cursor: 'pointer',
    }
}

export default SearchBar;
