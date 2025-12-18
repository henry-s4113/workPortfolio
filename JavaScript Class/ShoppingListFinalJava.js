//Todo: Write a Javascript function for each programming concept 
//I've learned in this class.

//For this project I borrowed and modified a few lines of code from
//our Lab 5 WebApp_ToDo.html 


document.addEventListener('DOMContentLoaded', initialize);

// Array of objects to store shopping list items
let items = [];

// Test values to prove the code works
function initialize() {
    items = [
        { name: "Milk", priority: 1, quantity: 1, completion: false },
        { name: "Bread", priority: 3, quantity: 1, completion: false },
        { name: "Eggs", priority: 2, quantity: 12, completion: false }
    ];
    
    addRows();
}

// Loop
function addRows() {
    const listRows = document.getElementById("listRows");
    listRows.innerHTML = '';

    for (let i = 0; i < items.length; i++) {
        addRow(i);
    }
}

// Functions
function addRow(index) {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${index + 1}</td>
        <td>${items[index].name}</td>
        <td>${items[index].priority}</td>
        <td>${items[index].quantity}</td>
        <td><input type="checkbox" ${items[index].completion ? 'checked' : ''} onchange="changeDone(${index}, this.checked)"></td>
    `;
    document.getElementById("listRows").appendChild(newRow);
}

// Selection Functions
function changeDone(index, doneBox) {
    if (index >= 0 && index < items.length) {
        items[index].completion = doneBox;
    }
}

function addItems(grocery, priority, quantity) {
    priority = parseInt(priority, 10);
    quantity = parseInt(quantity, 10);

    if (isNaN(quantity) || quantity <= 0) {
        alert("Quantity must be a numerical value.");
        return false;
    }
    if (isNaN(priority) || priority <= 0) {
        alert("Priority must be a numerical value.");
        return false;
    }

    //Object for a new Item
    const newItem = {
        name: grocery,
        priority: priority,
        quantity: quantity,
        completion: false
    };
    
    items.push(newItem);
    return true;
}

function addRowAndItem() {
    const name = document.getElementById("itemName").value.trim();
    const priority = document.getElementById("priority").value;
    const quantity = document.getElementById("quantity").value;

    if (addItems(name, priority, quantity)) {
        addRow(items.length - 1);
    }

    // Clear input fields
    document.getElementById("itemName").value = '';
    document.getElementById("priority").value = '';
    document.getElementById("quantity").value = '';
}

function removeRow(i) {
    const row = document.getElementById("row" + i);
    if (row) {
        row.remove();
    }
}

function removeItems(index) {  
    if (index >= 0 && index < items.length) {
        items.splice(index, 1);
    }
}

function deleteCheckedItems() {
    const rows = document.querySelectorAll("#listRows tr");
    rows.forEach((row, index) => {
        const checkbox = row.querySelector("input[type='checkbox']");
        if (checkbox && checkbox.checked) {
            removeItems(index);
            row.remove();
        }
    });
}