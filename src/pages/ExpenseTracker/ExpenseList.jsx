import { useContext } from "react";
import { ExpenseContext } from "../../context/ExpenseContext";

export default function ExpenseList() {
  const { expenses } = useContext(ExpenseContext);

  const total = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  return (
    <div>
      <h3>Expense List</h3>

      {expenses.length === 0 && <p>No expenses added</p>}

      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.title} - ₹{expense.amount}
          </li>
        ))}
      </ul>

      <h4>Total: ₹{total}</h4>
    </div>
  );
}
