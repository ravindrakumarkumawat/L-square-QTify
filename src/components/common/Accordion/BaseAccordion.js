import React from 'react';

const BaseAccordion = ({label, children}) => {
  return (
    <details>
      <summary>{label}</summary>
      {children}
    </details>
  )
}

export default BaseAccordion;
