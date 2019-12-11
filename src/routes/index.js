import * as React from 'react';

import qs from 'query-string';
import RouteParser from 'route-parser';

import App from '../containers/App';

//  PAGES CONTAINERS
import HomePage from '../pages/HomePage';
import ProductProfile from '../pages/ProductProfilePage';

//
// ROUTES
//

const createRoute = (path, routeConfig) => ({ pathname: `${path}`, ...routeConfig });

const HOME = createRoute('/');
const PRODUCT_PROFILE = createRoute('/product/:slug');

const routes = [
    HOME,
    PRODUCT_PROFILE
];


const routesComponentMap = {
    [HOME.pathname]: HomePage,
    [PRODUCT_PROFILE.pathname]: ProductProfile,
};

// UTILS
const matchRoute = (pathname) => {
    return routes.find(routeConfig => {
        return new RouteParser(routeConfig.pathname).match(pathname);
    });
};


//ROUTE RENDERER
export const renderRoute = (routeProps) => {
    const { location: { pathname, search } } = routeProps;
    const routeItem = matchRoute(pathname);

    let routeNode = null;
    let routeParams = null;
    let routeQuery = {};

    if (routeItem && routesComponentMap[routeItem.pathname]) {
        const comp = routesComponentMap[routeItem.pathname]
        routeParams = new RouteParser(routeItem.pathname).match(pathname);
        routeQuery = qs.parse(search);
        routeNode = React.createElement(comp, { routeParams, routeQuery });
    } else {
        routeParams = { pathname, search };
        //routeNode = (<PageNotFound {...{ routeParams }} />);
        routeNode = (<div>404</div>)
    }

    return (
        <App {...{ routeParams, routeQuery }}>
            {routeNode}
        </App>
    )
}