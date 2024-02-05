import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import { AiOutlineCopyright } from "react-icons/ai";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Meet Hussain",
      amount: 10,
      category: "Entertainment",
    },
    {
      id: 2,
      description: "Buy new laptop",
      amount: 600,
      category: "Utilities",
    },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Expense Tracker</h1>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>

      <ExpenseFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      />
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
      <footer className="footer">
        <div className="text-center opacity-50">
          <AiOutlineCopyright />
          <span className="m-1">Hussain Hamim</span>
        </div>
      </footer>
    </>
  );
}

export default App;
