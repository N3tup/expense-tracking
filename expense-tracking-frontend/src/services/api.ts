import axios from 'axios';
import { Expense, ExpenseFormData } from '../types/expense';

const API_URL = 'http://localhost:8080/api';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const expenseApi = {
    getAll: async (): Promise<Expense[]> => {
        try {
            const response = await api.get('/expenses');
            return response.data;
        } catch (error) {
            console.error('Error fetching expenses:', error);
            throw error;
        }
    },

    create: async (expense: ExpenseFormData): Promise<Expense> => {
        try {
            console.log('Sending to API:', expense); // Debug log
            const response = await api.post('/expenses', expense);
            return response.data;
        } catch (error) {
            console.error('Error creating expense:', error);
            throw error;
        }
    },

    delete: async (id: number): Promise<void> => {
        try {
            await api.delete(`/expenses/${id}`);
        } catch (error) {
            console.error('Error deleting expense:', error);
            throw error;
        }
    },
};
