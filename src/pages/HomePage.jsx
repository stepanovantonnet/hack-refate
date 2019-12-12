import React, { useState } from 'react';
import clsx from 'clsx';
// MATERIAL UI
import { makeStyles, Paper, Fade } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/CloseOutlined';

const useStyles = makeStyles(theme => ({
    root: {
        //padding: `${theme.spacing(2)}px`,
        position: 'relative',
        /*[theme.breakpoints.up('sm')]: {
            padding: `${theme.spacing(1)}px`
        }, */
    },
    cardsContainer: {
        position: 'absolute',
        top: '5vh',
        bottom: 0,
        left: 0,
        right: 0
    },

    infoCardPaper: {
        position: 'relative',
        height: '150px',
        width: '90vw',
        left: '5vw',
        backgroundColor: '#c0c0c0',
        //margin: theme.spacing(2, 2),
        padding: theme.spacing(2, 2),
        transition: 'all 150ms ease-in-out'
    },
    infoCardPaperExpanded: {
        top: '0',
        position: 'fixed',
        backgroundColor: '#fff',
        height: '100vh',
        width: '100vw',
        left: 0,
        zIndex: '100'

    },
}));



const InfoCard = (
    function (props) { //  eslint-disable-line no-unused-vars
        const classes = useStyles();

        const { children } = props

        const [expanded, setExpanded] = useState(false)
        console.log('expanded:', expanded)


        const paperClasses = clsx(
            classes.infoCardPaper,
            { [classes.infoCardPaperExpanded]: expanded }
        )

        console.log('paperClasses:', paperClasses)

        const handleOpen = () => {
            !expanded && setExpanded(true)
        }
        const handleClose = () => {
            setExpanded(false)
        }

        const [summaryInfo, expandedInfo] = children;

        return (
            <Paper
                className={paperClasses}
                elevation={1}
                style={{
                    borderRadius: '3px'
                }}
                onClick={handleOpen}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: "10px",
                        right: '10px',
                    }}
                >
                    <Fade in={expanded} timeout={300}>
                        <IconButton
                            color="inherit"
                            onClick={handleClose}
                        >
                            <CloseIcon /* style={{ color: '#F0F0F0' }} */ />
                        </IconButton>
                    </Fade>
                </div>
                <div>
                    {summaryInfo}
                    {expanded && expandedInfo}
                </div>
            </Paper>
        );
    }
)



const HomePage = (
    function (props) { //  eslint-disable-line no-unused-vars
        const classes = useStyles();

        return (
            <div className={classes.root}>
                <div className={classes.cardsContainer}>
                    <InfoCard>
                        <Typography variant="subtitle1">Product</Typography>
                        <Typography variant="subtitle1">Product Expanded</Typography>
                    </InfoCard>

                    <InfoCard>
                        <Typography variant="subtitle1">Manufacturing</Typography>
                        <Typography variant="subtitle1">Manufacturing  Expanded</Typography>
                    </InfoCard>
                    <InfoCard>
                        <Typography variant="subtitle1">Recycling</Typography>
                        <Typography variant="subtitle1">Recycling  Expanded</Typography>
                    </InfoCard>

                    <InfoCard>
                        <div>
                            <Typography variant="subtitle1">Waste</Typography>
                        </div>
                        <Typography variant="subtitle1">Waste  Expanded</Typography>
                    </InfoCard>
                </div>
            </div>
        );
    }
)

export default HomePage;
