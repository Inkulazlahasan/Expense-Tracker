const expenses = [];

const expenseForm = document.getElementById('expenseForm');
const amountInput = document.getElementById('amountInput');
const totalEl = document.getElementById('total');

function getTotalExpense() {
  return expenses.reduce((sum, amount) => sum + amount, 0);
}

function updateTotalOnScreen() {
  totalEl.textContent = getTotalExpense();
}

expenseForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const value = amountInput.value.trim();
  const amount = Number(value);

  if (value === '' || Number.isNaN(amount)) {
    alert('Please enter a valid number.');
    return;
  }

  expenses.push(amount);
  updateTotalOnScreen();
  amountInput.value = '';
  amountInput.focus();
});
