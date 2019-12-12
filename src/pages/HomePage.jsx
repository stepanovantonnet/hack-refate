import React, { useState } from 'react';
import clsx from 'clsx';

import { withRouter } from 'react-router-dom'

// MATERIAL UI
import { makeStyles, Paper, Fade } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/CloseOutlined';
import WasteScoreExtended from '../components/WasteScoreExtended';
import WasteBadge from '../components/WasteBadge';
import InfoCard from '../components/InfoCard';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
    root: {
        padding: `${theme.spacing(3)}px`,
        display: "flex",
        flexDirection: 'column'
        /*[theme.breakpoints.up('sm')]: {
            padding: `${theme.spacing(1)}px`
        }, */
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));



const HomePage = withRouter(
    function (props) { //  eslint-disable-line no-unused-vars
        const classes = useStyles();
        const { history } = props;



        const fab =
        {
            color: 'primary',
            className: classes.fab,
            icon: <AddIcon />,
            label: 'Add',
        }


        return (
            <div className={classes.root}>
                <Typography variant="h6">Links</Typography>
                <Button
                    variant="outlined"
                    style={{
                        marginBottom: '24px'
                    }}
                    onClick={() => {
                        history.push('/product/tshirt-octopus')
                    }}
                >
                    T-shirt
                </Button>
                <Button
                    variant="outlined"
                    onClick={() => {
                        history.push('/product/whole-milk')
                    }}
                >
                    Whole milk
                </Button>

                <Fab
                    className={fab.className}
                    color={fab.color}
                    onClick={() => {
                        history.push('/add')
                    }}
                >
                    {fab.icon}
                </Fab>
            </div>
        );
    }
)

export default HomePage;
