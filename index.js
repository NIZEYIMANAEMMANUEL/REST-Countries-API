// In a separate API file (api.js)
import axios from 'axios';

const baseURL = 'https://restcountries.com/v3.1/all';

export const fetchCountries = async () => {
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    console.error('Error fetching countries:', error);
  }
};

// i can similarly create other functions to fetch data by country code, region, etc.

// In my component file (e.g., Home.js)
import React, { useState, useEffect } from 'react';
import { fetchCountries } from './api';

const Home = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchCountries().then(data => setCountries(data));
  }, []);

  return (
    <div>
      {/* Render countries here */}
    </div>
  );
};

export default Home;
// In my component file (e.g., Home.js)
const Home = () => {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchCountries().then(data => setCountries(data));
  }, []);

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by country name..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      {/* Render filtered countries here */}
    </div>
  );
};
// In a new component file (e.g., CountryDetail.js)
import React from 'react';

const CountryDetail = ({ country }) => {
  return (
    <div>
      {/* Render detailed information about the selected country */}
    </div>
  );
};

export default CountryDetail;
