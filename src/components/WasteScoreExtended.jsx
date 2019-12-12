import React from 'react';
// MATERIAL UI
import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: '24px'
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    }
}));

function getSteps() {
    return ['Compostable', 'Medium', 'Non-Compostable'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return `Up to 5 years: Cotton. Rope. `;
        case 1:
            return '6-45 years: Milk Packet (tetra), Nylon Clothes, Leather Shoes.';
        case 2:
            return `46-1,000,000 years: Plastic Bag, Children Diapers, Glass Bottles.`;
        default:
            return 'Unknown step';
    }
}

const WasteScoreExtended = (
    function (props) { //  eslint-disable-line no-unused-vars
        const classes = useStyles();

        //const [activeStep, setActiveStep] = React.useState(0);
        const steps = getSteps();
/* 
        const handleNext = () => {
            setActiveStep(prevActiveStep => prevActiveStep + 1);
        };

        const handleBack = () => {
            setActiveStep(prevActiveStep => prevActiveStep - 1);
        };

        const handleReset = () => {
            setActiveStep(0);
        }; */


        const { score } = props;


        return (
            <div className={classes.root}>
                <Typography variant="body2">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate porro eius inventore dolorem quasi impedit, dignissimos blanditiis.
                </Typography>
                <Stepper
                    activeStep={score} orientation="vertical"
                    style={{
                        padding: '24px 0px'
                    }}
                >
                    {steps.map((label, index) => (
                        <Step key={label}>
                            <StepLabel>
                                <Typography variant="h6">{label}</Typography>
                                <Typography>{getStepContent(index)}</Typography>
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </div>
        );
    }
)

export default WasteScoreExtended;
