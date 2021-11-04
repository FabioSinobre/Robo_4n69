import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import QuemSomos from './pages/QuemSomos'
import Controle from './pages/Controle'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    return (
        <Switch>
            <Route exact path='/'>
                <Home/>
            </Route>
        
            <Route exact path='/login'>
                <Login/>
            </Route>

            <Route exact path='/quemSomos'>
                <QuemSomos/>
            </Route>

            <Route exact path='/controle'>
                <Controle/>
            </Route>
        </Switch>
    );    
}
