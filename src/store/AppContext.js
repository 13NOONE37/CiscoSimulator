import { createContext } from 'react';

const AppContext = createContext({
   loggedIn: null,
   setLoggedIn: null,
   config: {},
   setConfig: null,
});

export default AppContext;
