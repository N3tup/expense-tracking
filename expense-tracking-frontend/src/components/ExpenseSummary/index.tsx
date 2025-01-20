import { Card, Typography, Grid, useTheme } from '@mui/material';
import { useExpenses } from '../../hooks/useExpenses';

export const ExpenseSummary = () => {
    const { expenses } = useExpenses();
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    const totalExpenses = expenses?.reduce((sum, expense) => sum + expense.amount, 0) || 0;

    const monthlyExpenses = expenses
        ? expenses
            .filter((expense) =>
                new Date(expense.date).getMonth() === new Date().getMonth() &&
                new Date(expense.date).getFullYear() === new Date().getFullYear()
            )
            .reduce((sum, expense) => sum + expense.amount, 0)
        : 0;

    return (
        <Card
            sx={{
                p: 3,
                mb: 4,
                background: isDarkMode
                    ? `linear-gradient(45deg, ${theme.palette.primary.dark} 30%, ${theme.palette.primary.main} 90%)`
                    : 'linear-gradient(45deg, #2196f3 30%, #21CBF3 90%)',
                '&:hover': {
                    transform: 'none',
                    boxShadow: 'none'
                },
                transform: 'none',
                boxShadow: 'none'
            }}
        >
            <Typography variant="h6" gutterBottom sx={{ color: '#3B3B3B' }}>
                Summary
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Typography variant="body2" sx={{ color: '#3B3B3B' }}>
                        Total Expenses
                    </Typography>
                    <Typography variant="h4" sx={{ color: '#3B3B3B' }}>
                        {totalExpenses.toFixed(2)} €
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="body2" sx={{ color: '#3B3B3B' }}>
                        This Month
                    </Typography>
                    <Typography variant="h4" sx={{ color: '#3B3B3B' }}>
                        {monthlyExpenses.toFixed(2)} €
                    </Typography>
                </Grid>
            </Grid>
        </Card>
    );
};
