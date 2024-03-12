import React from 'react';
import gbFlagIcon from '../assets/gb.png'
import deFlagIcon from '../assets/de.png'

export type Country = 'GB' | 'DE';

interface CountrySelectionProps {
  updateCountry: (country: Country) => void;
  country: Country;
}

export const countryCurrencyMap = {
  'GB': 'GBP',
  'DE': 'EUR'
};

const CountrySelection: React.FC<CountrySelectionProps> = ({ updateCountry, country }) => {
  console.log('country', country);
  
  return (
    <div className='countrySelection'>
      <p>Select your country</p>
      <button
        className={country === 'GB' ? 'selectedCountry' : ''}
        onClick={() => updateCountry('GB')}
      >
        <img src={gbFlagIcon} />
      </button>
      <button
        className={country === 'DE' ? 'selectedCountry' : ''}
        onClick={() => updateCountry('DE')}
      >
        <img src={deFlagIcon} />
      </button>
    </div>
  );
}

export default CountrySelection;
