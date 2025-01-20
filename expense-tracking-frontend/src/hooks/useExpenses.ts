import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { expenseApi } from '../services/api';
import { ExpenseFormData } from '../types/expense';

export const useExpenses = () => {
    const queryClient = useQueryClient();

    const { data: expenses = [], isLoading, error } = useQuery({
        queryKey: ['expenses'],
        queryFn: expenseApi.getAll
    });

    const createMutation = useMutation({
        mutationFn: (newExpense: ExpenseFormData) => expenseApi.create(newExpense),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['expenses'] });
        },
    });

    const deleteMutation = useMutation({
        mutationFn: (id: number) => expenseApi.delete(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['expenses'] });
        },
    });

    const createExpense = async (expense: ExpenseFormData) => {
        try {
            await createMutation.mutateAsync(expense);
            return true;
        } catch (error) {
            console.error('Error creating expense:', error);
            throw error;
        }
    };

    return {
        expenses,
        isLoading,
        error,
        createExpense,
        deleteExpense: deleteMutation.mutate,
        isCreating: createMutation.status === 'loading',
        createError: createMutation.error
    };
};