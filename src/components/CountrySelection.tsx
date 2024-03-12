import React from 'react';

export type Country = 'GB' | 'DE';

interface CountrySelectionProps {
  updateCountry: (country: Country) => void;
}

export const countryCurrencyMap = {
  'GB': 'GBP',
  'DE': 'EUR'
};

const CountrySelection: React.FC<CountrySelectionProps> = ({ updateCountry }) => {
  return (
    <>
      <button onClick={() => updateCountry('GB')}>
        GB
      </button>
      <button onClick={() => updateCountry('DE')}>
        DE
      </button>
    </>
  );
}

export default CountrySelection;
