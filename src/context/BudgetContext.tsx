import { createContext, useReducer, Dispatch } from "react";
import {
  budgetReducer,
  initialState,
  BudgetActions,
  BudgetState,
} from "../reducers/budget-reducer";

type BudgetContextProps = {
  state: BudgetState;
  dispatch: Dispatch<BudgetActions>;
};

// export const BudgetContext = createContext<BudgetContextProps>({} as BudgetContextProps);
export const BudgetContext = createContext<BudgetContextProps>(null!);

// De donde vienen los datos, children hace referencia a los hijos de un COMPONENTE
export const BudgetProvider = ({ children }) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState);

  return (
    <BudgetContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
