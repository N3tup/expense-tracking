import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    Container,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    useTheme,
    useMediaQuery
} from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
    { label: 'Home', path: '/', icon: <HomeIcon /> },
    { label: 'Statistics', path: '/statistics', icon: <BarChartIcon /> },
    { label: 'Settings', path: '/settings', icon: <SettingsIcon /> },
];

export const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const location = useLocation();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <List>
            {navItems.map((item) => (
                <ListItem
                    key={item.label}
                    component={Link}
                    to={item.path}
                    onClick={handleDrawerToggle}
                    selected={location.pathname === item.path}
                    sx={{
                        color: 'inherit',
                        '&.Mui-selected': {
                            bgcolor: 'primary.light',
                            '&:hover': {
                                bgcolor: 'primary.light',
                            }
                        }
                    }}
                >
                    <Box sx={{ mr: 2 }}>{item.icon}</Box>
                    <ListItemText primary={item.label} />
                </ListItem>
            ))}
        </List>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" elevation={1}>
                <Container maxWidth="lg">
                    <Toolbar sx={{ px: { xs: 1, sm: 2 } }}>
                        {isMobile && (
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>
                        )}

                        <Typography
                            variant="h6"
                            component={Link}
                            to="/"
                            sx={{
                                flexGrow: 1,
                                textDecoration: 'none',
                                color: 'inherit',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1
                            }}
                        >
                            Expense Tracker
                        </Typography>

                        {!isMobile && (
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                {navItems.map((item) => (
                                    <Button
                                        key={item.label}
                                        component={Link}
                                        to={item.path}
                                        color="inherit"
                                        startIcon={item.icon}
                                        sx={{
                                            bgcolor: location.pathname === item.path ? 'primary.dark' : 'transparent',
                                            '&:hover': {
                                                bgcolor: location.pathname === item.path
                                                    ? 'primary.dark'
                                                    : 'rgba(255, 255, 255, 0.1)'
                                            }
                                        }}
                                    >
                                        {item.label}
                                    </Button>
                                ))}
                            </Box>
                        )}
                    </Toolbar>
                </Container>
            </AppBar>

            <Drawer
                variant="temporary"
                anchor="left"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: 240,
                        bgcolor: theme.palette.background.default
                    },
                }}
            >
                {drawer}
            </Drawer>

            <Toolbar /> {/* This is for spacing below the fixed AppBar */}
        </Box>
    );
};
