import React from 'react';
import PropTypes from 'prop-types';

import { AppBar, Toolbar, Typography, Button, IconButton} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

const styles = () => ({
    root: {
        width: '100%',
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
});

const Header = (props) => (
    <div id='header' className={props.classes.root}>
        <AppBar position="static">
            <Toolbar>
                <IconButton className={props.classes.menuButton} color="contrast" aria-label="Menu">
                    <MenuIcon />
                </IconButton>
                <Typography type="title" color="inherit" className={props.classes.flex}>
                    Bridge UI Editor - {props.title}
                </Typography>
                <Button color="contrast" onClick={props.addNew}>New Theme</Button>
                <Button color="contrast" onClick={props.sendTheme}>Send Theme</Button>
            </Toolbar>
        </AppBar>
    </div>
);

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    addNew: PropTypes.func.isRequired,
    sendTheme: PropTypes.func.isRequired,
    title: PropTypes.string,
};

export default withStyles(styles)(Header);
