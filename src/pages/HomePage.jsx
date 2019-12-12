import React, { useState } from 'react';
import clsx from 'clsx';
// MATERIAL UI
import { makeStyles, Paper, Fade } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/CloseOutlined';
import WasteScoreExtended from '../components/WasteScoreExtended';
import WasteBadge from '../components/WasteBadge';
import InfoCard from '../components/InfoCard';

const useStyles = makeStyles(theme => ({
    root: {
        //padding: `${theme.spacing(2)}px`,
        position: 'relative',
        /*[theme.breakpoints.up('sm')]: {
            padding: `${theme.spacing(1)}px`
        }, */
    },
}));




const HomePage = (
    function (props) { //  eslint-disable-line no-unused-vars
        const classes = useStyles();

        return (
            <div className={classes.root}>
                <div className={classes.cardsContainer}>
                    <InfoCard
                        label={'Product'}
                    >
                        <Typography variant="subtitle1">Product summary</Typography>
                        <Typography variant="subtitle1">Product Expanded</Typography>
                    </InfoCard>

                    <InfoCard
                        label={'Manufacturing'}
                    >
                        <Typography variant="subtitle1">Manufacturing summary</Typography>
                        <Typography variant="subtitle1">Manufacturing  Expanded</Typography>
                    </InfoCard>
                    <InfoCard
                        label={'Recycling'}
                    >
                        <Typography variant="subtitle1">Recycling summary</Typography>
                        <Typography variant="subtitle1">Recycling  Expanded</Typography>
                    </InfoCard>

                    <InfoCard
                        label={'Waste impact'}
                    >
                        <div>
                            <WasteBadge
                                score={1}
                                label={'Compostable'}
                            />
                            {/* <WasteBadge
                                score={2}
                                label={'recyclable'}
                            />
                            <WasteBadge
                                score={3}
                                label={'non-recyclable'}
                            /> */}
                        </div>
                        <div>
                            <WasteScoreExtended
                                score={1}
                            />
                        </div>
                    </InfoCard>
                </div>
            </div>
        );
    }
)

export default HomePage;
