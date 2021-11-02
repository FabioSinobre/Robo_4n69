import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import WhoWeAre from './pages/WhoWeAre';
import Control from './pages/Control';

export default () => {

    return (
        <Switch>
            <Route exact path='/'>
                <Home />
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
