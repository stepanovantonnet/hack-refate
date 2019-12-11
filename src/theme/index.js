import { createMuiTheme } from '@material-ui/core/styles';

/*
xs, extra-small: 0px
sm, small: 600px
md, medium: 960px
lg, large: 1280px
xl, extra-large: 1920px
*/

 const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
        //fontFamily: 'Montserrat, Roboto, Arial, sans-serif',
    },
    /* palette: {
        primary: {
            main: '#EDD136',
        },
        secondary: {
            //main: '#FA9103'
            main: '#000'
        },
    }, */
});
export default theme;
