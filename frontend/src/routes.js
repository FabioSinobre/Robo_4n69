/* eslint-disable import/no-anonymous-default-export */
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import WhoWeAre from './pages/WhoWeAre';
import Control from './pages/Control';
import Login from 'pages/Login';
export default () => {

    return (
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>

            <Route exact path='/Login'>
                <Login />
            </Route>

            <Route exact path='/WhoWeAre'>
                <WhoWeAre />
            </Route>

            <Route exact path='/Control'>
                <Control />
            </Route>

        </Switch>
    );
}
