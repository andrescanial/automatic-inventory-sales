let inventory = [];

// Event listener para sa login form
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error');

    // Authentication check
    if (email === 'andrescanialaloha@gmail.com' && password === '123') {
        errorMessage.textContent = '';
        document.getElementById('loginForm').classList.add('hidden');
        document.getElementById('dashboard').classList.remove('hidden');
        loadInventoryData();
    } else {
        errorMessage.textContent = 'Invalid email or password.';
    }
});

// Event listener para sa logout button
document.getElementById('logout').addEventListener('click', function() {
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('dashboard').classList.add('hidden');
    document.getElementById('error').textContent = '';
});

// Event listener para sa add inventory form
document.getElementById('addInventoryForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const productName = document.getElementById('productName').value;
    const productQuantity = parseInt(document.getElementById('productQuantity').value);

    // Add new product to inventory
    inventory.push({ name: productName, quantity: productQuantity });
    document.getElementById('productName').value = '';
    document.getElementById('productQuantity').value = '';

    loadInventoryData();
});

// Function para i-load ang inventory data
function loadInventoryData() {
    const inventoryData = document.getElementById('inventoryData');
    inventoryData.innerHTML = '<h3>Current Inventory</h3>';
    
    if (inventory.length === 0) {
        inventoryData.innerHTML += '<p>No products in inventory.</p>';
    } else {
        const list = document.createElement('ul');
        inventory.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name}: ${item.quantity} units`;
            list.appendChild(listItem);
        });
        inventoryData.appendChild(list);
    }
}
