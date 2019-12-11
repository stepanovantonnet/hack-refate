import React from 'react';
// MATERIAL UI
import { makeStyles, Paper } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'


import * as data from '../data';


const useStyles = makeStyles(theme => ({
    root: {
        padding: `${theme.spacing(3)}px`,
        [theme.breakpoints.up('sm')]: {
            padding: `${theme.spacing(1)}px`
        },
    },
    paper: {
        padding: `${theme.spacing(3)}px`,
    },
}));


const getProductBySlug = (slug) => {
    return data.productsProfiles.find(p => p.slug === slug)
}

const ProductProfile = (
    function (props) { //  eslint-disable-line no-unused-vars
        const classes = useStyles();

        const { routeParams: { slug } } = props;
        const profile = getProductBySlug(slug);
        return (
            <div className={classes.root}>
                <Typography variant="h5">
                    ProductProfile {slug}
                </Typography>
                <Paper className={classes.paper}>
                    <pre
                        style={{
                            width: '100%',
                            whiteSpace: 'pre-wrap'
                        }}
                    >
                        {JSON.stringify(profile, null, 3)}
                    </pre>
                </Paper>

            </div>
        );
    }
)

export default ProductProfile;
