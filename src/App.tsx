import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";

export const categories = ["Groceries", "Utilities", "Entertainment"];

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, discription: "aaaa", amount: 10, category: "Groceries" },
    { id: 2, discription: "bbbb", amount: 10, category: "Utilities" },
    { id: 3, discription: "ccc", amount: 10, category: "Utilities" },
    { id: 4, discription: "dddd", amount: 10, category: "Entertainment" },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Expense Tracker</h1>
      <div className="mb-5">
        <ExpenseForm />
      </div>

      <ExpenseFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      />
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </>
  );
}

export default App;
