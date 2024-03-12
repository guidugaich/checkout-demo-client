import React from 'react';

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
        <img src="src/assets/gb.png "/>
      </button>
      <button
        className={country === 'DE' ? 'selectedCountry' : ''}
        onClick={() => updateCountry('DE')}
      >
        <img src="src/assets/de.png "/>
      </button>
    </div>
  );
}

export default CountrySelection;
