import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

interface ExpenseFormProps {
    onAddExpense: (name: string, amount: number) => void;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ onAddExpense }) => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name && amount) {
            onAddExpense(name, Number(amount));
            setName('');
            setAmount('');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
            <TextField
                label="Название расхода"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ marginRight: '10px' }}
            />
            <TextField
                label="Сумма"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                style={{ marginRight: '10px' }}
            />
            <Button type="submit" variant="contained">
                Добавить
            </Button>
        </form>
    );
};

export { ExpenseForm };
