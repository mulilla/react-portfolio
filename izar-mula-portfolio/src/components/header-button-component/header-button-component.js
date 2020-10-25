import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

function HeaderButtonComponent() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper className={classes.paper} elevation={0}>
                <span style={{ color: "black", fontSize: 18, fontWeight:'bold', letterSpacing:4.2, marginRight: 20, verticalAlign: 'middle'}}>MENU</span>
                <MenuIcon fontSize='large' style={{ color: "black", verticalAlign: 'middle' }} />
            </Paper>

        </div>
    );
}

export default HeaderButtonComponent;
