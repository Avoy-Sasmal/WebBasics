document.getElementById("add-task-btn").addEventListener("click", () => {
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  if (taskInput.value.trim()) {
    const li = document.createElement("li");
    li.innerHTML = `${taskInput.value} <button class="delete-btn">Delete</button>`;
    taskList.appendChild(li);

    li.querySelector(".delete-btn").addEventListener("click", () => {
      taskList.removeChild(li);
    });

    taskInput.value = "";
  }
});
