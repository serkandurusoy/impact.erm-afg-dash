import React from 'react';

// eslint-disable-next-line react/prop-types
const AmountSpentChartSelector = ({ toggleDisplayHHNeeds, displayHHNeeds }) => (
  <select
    className="graph__filter"
    value={displayHHNeeds}
    onChange={toggleDisplayHHNeeds}
  >
    {[
      { v: 'Blankets', l: 'Blankets' },
      { v: 'Clothes', l: 'Clothes' },
      { v: 'DebtRepayment', l: 'Debt Repayment' },
      { v: 'Education', l: 'Education' },
      { v: 'Food', l: 'Food' },
      { v: 'HygieneItems', l: 'Hygiene Items' },
      { v: 'Health', l: 'Health' },
      { v: 'KitchenItems', l: 'Kitchen Items' },
      { v: 'Rent', l: 'Rent' },
      { v: 'Saved', l: 'Saved' },
      { v: 'ShelterRepair', l: 'Shelter Repair' },
      { v: 'Transportation', l: 'Transportation' },
      { v: 'Utilities', l: 'Utilities' },
    ].map(({ v, l }) => (
      <option key={v} value={`AmountSpentOnHHNeeds${v}`}>
        {l}
      </option>
    ))}
  </select>
);

export default AmountSpentChartSelector;
