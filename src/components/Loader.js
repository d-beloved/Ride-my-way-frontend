import React from 'react';

const Loader = ({ size }) => (
  <i
    className="fa fa-circle-o-notch fa-spin"
    style={{ fontSize: size, color: '#e2ddd7' }} />
);

export default Loader;
