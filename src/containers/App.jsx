import React, { PureComponent, useEffect } from 'react';
import PropTypes from 'prop-types';
// MATERIAL UI
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { makeStyles, Typography } from '@material-ui/core'

import theme from '../theme/index';



const useStyles = makeStyles(theme => ({
    root: {
        /* padding: `${theme.spacing(3)}px`,
        [theme.breakpoints.up('sm')]: {
            padding: `${theme.spacing(1)}px`
        }, */
    },
}));

const App = (
    function (props) { //  eslint-disable-line no-unused-vars
        const classes = useStyles();
        const { children } = props;
        return (
            <div className={classes.root}>
                {children}
            </div>
        );
    }
)

/*
* About  App
*/
class AppContainer extends PureComponent {

    render() {
        const { children } = this.props;
        return (
            <React.Fragment>
                <CssBaseline />
                <MuiThemeProvider theme={theme}>
                    <App {...this.props}>
                        {children}
                    </App>
                </MuiThemeProvider>
            </React.Fragment>
        );
    }
}
AppContainer.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]).isRequired,
};
AppContainer.defaultProps = {};
AppContainer.displayName = 'AppContainer';

export default AppContainer;
