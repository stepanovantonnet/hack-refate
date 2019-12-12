import React from 'react';
// MATERIAL UI
import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1, 0)
        /*[theme.breakpoints.up('sm')]: {
            padding: `${theme.spacing(1)}px`
        }, */
    },
}));

const WasteBadge = (
    function (props) { //  eslint-disable-line no-unused-vars
        const classes = useStyles();

        const { score, label } = props;


        const scoreMap = ['','green', 'blue', 'red']

        const color = scoreMap[score];
        return (
            <div className={classes.root}>
                <Chip
                    avatar={<Avatar
                        style={{
                            backgroundColor: color,
                            color: '#FFF'
                        }}
                    >{score}</Avatar>}
                    label={label}
                    clickable
                    //color="primary"
                    variant="outlined"
                    style={{
                        color: color,
                        borderColor: color,
                    }}
                />
            </div>
        );
    }
)

export default WasteBadge;
