import React from 'react';
// MATERIAL UI
import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { withRouter } from 'react-router-dom';
import { object } from 'prop-types';

const useStyles = makeStyles(theme => ({
    root: {
        /* padding: `${theme.spacing(3)}px`,
        [theme.breakpoints.up('sm')]: {
            padding: `${theme.spacing(1)}px`
        }, */
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        transform: 'translateX(-50%)',
        left: '50%',
        //right: theme.spacing(2),
        //left: theme.spacing(2),
    },
}));

const AddProductPage = withRouter(
    function (props) { //  eslint-disable-line no-unused-vars
        const classes = useStyles();

        const { history } = props;

        const fab =
        {
            color: 'secondary',
            className: classes.fab,
            icon: <AddIcon />,
            label: 'Add',
        }

        return (
            <div className={classes.root}>
                <div
                    style={{
                        width: '100%',
                        height: '100vh'
                    }}
                >
                    <img
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'

                        }}
                        src={`/images/grocery-store-2.jpg`}
                        alt=""
                    />
                </div>
                <Fab
                    className={fab.className}
                    color={fab.color}
                    onClick={() => {
                        history.push('/product/whole-milk')
                    }}
                >
                    {fab.icon}
                </Fab>
            </div>
        );
    }
)

export default AddProductPage;
