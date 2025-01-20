import { Typography, Box } from '@mui/material';
import { ExpenseForm } from '../../components/ExpenseForm';
import { ExpenseList } from '../../components/ExpenseList';
import { ExpenseSummary } from '../../components/ExpenseSummary';

export const Home = () => {
    return (
        <>
            <Typography
                variant="h4"
                component="h1"
                sx={{
                    mb: 4,
                    textAlign: 'center',
                    color: 'primary.main',
                    fontWeight: 'bold',
                }}
            >
                Expense Tracker
            </Typography>
            <Box
                sx={{
                    display: 'grid',
                    gap: 4,
                    gridTemplateColumns: { xs: '1fr', md: '1fr 2fr' },
                }}
            >
                <Box>
                    <ExpenseSummary />
                    <ExpenseForm />
                </Box>
                <ExpenseList />
            </Box>
        </>
    );
};
