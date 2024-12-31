document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('task-input');
  const addTaskBtn = document.getElementById('add-task-btn');
  const taskList = document.getElementById('task-list');
  const taskCounter = document.getElementById('task-counter');

  let totalTasks = 0;
  let completedTasks = 0;

  // Debug: Check if elements are loaded
  console.log("Task Input:", taskInput);
  console.log("Add Task Button:", addTaskBtn);
  console.log("Task List:", taskList);

  addTaskBtn.addEventListener('click', () => {
    console.log("Add Task Button Clicked");
    addTask();
  });

  function addTask() {
    const taskTitle = taskInput.value.trim();
    if (taskTitle === '') {
      alert('Task cannot be empty');
      return;
    }

    // Create task item
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');

    // Checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', toggleTaskCompletion);

    // Task Title
    const taskText = document.createElement('span');
    taskText.textContent = taskTitle;

    // Delete Button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', deleteTask);

    // Append elements to task item
    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskText);
    taskItem.appendChild(deleteBtn);

    // Add task item to list
    taskList.appendChild(taskItem);

    // Update counters
    totalTasks++;
    updateTaskCounter();

    // Clear input
    taskInput.value = '';
  }

  function toggleTaskCompletion(e) {
    const taskItem = e.target.parentElement;
    if (e.target.checked) {
      taskItem.classList.add('completed');
      completedTasks++;
    } else {
      taskItem.classList.remove('completed');
      completedTasks--;
    }
    updateTaskCounter();
  }

  function deleteTask(e) {
    const taskItem = e.target.parentElement.parentElement;
    if (taskItem.querySelector('input[type="checkbox"]').checked) {
      completedTasks--;
    }
    totalTasks--;
    taskList.removeChild(taskItem);
    updateTaskCounter();
  }

  function updateTaskCounter() {
    taskCounter.textContent = `${completedTasks} tasks completed out of ${totalTasks}`;
  }
});
