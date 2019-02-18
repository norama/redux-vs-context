import React, {useContext} from 'react';

import {ThemeContext} from './providers';

import './App.css';

function App({food, searchTerm, setSearchTerm}) {
  return (
    <div>
      <div className="search">
        <SearchInput searchTerm={searchTerm} />
      </div>
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Origin</th>
          <th>Continent</th>
        </tr>
        </thead>
        <tbody>
        {food.map(theFood => (
          <tr key={theFood.name}>
            <td>{theFood.name}</td>
            <td>{theFood.origin}</td>
            <td>{theFood.continent}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

function SearchInput({searchTerm}) {

    const { setSearchTerm } = useContext(ThemeContext);

    return(
        <input
            type="text"
            name="search"
            placeholder="Search"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
        />
    );

}

export default App;