import React from 'react';

const Loader = ({ size }) => (
  <i
    className="fa fa-circle-o-notch fa-spin"
    style={{ fontSize: size, color: '#FFA500' }} />
);

export default Loader;
