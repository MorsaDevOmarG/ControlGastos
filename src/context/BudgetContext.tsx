import { createContext, useReducer, Dispatch, ReactNode, useMemo } from "react";
import {
  budgetReducer,
  initialState,
  BudgetActions,
  BudgetState,
} from "../reducers/budget-reducer";
import { triggerAsyncId } from "async_hooks";

type BudgetContextProps = {
  state: BudgetState;
  dispatch: Dispatch<BudgetActions>;
  totalExpenses: number,
  remainingBudget: number
};

type BudgetProviderProps = {
  children: ReactNode;
};

// export const BudgetContext = createContext<BudgetContextProps>({} as BudgetContextProps);
export const BudgetContext = createContext<BudgetContextProps>(null!);

// De donde vienen los datos, children hace referencia a los hijos de un COMPONENTE
export const BudgetProvider = ({ children }: BudgetProviderProps) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState);
  const totalExpenses = useMemo(
    () => state.expenses.reduce((total, expense) => expense.amount + total, 0),
    [state.expenses]
  );
  const remainingBudget = state.budget - totalExpenses;

  // const auth = true;

  return (
    <BudgetContext.Provider
      value={{
        state,
        dispatch,
        // auth
        totalExpenses,
        remainingBudget,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
