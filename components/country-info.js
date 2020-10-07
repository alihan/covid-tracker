import React from 'react';

function Country({ country, cases }) {
  const info = [country];

  const item = info.map((index) => (
    <li key={index}>
      country{country}, cases{cases}
    </li>
  ));
  return item;
}

export default Country;
