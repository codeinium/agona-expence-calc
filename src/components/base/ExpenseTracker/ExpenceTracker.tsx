import React from 'react';
import { Button } from '@mui/material';
import { useExpenseStore } from '../../../store';
import { ExpenseForm } from '../ExpenceForm/ExpenseForm.tsx';
import { Expense } from '../ExpenseRecord/ExpenseRecord.tsx';

const ExpenseTracker: React.FC = () => {
    const currency = useExpenseStore((state) => state.currency);
    const setCurrency = useExpenseStore((state) => state.setCurrency);
    const expenses = useExpenseStore((state) => state.expenses);
    const addExpense = useExpenseStore((state) => state.addExpense);
    const deleteExpense = useExpenseStore((state) => state.deleteExpense);

    const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

    const currencySymbols: { [key: string]: string } = {
        USD: '$',
        EUR: '€',
        RUB: '₽',
    };
    const symbol = currencySymbols[currency] || currency;

    return (
        <div className="tracker-container">
            <h1>Калькулятор расходов</h1>
            <div className="currency-buttons">
                <Button
                    onClick={() => setCurrency('USD')}
                    disabled={currency === 'USD'}
                >
                    USD
                </Button>
                <Button
                    onClick={() => setCurrency('EUR')}
                    disabled={currency === 'EUR'}
                >
                    EUR
                </Button>
                <Button
                    onClick={() => setCurrency('RUB')}
                    disabled={currency === 'RUB'}
                >
                    RUB
                </Button>
            </div>
            <ExpenseForm onAddExpense={addExpense} />
            <div>
                {expenses.map((expense) => (
                    <Expense
                        key={expense.id}
                        expense={expense}
                        onDelete={deleteExpense}
                    />
                ))}
            </div>
            <div>Общая сумма: {symbol}{total}</div>
        </div>
    );
};

export { ExpenseTracker };