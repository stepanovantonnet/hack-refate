import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Router, Switch, Route } from 'react-router-dom';
import { renderRoute } from '../routes';

export default class Root extends Component {
    render() {
        const { history } = this.props;
        return (
            <Router history={history} >
                <Switch>
                    <Route path="/" render={renderRoute} />
                </Switch>
            </Router>
        );
    }
}

Root.propTypes = {
    history: PropTypes.object.isRequired
};
