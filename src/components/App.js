import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  MemoryRouter,
} from 'react-router-dom';
import Auth from 'Routes/Profiles/Auth';
import Guest from 'Routes/Profiles/Guest';

import Routes from 'Routes/Routes';
import AppContext from 'store/AppContext';
import Header from './Header';
import NotFound from './NotFound';
import defaultConfig from 'store/defaultConfig';
import Main from 'Routes/Pages/Main';

export default function App() {
  const checkIsLogged = () => {
    if (sessionStorage.getItem('loggedIn') == 'true') {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  };
  const [loggedIn, setLoggedIn] = useState(false);
  const [config, setConfig] = useState({ ...defaultConfig });
  //#TODO:zrobić z tym defaultConfigem, że jeśli istnieje w localStorage to tego użyć
  useEffect(() => {
    checkIsLogged();
  }, []);
  return (
    <MemoryRouter>
      <div className="App">
        <Header />
        <AppContext.Provider
          value={{ loggedIn, setLoggedIn, config, setConfig }}
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

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </AppContext.Provider>
      </div>
    </MemoryRouter>
  );
}
