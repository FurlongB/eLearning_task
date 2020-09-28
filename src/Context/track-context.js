import React from 'react';

const secContext = React.createContext({status:{section: null, page: null, completion:null}, setTrack: (stat) => {}});

export default secContext;