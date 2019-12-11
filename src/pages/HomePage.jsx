import React from 'react';
// MATERIAL UI
import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
    root: {
        padding: `${theme.spacing(3)}px`,
        [theme.breakpoints.up('sm')]: {
            padding: `${theme.spacing(1)}px`
        },
    },
}));

const HomePage = (
    function (props) { //  eslint-disable-line no-unused-vars
        const classes = useStyles();

        return (
            <div className={classes.root}>
                <Typography variant="h5">HomePage</Typography>
            </div>
        );
    }
)

export default HomePage;
