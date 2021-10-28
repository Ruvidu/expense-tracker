import 'bootstrap/dist/css/bootstrap.min.css';
import AddExpenseForm from './components/AddExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {
  return (
    <div className="container">
      <h1 className="mt-3">Expense Tracker</h1>
      <h3 className='mt-3'>Expenses</h3>
      <div className='row mt-3'>
        <div className='col-sm'>
          <ExpenseList />
        </div>
      </div>
      <h3 className='mt-3'>Add Expense</h3>
      <div className='mt-3'>
        <div className='col-som'>
          <AddExpenseForm />
        </div>

      </div>
    </div>
  );
}

export default App;
