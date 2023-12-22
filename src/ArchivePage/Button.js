import React from 'react';

export default function Button({ category, active, setActive }) {
  return (
    <button className={active === 0 ? 'active' : ''} onClick={() => setActive(0)}>
      {category}
    </button>
  );
}
