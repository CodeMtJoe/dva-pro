import React from 'react';
import {Router,Route,Switch} from 'react-router'
import UserController from './controller/UserController'
function RouterConfig({history}){
    return(
        <Router history={history}>
            <Switch>
                <Route path='/user' exact component={UserController}/>
            
            </Switch>
        </Router>
    )
}
export default RouterConfig;
