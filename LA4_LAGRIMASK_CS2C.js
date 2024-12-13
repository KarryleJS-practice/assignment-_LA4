// Simple Queueing System for Customer Service
let queue = [];
const maxCustomers = 5;

// Predefined customer names
const customers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

// Prompt to add customers to the queue
while (queue.length < maxCustomers) {
    let name = prompt("Enter your name to join the queue:");
    if (!name) {
        alert("Name cannot be empty.");
        continue;
    }
    queue.push(name);
    console.log(`${name}, you are number ${queue.length} in the queue.`);
    alert(`${name}, you are number ${queue.length} in the queue.`);
}

// Processing the queue
while (queue.length > 0) {
    console.log(`Current Queue: ${queue.join(", ")}`);
    let number = parseInt(prompt(`Enter the number to be serviced (1-${queue.length}):`));
    
    if (isNaN(number) || number < 1 || number > queue.length) {
        alert("Invalid number. Please try again.");
        continue;
    }

    let servicedCustomer = queue.splice(number - 1, 1)[0];
    console.log(`Serviced: ${servicedCustomer}`);
    alert(`Serviced: ${servicedCustomer}`);
}

// If queue is empty
console.log("The queue is now empty.");
alert("The queue is now empty.");
