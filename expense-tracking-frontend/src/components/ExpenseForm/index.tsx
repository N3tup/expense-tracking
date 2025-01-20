import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
    TextField,
    Button,
    Box,
    Card,
    Typography,
    MenuItem,
    useTheme,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { useExpenses } from '../../hooks/useExpenses';
import { styled } from '@mui/material/styles';

type FormInputs = {
    description: string;
    amount: number;
    category: string;
    date: Date;
};

const categories = [
    'Food',
    'Transportation',
    'Entertainment',
    'Shopping',
    'Health',
    'Education',
    'Bills',
    'Other',
];

const StyledForm = styled('form')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    '& .submit-button': {
        cursor: 'pointer !important',
        '&:hover': {
            cursor: 'pointer !important'
        }
    }
}));

export const ExpenseForm = () => {
    const { addExpense } = useExpenses();
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormInputs>({
        defaultValues: {
            description: '',
            amount: 0,
            category: '',
            date: new Date(),
        },
    });

    const onSubmit = (data: FormInputs) => {
        addExpense(data);
        reset();
    };

    return (
        <Card
            sx={{
                p: 3,
                mb: 4,
                background: isDarkMode
                    ? theme.palette.background.paper
                    : '#fff',
            }}
        >
            <Typography variant="h6" gutterBottom sx={{ color: '#3B3B3B' }}>
                Add New Expense
            </Typography>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="description"
                    control={control}
                    rules={{ required: 'Description is required' }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Description"
                            error={!!errors.description}
                            helperText={errors.description?.message}
                            fullWidth
                        />
                    )}
                />

                <Controller
                    name="amount"
                    control={control}
                    rules={{
                        required: 'Amount is required',
                        min: {
                            value: 0,
                            message: 'Amount must be positive',
                        },
                    }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Amount"
                            type="number"
                            error={!!errors.amount}
                            helperText={errors.amount?.message}
                            fullWidth
                        />
                    )}
                />

                <Controller
                    name="category"
                    control={control}
                    rules={{ required: 'Category is required' }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            select
                            label="Category"
                            error={!!errors.category}
                            helperText={errors.category?.message}
                            fullWidth
                        >
                            {categories.map((category) => (
                                <MenuItem key={category} value={category}>
                                    {category}
                                </MenuItem>
                            ))}
                        </TextField>
                    )}
                />

                <Controller
                    name="date"
                    control={control}
                    rules={{ required: 'Date is required' }}
                    render={({ field }) => (
                        <DatePicker
                            {...field}
                            label="Date"
                            slotProps={{
                                textField: {
                                    fullWidth: true,
                                    error: !!errors.date,
                                    helperText: errors.date?.message,
                                },
                            }}
                        />
                    )}
                />

                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className="submit-button"
                        sx={{
                            cursor: 'pointer !important',
                            '&:hover': {
                                cursor: 'pointer !important'
                            },
                            '&:disabled': {
                                cursor: 'not-allowed !important'
                            }
                        }}
                    >
                        Add Expense
                    </Button>
                </Box>
            </StyledForm>
        </Card>
    );
};
