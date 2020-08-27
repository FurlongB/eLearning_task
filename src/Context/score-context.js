import React from 'react';

const scoreContext = React.createContext({status: {scores: [0,0,0,0,0,0,0,0,0,0,0,0]}, setScre: (stat) => {}});

export default scoreContext;
