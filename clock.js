<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Todo List</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>My Todo List</h1>
  
  <ul id="task-list">
    <li>
      Task 1
      <button onclick="updateStatus(this, 'Started')">Started</button>
      <button onclick="updateStatus(this, '50% done')">50% done</button>
      <button onclick="updateStatus(this, '100% done')">100% done</button>
      <button onclick="deleteTask(this)">Delete</button>
    </li>
    <li>
      Task 2
      <button onclick="updateStatus(this, 'Started')">Started</button>
      <button onclick="updateStatus(this, '50% done')">50% done</button>
      <button onclick="updateStatus(this, '100% done')">100% done</button>
      <button onclick="deleteTask(this)">Delete</button>
    </li>
  </ul>

  <script>
    function updateStatus(button, status) {
      const li = button.parentElement;
      li.style.color = status === '100% done' ? 'green' : 'black';
      li.dataset.status = status;
      alert(`Task updated: ${status}`);
    }

    function deleteTask(button) {
      const li = button.parentElement;
      li.remove();
    }
  </script>
</body>
</html>
