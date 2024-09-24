// app.js
// Get elements
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Add event listener to the form to handle adding new tasks
taskForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting in the traditional way

    // Get the task input value
    const taskText = taskInput.value;
    
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a delete button for each task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');

    // Append delete button to the list item
    li.appendChild(deleteButton);

    // Append the new task to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";

    // Delete task when clicking the delete button
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(li);
    });
});
