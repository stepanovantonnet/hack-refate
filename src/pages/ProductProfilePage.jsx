import React, { useState } from 'react';
// MATERIAL UI
import { makeStyles, Paper, Avatar } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import * as data from '../data';
import InfoCard from '../components/InfoCard';
import WasteBadge from '../components/WasteBadge';
import WasteScoreExtended from '../components/WasteScoreExtended';


const useStyles = makeStyles(theme => ({
    root: {
        padding: `${theme.spacing(1)}px`,
        [theme.breakpoints.up('sm')]: {
            padding: `${theme.spacing(1)}px`
        },
    },

    cardsContainer: {
        position: 'absolute',
        top: '5vh',
        bottom: 0,
        left: 0,
        right: 0
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



        const [about, company] = product
        const [location, components, packaging] = manufacturing
        const [decomposition, waste_score] = waste_impact

        return (
            <div>
                <div className={classes.cardsContainer}>
                    <InfoCard
                        label={'Product'}
                    >
                        <div>
                                <Avatar
                                    style={{
                                        width: 80,
                                        height: 80,
                                    }}
                                >
                                    <img
                                        style={{
                                            width: '100%'
                                        }}
                                        src={`/images/${about.items[0].photo}`}
                                        alt=""
                                    />
                                </Avatar>
                            <Typography variant="subtitle1">
                                {about.items[0].title}
                            </Typography>
                        </div>
                        <div>
                            <div
                                style={{
                                    width: '100%'
                                }}
                            >
                                <img
                                    style={{
                                        width: '100%'
                                    }}
                                    src={`/images/${about.items[0].photo}`}
                                    alt=""
                                />
                            </div>
                            <Typography variant="body2">
                                {about.items[0].description}
                            </Typography>
                            <br />
                            <Typography variant="subtitle1">
                                {company.items[0].title}
                            </Typography>
                            <Typography variant="body2">
                                {company.items[0].description}
                            </Typography>
                        </div>
                    </InfoCard>

                    <InfoCard
                        label={'Manufacturing'}
                    >
                        <div>
                            <WasteBadge
                                score={2}
                                label={'Manufacturing'}
                            />
                        </div>

                        {components && <div>
                            <div
                                style={{
                                    width: '100%'
                                }}
                            >
                                <img
                                    style={{
                                        width: '100%'
                                    }}
                                    src={`/images/${components.items[0].photo}`}
                                    alt=""
                                />
                            </div>
                            <Typography variant="subtitle1">
                                {components.items[0].title}
                            </Typography>
                            <Typography variant="body2">
                                {components.items[0].description}
                            </Typography>
                        </div>}
                        {packaging && (<div>
                            <div
                                style={{
                                    width: '100%'
                                }}
                            >
                                <img
                                    style={{
                                        width: '100%'
                                    }}
                                    src={`/images/${packaging.items[0].photo}`}
                                    alt=""
                                />
                            </div>
                            <Typography variant="subtitle1">
                                {packaging.items[0].title}
                            </Typography>
                            <Typography variant="body2">
                                {packaging.items[0].description}
                            </Typography>
                        </div>)}

                    </InfoCard>

                    <InfoCard
                        label={'Recycling'}
                    >
                        <div>
                            <WasteBadge
                                score={2}
                                label={'Separated'}
                            />
                        </div>

                        <div>
                            <Typography variant="subtitle1">
                                {recycle[0].type}
                            </Typography>
                            <Typography variant="body2">
                                {recycle[0].description}
                            </Typography>
                            <br />
                            <Typography variant="subtitle1">
                                {recycle[1].type}
                            </Typography>
                            <Typography variant="body2">
                                {recycle[1].description}
                            </Typography>
                            <br />
                            <Typography variant="subtitle1">
                                {recycle[2].type}
                            </Typography>
                            <Typography variant="body2">
                                {recycle[2].description}
                            </Typography>
                        </div>
                    </InfoCard>

                    <InfoCard
                        label={'Waste impact'}
                    >
                        <div>
                            <WasteBadge
                                score={waste_score.title}
                                label={waste_score.description}
                            />
                        </div>
                        <div>
                            <WasteScoreExtended
                                score={waste_score.title}
                            />
                        </div>
                    </InfoCard>
                </div>
            </div >
        );
    }
)

export default ProductProfile;
