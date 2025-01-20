import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TableSortLabel,
    Card,
    IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useExpenses } from '../../hooks/useExpenses';
import { useState } from 'react';
import { Expense } from '../../types/expense';

export const ExpenseList = () => {
    const { expenses, deleteExpense } = useExpenses();
    const [orderBy, setOrderBy] = useState<keyof Expense>('date');
    const [order, setOrder] = useState<'asc' | 'desc'>('desc');

    const handleSort = (property: keyof Expense) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const sortedExpenses = expenses ? [...expenses].sort((a, b) => {
        if (order === 'asc') {
            return a[orderBy] > b[orderBy] ? 1 : -1;
        }
        return a[orderBy] < b[orderBy] ? 1 : -1;
    }) : [];

    return (
        <Card sx={{ overflow: 'hidden' }}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow sx={{ bgcolor: 'primary.main' }}>
                            <TableCell sx={{ color: 'white' }}>
                                <TableSortLabel
                                    active={orderBy === 'date'}
                                    direction={orderBy === 'date' ? order : 'asc'}
                                    onClick={() => handleSort('date')}
                                    sx={{
                                        '& .MuiTableSortLabel-icon': {
                                            color: 'white !important',
                                        },
                                        '&.Mui-active': {
                                            color: 'white !important',
                                        },
                                        color: 'white !important',
                                    }}
                                >
                                    Date
                                </TableSortLabel>
                            </TableCell>
                            <TableCell sx={{ color: 'white' }}>Description</TableCell>
                            <TableCell sx={{ color: 'white' }}>Category</TableCell>
                            <TableCell sx={{ color: 'white' }}>Amount</TableCell>
                            <TableCell sx={{ color: 'white' }}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedExpenses.map((expense) => (
                            <TableRow
                                key={expense.id}
                                sx={{
                                    '&:hover': {
                                        bgcolor: 'action.hover',
                                    },
                                }}
                            >
                                <TableCell>{new Date(expense.date).toLocaleDateString()}</TableCell>
                                <TableCell>{expense.description}</TableCell>
                                <TableCell>{expense.category}</TableCell>
                                <TableCell>{expense.amount.toFixed(2)} €</TableCell>
                                <TableCell>
                                    <IconButton
                                        onClick={() => deleteExpense(expense.id)}
                                        color="error"
                                        size="small"
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
    );
};