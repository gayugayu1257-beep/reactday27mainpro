import { ExpenseProvider } from "../../context/ExpenseContext";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

export default function ExpensePage() {
  return (
    <ExpenseProvider>
      <h2>Expense Tracker</h2>
      <ExpenseForm />
      <ExpenseList />
    </ExpenseProvider>
  );
}
