import React from 'react';
import { Route, Switch } from 'react-router';
import Game from '../pages/game';
import Notfound from '../pages/notFound';
import GameResult from '../pages/result';

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path={'/result'} component={GameResult} />
            <Route exact path={'/'} component={Game} />
            <Route path={'*'} component={Notfound} />
        </Switch>
    );
};

export default AppRouter;
