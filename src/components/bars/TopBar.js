import React, { useState } from 'react';
import {
    Box,
    Switch,
    Typography,
    FormControlLabel,
    IconButton,
    Tooltip,
    Paper,
    Icon,
    Button,
    Divider,
    Menu,
    MenuItem,
} from '@material-ui/core';
import { useStyles } from './TopBar.style';

import PersonIcon from '@material-ui/icons/Person';
import TranslateIcon from '@material-ui/icons/Translate';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const TopBar = ({ darkTheme, toggleTheme }) => {
    const classes = useStyles();
    const [isMenuLanguageOpen, setIsMenuLanguageOpen] = useState(false);

    const handleMenuLanguageClick = (event) => {
        setIsMenuLanguageOpen(event.currentTarget);
    };

    const handleMenuLanguageClose = () => {
        setIsMenuLanguageOpen(false);
    };

    const menuLanguageItemClick = () => {
        handleMenuLanguageClose();
    };

    return (
        <Paper className={classes.topbarContainer} elevation={2} square>
            <Box className={classes.changeTheme}>
                <Tooltip title={darkTheme ? 'Change to Light Theme' : 'Change to Dark Theme'} arrow>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={darkTheme}
                                onChange={(event) => toggleTheme(event)}
                                name="changeTheme"
                                color="primary"
                            />
                        }
                        label="Theme"
                    />
                </Tooltip>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box className={classes.language}>
                <Tooltip title="Change language" arrow>
                    <Button
                        startIcon={<TranslateIcon />}
                        className={classes.button}
                        onClick={handleMenuLanguageClick}
                    >
                        English
                        <ArrowDropDownIcon />
                    </Button>
                </Tooltip>
                <Menu
                    anchorEl={isMenuLanguageOpen}
                    keepMounted
                    open={isMenuLanguageOpen}
                    onClose={handleMenuLanguageClose}
                >
                    <MenuItem onClick={menuLanguageItemClick}>English</MenuItem>
                    <MenuItem onClick={menuLanguageItemClick}>Suomi</MenuItem>
                </Menu>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box className={classes.login}>
                <Tooltip title="Login" arrow>
                    <Button startIcon={<PersonIcon />} className={classes.button}>
                        Login
                    </Button>
                </Tooltip>
            </Box>
        </Paper>
    );
};

export default TopBar;
