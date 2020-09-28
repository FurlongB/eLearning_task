import React from 'react';

const scoreContext = React.createContext({status: {scores: null}, setScre: (stat) => {}});

export default scoreContext;
