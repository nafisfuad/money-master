// income
function getIncome() {
    const income = parseFloat(document.getElementById('income').value);

    if (isNaN(income) || income < 0) {
        return NaN;
    }
    return income;
}

// total expense
function getTotalExpenses() {
    const food = parseFloat(document.getElementById('food').value);
    const rent = parseFloat(document.getElementById('rent').value);
    const clothes = parseFloat(document.getElementById('clothes').value);

    if (isNaN(food) || isNaN(rent) || isNaN(clothes) || food < 0 || rent < 0 || clothes < 0) {
        return NaN;
    }

    const totalExpenses = food + rent + clothes;
    return totalExpenses;
}

// balance
function getBalance() {
    const income = getIncome();
    const totalExpenses = getTotalExpenses();

    if (!isNaN(income) && !isNaN(totalExpenses)) {
        const balance = income - totalExpenses;
        return balance;
    }
    return NaN;

}

function clearSavingAndRemaining() {
    document.getElementById('saving-amount').innerText = '';
    document.getElementById('remaining-balance').innerText = '';
}

// error handling
function errorMessage(message) {
    document.getElementById('error-message').innerText = message;
}


// calculate button
document.getElementById('calculate').addEventListener('click', function () {
    const income = getIncome();
    const totalExpenses = getTotalExpenses();
    const balance = getBalance();

    if (!isNaN(totalExpenses) && !isNaN(balance)) {
        if (totalExpenses > income) {
            errorMessage('Insufficient amount.')
        } else {
            document.getElementById('total-expense').innerText = totalExpenses;
            document.getElementById('balance').innerText = balance;
            errorMessage('');
        }

    } else {
        errorMessage('Non-negative NUMBERS only!');
    }


});

// save button
document.getElementById('calculate-save').addEventListener('click', function () {
    const income = getIncome();
    const balance = getBalance();
    const save = parseFloat(document.getElementById('save').value);
    if (!isNaN(income) && !isNaN(balance) && !isNaN(save)) {
        const savingAmount = (income * save) / 100;
        const remainingBalance = balance - savingAmount;
        if (savingAmount > balance) {
            errorMessage('Not enough balance!');
            clearSavingAndRemaining();
        }
        else {
            document.getElementById('saving-amount').innerText = savingAmount;
            document.getElementById('remaining-balance').innerText = remainingBalance;
            errorMessage('');
        }
    } else {
        errorMessage('Non-negative NUMBERS only!');
        clearSavingAndRemaining();
    }
});


