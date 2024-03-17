// Gettting the checkbox element
const checkbox = document.getElementById('checkbox');

// Getting the tables section
const tablesSection = document.querySelector('.tablesSection');

// Array for storing inventory items
const inventoryItems = [];

// Function for checking if an item exists already
function checkIfExists(item, inventoryItems) {
	for (var i = 0; i < inventoryItems.length; i++) {
		if(item == inventoryItems[i]) {
			return true;
		}
	}
}


// Function for adding new item in the inventory
inputForm.addEventListener('submit', function (e) {
	e.preventDefault();

	// Getting the item from the input field
	const item = document.getElementById('item').value;

	// Getting the quantity from the input field
	const quantity = document.getElementById('quantity').value;

	// We can't let an input field be empty
	if(item.length == 0 || quantity.length == 0) {
		alert("Fill out the form first");
	}

	// If all input fields are not empty, go here
	else {

		// Check if item already exists
		if (checkIfExists(item, inventoryItems)) {
			alert('Item already taken');
		}

		// If it doesn't exist yet, go here
		else {

			// push to the inventoryItems list
			inventoryItems.push(item);
			console.log(inventoryItems)

			// create the table row element for storing items
			const trElement = document.createElement('tr');

			// create table data for storing item name
			const tdElementForItemName = document.createElement('td');

			// create table data for storing quantity 
			const tdElementForQty = document.createElement('td');

			// setting the text content of the item name and quantity
			tdElementForItemName.textContent = item;
			tdElementForQty.textContent = quantity;

			// adding to the table data element to the table row
			trElement.appendChild(tdElementForItemName);
			trElement.appendChild(tdElementForQty);

			// adding table row element to the table
			document.querySelector('table').appendChild(trElement);
		}

	}

})

checkbox.addEventListener('change', function(e) {
	e.preventDefault();
	if(checkbox.checked == true) {
		tablesSection.style.display = "block";
	}
	else {
		tablesSection.style.display = "none";
	}

})

// Selecting the table and defining an event listener to handle clicks on table cells
document.querySelector('table').addEventListener('click', function(event) {
    // Checking if the clicked element is a table cell in the Quantity column
    if (event.target.tagName === 'TD' && event.target.cellIndex === 1 && event.target.parentElement.rowIndex > 0) {
        // Prompting the user to enter a new quantity
        var newQuantity = prompt('Enter the new quantity:', event.target.textContent.trim());
        
        // Checking if the user entered a valid quantity
        if (newQuantity !== null && !isNaN(newQuantity) && newQuantity !== '') {
            // Updating the quantity in the table
            event.target.textContent = parseInt(newQuantity);
        }
    }
});
