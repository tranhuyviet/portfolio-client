import React from 'react';
import {
    Box,
    Switch,
    FormControlLabel,
    Tooltip,
    Paper,
    Button,
    Divider,
    IconButton,
} from '@material-ui/core';
import { useStyles } from './TopBar.style';

import PersonIcon from '@material-ui/icons/Person';
import ColorLensIcon from '@material-ui/icons/ColorLens';
// import TranslateIcon from '@material-ui/icons/Translate';
// import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const TopBar = ({
    darkTheme,
    toggleTheme,
    primaryColorIndex,
    setPrimaryColorIndex,
    primaryColors,
}) => {
    const classes = useStyles();
    // const [isMenuLanguageOpen, setIsMenuLanguageOpen] = useState(false);

    // const handleMenuLanguageClick = (event) => {
    //     setIsMenuLanguageOpen(event.currentTarget);
    // };

    // const handleMenuLanguageClose = () => {
    //     setIsMenuLanguageOpen(false);
    // };

    // const menuLanguageItemClick = () => {
    //     handleMenuLanguageClose();
    // };
    const primaryColorHandler = () => {
        if (primaryColorIndex >= primaryColors.length - 1) {
            setPrimaryColorIndex(0);
        } else {
            setPrimaryColorIndex((prev) => prev + 1);
        }
    };

    return (
        <Paper className={classes.topbarContainer} elevation={2} square>
            <Box>
                <Tooltip title="Change the main color" arrow>
                    <FormControlLabel
                        control={
                            <IconButton
                                style={{
                                    color: primaryColors[primaryColorIndex + 1]
                                        ? primaryColors[primaryColorIndex + 1]
                                        : primaryColors[0],
                                }}
                                onClick={primaryColorHandler}
                            >
                                <ColorLensIcon />
                            </IconButton>
                        }
                        label="Color"
                    />
                </Tooltip>
            </Box>

            <Divider orientation="vertical" flexItem color="inherit" className={classes.divider} />
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
            {/* <Divider orientation="vertical" flexItem />
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
            </Box> */}
            <Divider orientation="vertical" flexItem color="inherit" className={classes.divider} />
            <Box className={classes.login}>
                <Tooltip title="Login" arrow>
                    <Button startIcon={<PersonIcon />} className={classes.button} color="inherit">
                        Login
                    </Button>
                </Tooltip>
            </Box>
        </Paper>
    );
};

export default TopBar;
