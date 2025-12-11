import { createContext, useReducer, Dispatch, ReactNode } from "react";
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
};

type BudgetProviderProps = {
  children: ReactNode
};

// export const BudgetContext = createContext<BudgetContextProps>({} as BudgetContextProps);
export const BudgetContext = createContext<BudgetContextProps>(null!);

// De donde vienen los datos, children hace referencia a los hijos de un COMPONENTE
export const BudgetProvider = ({ children } : BudgetProviderProps) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState);

  // const auth = true;

  return (
    <BudgetContext.Provider
      value={{
        state,
        dispatch,
        // auth
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
