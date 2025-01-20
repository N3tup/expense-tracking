import { createTheme, Theme } from '@mui/material';


export const createAppTheme = (darkMode: boolean): Theme => {
    const goldPalette = {
        main: '#FFA726', // Orange gold
        light: '#FFB74D', // Lighter orange gold
        dark: '#F57C00', // Darker orange gold
    };

    const bluePalette = {
        main: '#2196f3',
        light: '#64b5f6',
        dark: '#1976d2',
    };

    return createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
            primary: darkMode ? goldPalette : bluePalette,
            secondary: {
                main: darkMode ? '#FFD700' : '#ff4081', // Gold in dark mode
                light: darkMode ? '#FFE57F' : '#ff79b0',
                dark: darkMode ? '#FFC107' : '#c60055',
            },
            background: {
                default: darkMode ? '#121212' : '#f5f5f5',
                paper: darkMode ? '#1e1e1e' : '#ffffff',
            },
            text: {
                primary: darkMode ? '#ffffff' : '#000000',
                secondary: darkMode ? '#b0b0b0' : '#666666',
            },
        },
        shape: {
            borderRadius: 12,
        },
        typography: {
            fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
            h4: {
                fontWeight: 600,
                color: darkMode ? goldPalette.main : bluePalette.main,
            },
        },
        components: {
            MuiCard: {
                styleOverrides: {
                    root: {
                        boxShadow: darkMode
                            ? '0 4px 6px rgba(0,0,0,0.3)'
                            : '0 4px 6px rgba(0,0,0,0.1)',
                        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                        '&:hover': {
                            transform: 'translateY(-2px)',
                            boxShadow: darkMode
                                ? '0 6px 12px rgba(0,0,0,0.4)'
                                : '0 6px 12px rgba(0,0,0,0.15)',
                        },
                        '&::before': darkMode ? {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.03))',
                            borderRadius: 'inherit',
                        } : {},
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: 'none',
                        fontWeight: 600,
                        borderRadius: 8,
                    },
                    containedPrimary: {
                        background: darkMode
                            ? `linear-gradient(45deg, ${goldPalette.dark} 30%, ${goldPalette.main} 90%)`
                            : `linear-gradient(45deg, ${bluePalette.main} 30%, ${bluePalette.light} 90%)`,
                        '&:hover': {
                            background: darkMode
                                ? `linear-gradient(45deg, ${goldPalette.main} 30%, ${goldPalette.light} 90%)`
                                : `linear-gradient(45deg, ${bluePalette.dark} 30%, ${bluePalette.main} 90%)`,
                        },
                    },
                },
            },
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        background: darkMode
                            ? `linear-gradient(45deg, ${goldPalette.dark} 30%, ${goldPalette.main} 90%)`
                            : `linear-gradient(45deg, ${bluePalette.main} 30%, ${bluePalette.light} 90%)`,
                    },
                },
            },
            // Personnalisation du switch pour le thème sombre
            MuiSwitch: {
                styleOverrides: {
                    switchBase: {
                        '&.Mui-checked': {
                            color: darkMode ? goldPalette.main : bluePalette.main,
                            '& + .MuiSwitch-track': {
                                backgroundColor: darkMode ? goldPalette.main : bluePalette.main,
                            },
                        },
                    },
                },
            },
        },
    });
};
