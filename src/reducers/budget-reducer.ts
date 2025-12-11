export type BudgetActions =
  { type: 'add-bugdet', payload: { budget: number } };

export type BudgetState = {
  budget: number
};

export const initialState: BudgetState = {
  budget: 0
};

export const budgetReducer = (
  state: BudgetState = initialState,
  action: BudgetActions
) => {
  if (action.type === 'add-bugdet') {

    return {
      ...state,
      budget: action.payload.budget
    };
  }

  return state;
};