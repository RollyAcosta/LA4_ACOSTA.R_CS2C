// Initialize the customer queue with predefined names.
let customerQueue = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

// Function to service a customer
function serviceCustomer() {
  // Check if the queue is empty
  if (customerQueue.length === 0) {
    alert("The queue is empty! No customers to service.");
    return;
  }

  // Prompt the user to enter a customer number (1-based index)
  let customerNumber = prompt(`Enter a customer number (1-${customerQueue.length}) to service:`);

  // Convert the entered number to an integer
  customerNumber = parseInt(customerNumber);

  // Validate if the entered number is within the valid range
  if (customerNumber >= 1 && customerNumber <= customerQueue.length) {
    // Remove and retrieve the customer from the queue
    let servicedCustomer = customerQueue.splice(customerNumber - 1, 1)[0];
    
    // Alert the user and log the serviced customer
    alert(`Customer ${servicedCustomer} has been serviced.`);
    console.log(`Serviced customer: ${servicedCustomer}`);
    console.log("Updated Queue: " + customerQueue.join(", "));
  } else {
    // Inform the user if the entered number is invalid
    alert("Invalid number! Please enter a valid customer number.");
  }
}

// Function to start the queueing system
function startQueueSystem() {
  // Welcome message
  alert("Welcome to the Queueing System!");

  // Loop through and service all customers in the queue
  while (customerQueue.length > 0) {
    serviceCustomer(); // Call the function to service a customer
  }

  // Once all customers are serviced, show a final message
  alert("All customers have been serviced. Thank you!");
}

// Start the queue system
startQueueSystem();
