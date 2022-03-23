import { useContext } from 'react';
import Loading from 'components/Loading';
import { Redirect, Route } from 'react-router';
import AppContext from 'store/AppContext';

export default function AuthRoute(props) {
  const { loggedIn } = useContext(AppContext);

  if (loggedIn == null) {
    return <Loading />;
  }
  if (loggedIn) return <Route {...props} />;

  return <Redirect to="/auth" />;
}
