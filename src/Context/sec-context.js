import React from 'react';

const secContext = React.createContext({status: {graph: null}, setSect: (stat) => {}});

export default secContext;