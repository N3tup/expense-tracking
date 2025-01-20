export interface ExpenseFormData {
    description: string;
    amount: number;
    date: string;
    category: string;
}

export enum ExpenseCategory {
    FOOD = 'FOOD',
    HOUSING = 'HOUSING',
    TRANSPORT = 'TRANSPORT',
    UTILITIES = 'UTILITIES',
    ENTERTAINMENT = 'ENTERTAINMENT',
    OTHER = 'OTHER'
}

export interface ExpenseFormData {
    description: string;
    amount: number;
    date: string;
    category: ExpenseCategory; // Maintenant nous utilisons l'enum
}

export interface Expense extends ExpenseFormData {
    id: number;
}

