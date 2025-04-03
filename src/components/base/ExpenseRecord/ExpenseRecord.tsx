import React from 'react';
import { Button } from '@mui/material';
import { useExpenseStore } from '../../../store.ts';

interface ExpenseProps {
    expense: { id: number; name: string; amount: number };
    onDelete: (id: number) => void;
}

const Expense: React.FC<ExpenseProps> = ({ expense, onDelete }) => {
    const currency = useExpenseStore((state) => state.currency);
    const currencySymbols: { [key: string]: string } = {
        USD: '$',
        EUR: '€',
    };
    const symbol = currencySymbols[currency] || currency;

    return (
        <div style={{ marginBottom: '10px' }}>
            <span>
                {expense.name}: {symbol}{expense.amount}
            </span>
            <Button
                onClick={() => onDelete(expense.id)}
                variant="outlined"
                color="error"
                style={{ marginLeft: '10px' }}
            >
                Удалить
            </Button>
        </div>
    );
};

export { Expense };