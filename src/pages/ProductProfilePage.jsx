import React, { useState } from 'react';
// MATERIAL UI
import { makeStyles, Paper } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import * as data from '../data';


const useStyles = makeStyles(theme => ({
    root: {
        padding: `${theme.spacing(1)}px`,
        [theme.breakpoints.up('sm')]: {
            padding: `${theme.spacing(1)}px`
        },
    },
    paper: {
        padding: `${theme.spacing(1)}px`,
        [theme.breakpoints.up('sm')]: {
            padding: `${theme.spacing(2)}px`
        },
    },

    expPanel: {
        margin: theme.spacing(2, 0)
    },

    blockItemPaper: {
        margin: theme.spacing(2, 0),
        padding: theme.spacing(2, 2),
    }
}));




const BlockItem = (
    function (props) { //  eslint-disable-line no-unused-vars
        const classes = useStyles();


        const { type, items } = props;

        const [item] = items || [];
        const { title, photo, description } = item || props;

        return (
            <Paper className={classes.blockItemPaper}>
                <Typography variant="caption" color="primary">{type}</Typography>
                {photo && (
                    <div
                        style={{
                            width: '100%'
                        }}
                    >
                        <img
                            style={{
                                width: '100%'
                            }}
                            src={`/images/${photo}`}
                            alt=""
                        />
                    </div>
                )}
                <Typography variant="subtitle1">{title}</Typography>
                <Typography variant="body2">{description}</Typography>

            </Paper>
        );
    }
)



const Block = (
    function (props) { //  eslint-disable-line no-unused-vars
        const classes = useStyles();
        const { title, items, expanded } = props;


        const [open, setOpen] = useState(expanded)
        const handleExpanded = (e, exp) => setOpen(exp)

        return (
            <ExpansionPanel
                elevation={0}
                expanded={open}
                onChange={handleExpanded}
                className={classes.expPanel}
            >
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>{title}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div>

                        {items.map((item, index) => {
                            return <BlockItem key={index} {...item} />
                        })}
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
)



const getProductBySlug = (slug) => {
    const { payload } = data.productsProfiles.find(p => p.slug === slug) || {}
    if (!payload) return null;

    return payload
}

const ProductProfile = (
    function (props) { //  eslint-disable-line no-unused-vars
        const classes = useStyles();

        const { routeParams: { slug } } = props;
        const profile = getProductBySlug(slug);

        if (!profile) {
            return (
                <div>
                    {`${slug} not found`}
                </div>
            )
        }

        const { product, manufacturing, recycle, waste_impact } = profile;

        return (
            <div>
                {/* <Typography variant="h5">
                    ProductProfile {slug}
                </Typography> */}

                <Block
                    title={'Product'}
                    expanded
                    items={product}
                />
                <Block
                    title={'Manufacturing'}
                    items={manufacturing}
                />
                <Block
                    title={'Recycle'}
                    items={recycle}
                />
                <Block
                    title={'Waste impact'}
                    items={waste_impact}
                />

                {/* <Paper className={classes.paper}>
                    <pre
                        style={{
                            width: '100%',
                            whiteSpace: 'pre-wrap'
                        }}
                    >
                        {JSON.stringify(profile, null, 3)}
                    </pre>
                </Paper> */}

            </div>
        );
    }
)

export default ProductProfile;
