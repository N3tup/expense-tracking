import {
    Typography,
    Card,
    Box,
    Switch,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    ListSubheader,
    Divider,
    useTheme
} from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useThemeContext } from '../../contexts/ThemeContext';

export const Settings = () => {
    const { darkMode, toggleDarkMode } = useThemeContext();
    const theme = useTheme();

    return (
        <Box>
            <Typography variant="h4" component="h1" sx={{ mb: 4 }}>
                Settings
            </Typography>
            <Card sx={{ p: 0 }}>
                <List
                    subheader={
                        <ListSubheader
                            sx={{
                                bgcolor: 'background.paper',
                                color: 'text.primary'
                            }}
                        >
                            Appearance
                        </ListSubheader>
                    }
                >
                    <ListItem>
                        <DarkModeIcon sx={{ mr: 2, color: theme.palette.mode === 'dark' ? 'primary.main' : 'text.secondary' }} />
                        <ListItemText
                            primary="Dark Mode"
                            secondary="Toggle dark/light theme"
                        />
                        <ListItemSecondaryAction>
                            <Switch
                                edge="end"
                                checked={darkMode}
                                onChange={toggleDarkMode}
                                color="primary"
                            />
                        </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                    {/* Vous pouvez ajouter d'autres paramètres ici */}
                </List>
            </Card>
        </Box>
    );
};
