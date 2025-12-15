import { useMemo } from 'react';
import { useBudget } from '../hooks/useBudget'
import ExpenseDetail from './ExpenseDetail';

export default function ExpenseList() {
  const { state } = useBudget();

  const isEmpty = useMemo(() => state.expenses.length === 0, [state.expenses] );

  return (
    <div>
      {isEmpty ? (
        <p>No hay gastos...</p>
      ) : (
        <>
            <p>Listado de gastos</p>
            
            {
              state.expenses.map(
                expense => (
                  <ExpenseDetail />
                )
              )
            }
        </>
      )}
    </div>
  );
};
