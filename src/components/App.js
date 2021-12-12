import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from 'Routes/Profiles/Auth';
import Guest from 'Routes/Profiles/Guest';

import Routes from 'Routes/Routes';
import AppContext from 'store/AppContext';
import Header from './Header';
import NotFound from './NotFound';

export default function App() {
   const checkIsLogged = () => {
      if (sessionStorage.getItem('loggedIn') == 'true') {
         setLoggedIn(true);
      } else {
         setLoggedIn(false);
      }
   };
   const [loggedIn, setLoggedIn] = useState(false);
   const [config, setConfig] = useState({
      ip: '192.168.0.40',
      mask: '255.255.255.0',
      gateway: '',
      mac: 'E8-DE-27-B0-AA-AB',
      timeSource: 'Manual',
      currentTime: 0,
      timeZone: '',
      firstNTP: '',
      secoundNTP: '',
      updateRate: 0,
      deviceName: 'TL-SG2008',
      systemContact: 'www.tp-link.com',
      deviceLocation: 'SHENZEN',
      addressMode: 'Static IP',
      managmentVlan: '1',
      users: [
         { username: 'admin', password: 'admin', permission: 'Admin' },
         {
            username: 'Jarek',
            password: 'admin',
            permission: 'Guest',
         },
      ],
   });

   useEffect(() => {
      checkIsLogged();
   }, []);
   return (
      <Router>
         <div className='App'>
            <Header />
            <AppContext.Provider
               value={[loggedIn, setLoggedIn, config, setConfig]}
            >
               <Switch>
                  {Routes.map((route, index) => {
                     if (route.protected == 'guest') {
                        return (
                           <Guest
                              path={route.path}
                              exact={route.exact}
                              component={route.component}
                           />
                        );
                     }

                     if (route.protected == 'auth') {
                        return (
                           <Auth
                              path={route.path}
                              exact={route.path}
                              component={route.component}
                           />
                        );
                     } else {
                        <Route
                           path={route.path}
                           exact={route.exact}
                           component={route.component}
                        />;
                     }
                  })}

                  <Route path='*'>
                     <NotFound />
                  </Route>
               </Switch>
            </AppContext.Provider>
         </div>
      </Router>
   );
}
