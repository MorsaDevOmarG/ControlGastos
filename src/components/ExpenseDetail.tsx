import { formatDate } from "../helpers";
import type { Expense } from "../types";
import AmountDisplay from "./AmountDisplay";

type ExpenseDetailProps = {
  expense: Expense
};

export default function ExpenseDetail({expense} : ExpenseDetailProps) {
  return (
    <div className="">
      <div></div>

      <div>
        <p>{expense.expenseName}</p>
        <p>{formatDate(expense.date!.toString())}</p>
      </div>

      <AmountDisplay
        amount={expense.amount}
      />
    </div>
  );
};
