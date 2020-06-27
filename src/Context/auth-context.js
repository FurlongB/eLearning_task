import React from 'react';

const authContext = React.createContext({status: {ID: null}, login: (stat) => {}});

export default authContext;