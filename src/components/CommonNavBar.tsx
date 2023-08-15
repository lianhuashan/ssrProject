import React from 'react';
import { Link } from 'react-router-dom';
export default () => {
  return (
    <>
      <ul style={{ display: 'inline-block' }}>
        <li>
          <Link to="/category" />
        </li>
      </ul>
    </>
  );
};
