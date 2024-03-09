import React from 'react';

export type Country = 'GB' | 'DE';

interface CountrySelectionProps {
  updateCountry: (country: Country) => void;
}

const CountySelection: React.FC<CountrySelectionProps> = ({ updateCountry }) => {
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

export default CountySelection;
