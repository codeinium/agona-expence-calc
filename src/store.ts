import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ExpenseState {
    expenses: { id: number; name: string; amount: number }[];
    currency: string;
    addExpense: (name: string, amount: number) => void;
    deleteExpense: (id: number) => void;
    setCurrency: (currency: string) => void;
}

export const useExpenseStore = create<ExpenseState>(
    persist(
        (set) => ({
            expenses: [],
            currency: 'RUB',
            addExpense: (name, amount) =>
                set((state) => ({
                    expenses: [...state.expenses, { id: Date.now(), name, amount }],
                })),
            deleteExpense: (id) =>
                set((state) => ({
                    expenses: state.expenses.filter((expense) => expense.id !== id),
                })),
            setCurrency: (currency) => set({ currency }),
        }),
        {
            name: 'expense-storage',
        }
    )
);